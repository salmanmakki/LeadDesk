export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 min-w-0">
      <label htmlFor="lead-search" className="sr-only">Search leads</label>
      <input
        id="lead-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, email..."
        className="input-base pl-10 bg-white"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}
