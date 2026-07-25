const cards = [
  { key: 'total', label: 'Total Leads', color: 'bg-indigo-50 text-indigo-600' },
  { key: 'new', label: 'New Leads', color: 'bg-emerald-50 text-emerald-600' },
  { key: 'contacted', label: 'Contacted', color: 'bg-amber-50 text-amber-600' },
  { key: 'closed', label: 'Closed', color: 'bg-slate-50 text-slate-600' },
];

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div key={card.key} className="card-base p-5">
          <p className="text-sm font-medium text-slate-500 mb-1">{card.label}</p>
          <p className={`text-3xl font-bold ${card.color.split(' ')[1]}`}>
            {stats ? stats[card.key] : '—'}
          </p>
        </div>
      ))}
    </div>
  );
}
