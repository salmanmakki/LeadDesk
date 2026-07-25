const statuses = ['All', 'New', 'Contacted', 'Closed'];

export default function FilterDropdown({ value, onChange }) {
  return (
    <div>
      <label htmlFor="status-filter" className="sr-only">Filter by status</label>
      <select
        id="status-filter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-base bg-white"
      >
        {statuses.map((s) => (
          <option key={s} value={s === 'All' ? '' : s}>
            {s === 'All' ? 'All statuses' : s}
          </option>
        ))}
      </select>
    </div>
  );
}
