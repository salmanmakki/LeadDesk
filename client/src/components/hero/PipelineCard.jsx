const stages = [
  { label: 'New', count: 38, pct: '18%', color: 'bg-emerald-500' },
  { label: 'Qualified', count: 52, pct: '25%', color: 'bg-blue-500' },
  { label: 'Contacted', count: 94, pct: '45%', color: 'bg-amber-500' },
  { label: 'Closed', count: 116, pct: '55%', color: 'bg-slate-500' },
];

export default function PipelineCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">Pipeline</h3>
      <div className="space-y-3">
        {stages.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between text-xs mb-1">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${s.color}`} />
                <span className="text-slate-600">{s.label}</span>
              </div>
              <span className="text-slate-800 font-medium">{s.count}</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${s.color} transition-all duration-500`}
                style={{ width: s.pct }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
