import { useState } from 'react';
import { updateLeadStatus } from '../../services/leadService';
import { useToast } from '../Toast';

const statusColors = {
  New: 'bg-emerald-100 text-emerald-700',
  Contacted: 'bg-amber-100 text-amber-700',
  Closed: 'bg-slate-200 text-slate-700',
};

const options = ['New', 'Contacted', 'Closed'];

export default function StatusSelector({ lead, onUpdated }) {
  const [value, setValue] = useState(lead.status);
  const [updating, setUpdating] = useState(false);
  const addToast = useToast();

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    const prev = value;
    setValue(newStatus);
    setUpdating(true);
    try {
      await updateLeadStatus(lead._id, newStatus);
      addToast('Status updated.', 'success');
      onUpdated?.(lead._id, newStatus);
    } catch (err) {
      setValue(prev);
      const msg = err.response?.data?.message || 'Failed to update status.';
      addToast(msg, 'error');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={updating}
      className={`text-xs font-semibold px-2.5 py-1 rounded-full border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 ${
        statusColors[value] || 'bg-slate-100 text-slate-600'
      }`}
      aria-label="Change lead status"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
