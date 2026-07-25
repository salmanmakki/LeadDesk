export default function StatsCard() {
  const stats = [
    { label: 'Total Leads', value: '248', change: '+12%', color: 'text-indigo-600', bar: 'w-3/4' },
    { label: 'New', value: '38', change: '+8%', color: 'text-emerald-600', bar: 'w-2/5' },
    { label: 'Contacted', value: '94', change: '+15%', color: 'text-amber-600', bar: 'w-3/5' },
    { label: 'Closed', value: '116', change: '+23%', color: 'text-slate-600', bar: 'w-4/5' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800">Lead Overview</h3>
        <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">+15% vs last month</span>
      </div>
      <div className="space-y-3">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-500">{s.label}</span>
              <span className="text-xs font-semibold text-slate-800">{s.value}</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${s.bar} bg-gradient-to-r from-indigo-400 to-indigo-600`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
