import StatusSelector from './StatusSelector';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function truncate(text, max = 60) {
  if (!text || text.length <= max) return text || '—';
  return text.slice(0, max) + '...';
}

export default function LeadRow({ lead, onStatusUpdated, onViewMessage }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">
        {lead.name}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">
        {lead.email}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">
        {lead.budget || '—'}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600 max-w-[200px]">
        <div className="flex items-center gap-1">
          <span className="truncate">{truncate(lead.message)}</span>
          {lead.message && lead.message.length > 60 && (
            <button
              onClick={() => onViewMessage(lead.message)}
              className="text-indigo-600 hover:text-indigo-800 text-xs font-medium whitespace-nowrap shrink-0"
            >
              View
            </button>
          )}
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <StatusSelector lead={lead} onUpdated={onStatusUpdated} />
      </td>
      <td className="px-4 py-3 text-sm text-slate-500 whitespace-nowrap">
        {formatDate(lead.createdAt)}
      </td>
    </tr>
  );
}
