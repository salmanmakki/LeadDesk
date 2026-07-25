import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../Toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const addToast = useToast();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logout();
    } catch {
      addToast('Logout failed.', 'error');
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/60">
        <div className="section-container">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-shadow">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">LeadDesk Mini</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 hidden sm:inline">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="text-sm font-medium text-slate-600 hover:text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
              >
                {loggingOut ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="section-container py-8 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
