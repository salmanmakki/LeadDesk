export default function BrandSpinner({ size = 'md', text = 'Loading...' }) {
  const sizes = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-[3px]',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <div
          className={`${sizes[size]} rounded-full border-indigo-200 border-t-indigo-600 animate-spin`}
        />
        <div
          className={`absolute inset-0 ${sizes[size]} rounded-full border-2 border-transparent border-b-purple-500 animate-spin`}
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
        />
      </div>
      {text && (
        <span className="text-sm font-medium text-slate-500 animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <BrandSpinner size="lg" text="Loading..." />
    </div>
  );
}
