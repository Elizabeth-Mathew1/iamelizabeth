interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
}

export default function CalloutBox({ type = 'info', title, children }: CalloutBoxProps) {
  const colors = {
    info: 'border-blue-500 bg-blue-500/10',
    warning: 'border-yellow-500 bg-yellow-500/10',
    success: 'border-green-500 bg-green-500/10',
    error: 'border-red-500 bg-red-500/10'
  };

  const icons = {
    info: '💡',
    warning: '⚠️',
    success: '✅',
    error: '❌'
  };

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-lg ${colors[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div>
          {title && (
            <h4 className="font-semibold text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-main)' }}>
              {title}
            </h4>
          )}
          <div className="text-[var(--color-text)]" style={{ fontFamily: 'var(--font-main)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 