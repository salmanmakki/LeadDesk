function MiniBar({ height, color }) {
  return (
    <div className="flex-1 flex items-end h-full gap-[2px]">
      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t ${color} opacity-${Math.max(30, h - 10)}`}
          style={{ height: `${h}%`, opacity: `${30 + (h / 95) * 50}%` }}
        />
      ))}
    </div>
  );
}

export default function AnalyticsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 w-full">
      <h3 className="text-sm font-semibold text-slate-800 mb-4">Quick Analytics</h3>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <p className="text-lg font-bold text-indigo-600">248</p>
          <p className="text-[10px] text-slate-500">Monthly Leads</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-emerald-600">46%</p>
          <p className="text-[10px] text-slate-500">Conversion</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-amber-600">4.2h</p>
          <p className="text-[10px] text-slate-500">Response Time</p>
        </div>
      </div>
      <div className="h-12 bg-slate-50 rounded-lg p-1 flex items-end">
        <MiniBar height={40} color="bg-indigo-500" />
      </div>
      <p className="text-[10px] text-slate-400 text-center mt-2">Last 30 days</p>
    </div>
  );
}
