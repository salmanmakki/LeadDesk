import HeroDashboard from './hero/HeroDashboard';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3)_0%,transparent_50%)]" />

      <div className="section-container pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Turn Website Visitors Into{' '}
              <span className="text-indigo-200">Qualified Leads</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-indigo-100/90 leading-relaxed">
              LeadDesk Mini helps agencies and service businesses capture, manage, and track
              inbound leads — all from a single, secure dashboard.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('lead-form')}
                className="bg-white text-indigo-700 font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-indigo-50 hover:shadow-xl hover:-translate-y-0.5 transition-all text-[15px]"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollTo('features')}
                className="border border-indigo-300/40 text-indigo-100 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-[15px]"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden md:block animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
