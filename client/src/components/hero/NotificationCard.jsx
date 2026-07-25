export default function NotificationCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-5 w-full border border-indigo-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800">New Lead Received</p>
            <p className="text-[11px] text-slate-500">Just now</p>
          </div>
        </div>
          <div className="bg-indigo-50/50 rounded-xl p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-slate-800">Thomas Wright</span>
            <span className="text-xs text-indigo-600 font-medium">$5,000–$10,000</span>
          </div>
          <p className="text-xs text-slate-500">Website redesign project inquiry</p>
        </div>
      </div>
    </div>
  );
}
