const steps = [
  {
    number: '1',
    title: 'Submit your inquiry',
    description: 'Fill out the lead form with your project details, budget range, and contact information.',
  },
  {
    number: '2',
    title: 'Our team reviews it',
    description: 'Your submission is received instantly and stored securely in our dashboard for review.',
  },
  {
    number: '3',
    title: 'We contact you',
    description: 'Our team follows up to discuss your project and explore how we can help.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-lg text-slate-600">
            Getting started takes just a few minutes. Here is how the process works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-indigo-200 via-indigo-300 to-transparent" />
              )}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-lg font-bold flex items-center justify-center mx-auto mb-5 shadow-md">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
