export default function LoadingSkeleton() {
  const rows = [...Array(5)];

  return (
    <div className="card-base overflow-hidden animate-fade-in">
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
        <div className="h-3 w-24 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse" />
      </div>
      {rows.map((_, i) => (
        <div key={i} className="flex gap-4 px-4 py-3 border-b border-slate-100">
          <div className="h-4 w-32 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse" />
          <div className="h-4 w-44 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse" />
          <div className="h-4 w-20 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse" />
          <div className="h-4 w-48 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse" />
          <div className="h-5 w-20 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-full animate-pulse" />
          <div className="h-4 w-24 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
