import { useState } from 'react';
import { createLead } from '../services/leadService';
import { validateName, validateEmail, validateBudget, validateMessage } from '../utils/validation';
import { useToast } from './Toast';

const budgetOptions = [
  { value: '', label: 'Select a budget range' },
  { value: 'Under $1,000', label: 'Under $1,000' },
  { value: '$1,000\u2013$5,000', label: '$1,000\u2013$5,000' },
  { value: '$5,000\u2013$10,000', label: '$5,000\u2013$10,000' },
  { value: 'Over $10,000', label: 'Over $10,000' },
];

const initialForm = { name: '', email: '', budget: '', message: '' };

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const addToast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nameErr = validateName(form.name);
    const emailErr = validateEmail(form.email);
    const budgetErr = validateBudget(form.budget);
    const msgErr = validateMessage(form.message);
    const all = { name: nameErr, email: emailErr, budget: budgetErr, message: msgErr };
    setErrors(all);
    return !Object.values(all).some(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await createLead({
        name: form.name.trim(),
        email: form.email.trim(),
        budget: form.budget,
        message: form.message.trim(),
      });
      addToast('Your inquiry has been submitted successfully. Our team will be in touch shortly.', 'success');
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      const msg =
        err.response?.data?.message || 'Something went wrong. Please try again later.';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Tell us about your project</h2>
            <p className="mt-4 text-lg text-slate-600">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-base p-8 md:p-10 space-y-5"
          >
            <div>
              <label htmlFor="name" className="label-base">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`input-base ${
                  errors.name ? 'input-error' : ''
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="label-base">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`input-base ${
                  errors.email ? 'input-error' : ''
                }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="budget" className="label-base">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={`input-base bg-white ${
                  errors.budget ? 'input-error' : ''
                }`}
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.budget && <p className="error-text">{errors.budget}</p>}
            </div>

            <div>
              <label htmlFor="message" className="label-base">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`input-base resize-y min-h-[100px] pt-3 ${
                  errors.message ? 'input-error' : ''
                }`}
                placeholder="Tell us about your project (optional)"
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full h-12 flex items-center justify-center gap-2 rounded-xl text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting && (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {submitting ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
