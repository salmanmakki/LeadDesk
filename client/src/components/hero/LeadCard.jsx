const leads = [
  { name: 'Sarah Chen', budget: '$5,000–$10,000', status: 'New', time: '2m ago', initial: 'SC' },
  { name: 'Marcus Rivera', budget: 'Under $1,000', status: 'Contacted', time: '15m ago', initial: 'MR' },
  { name: 'Emily Watson', budget: '$1,000–$5,000', status: 'New', time: '1h ago', initial: 'EW' },
];

const statusColors = {
  New: 'bg-emerald-100 text-emerald-700',
  Contacted: 'bg-amber-100 text-amber-700',
  Closed: 'bg-slate-200 text-slate-700',
};

export default function LeadCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800">Recent Activity</h3>
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01" />
        </svg>
      </div>
      <div className="space-y-3">
        {leads.map((lead) => (
          <div key={lead.name} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center shrink-0">
              {lead.initial}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-slate-800 truncate">{lead.name}</span>
                <span className="text-[10px] text-slate-400 shrink-0">{lead.time}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-500 truncate">{lead.budget}</span>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full shrink-0 ${statusColors[lead.status]}`}>
                  {lead.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
