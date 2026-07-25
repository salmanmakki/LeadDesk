import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">LeadDesk Mini</h3>
            <p className="text-sm leading-relaxed">
              A modern, secure lead management tool built for agencies and service businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('lead-form')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</h3>
            <p className="text-sm">hello@leaddeskmini.com</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} LeadDesk Mini. All rights reserved.</p>
          <p>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Built for Digital Heroes Training Task
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
