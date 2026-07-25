const features = [
  {
    title: 'Capture Qualified Leads',
    description:
      'Embed the lead form anywhere on your site. Every submission is validated and stored securely in your database — ready for follow-up.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
      </svg>
    ),
  },
  {
    title: 'Secure Admin Dashboard',
    description:
      'Only authenticated administrators can view submitted leads. JWT-based auth with HTTP-only cookies keeps your data safe.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Track Lead Status',
    description:
      'Update lead status from New to Contacted to Closed as your team works through the pipeline. Stay organized and never drop a lead.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need to manage leads</h2>
          <p className="mt-4 text-lg text-slate-600">
            A focused toolset designed for agencies that want a simple, secure way to capture and track inbound inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-base p-8 hover:shadow-lg hover:-translate-y-0.5 hover:border-indigo-200 transition-all duration-200 flex flex-col animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
