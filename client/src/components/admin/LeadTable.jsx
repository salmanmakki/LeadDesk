import LeadRow from './LeadRow';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';

export default function LeadTable({ leads, loading, onStatusUpdated, onViewMessage, hasFilters }) {
  if (loading) return <LoadingSkeleton />;

  if (!leads || leads.length === 0) return <EmptyState isFiltered={hasFilters} />;

  return (
    <div className="overflow-x-auto card-base">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Budget</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Message</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {leads.map((lead) => (
            <LeadRow
              key={lead._id}
              lead={lead}
              onStatusUpdated={onStatusUpdated}
              onViewMessage={onViewMessage}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
