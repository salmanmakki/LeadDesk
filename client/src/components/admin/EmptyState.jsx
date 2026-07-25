export default function EmptyState({ isFiltered = false }) {
  return (
    <div className="card-base py-20 text-center animate-fade-in">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          {isFiltered ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          ) : (
            <>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </>
          )}
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-slate-700 mb-1">
        {isFiltered ? 'No matching leads' : 'No leads yet'}
      </h3>
      <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
        {isFiltered
          ? 'Try adjusting your search or filter to find what you are looking for.'
          : 'When visitors submit the lead capture form on your site, their inquiries will appear here ready for review.'}
      </p>
    </div>
  );
}
