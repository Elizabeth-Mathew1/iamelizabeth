interface SectionHeaderProps {
  title: string;
  accentText?: string;
  isAccent?: boolean;
}

export default function SectionHeader({ title, accentText, isAccent = false }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className={`text-[50px] md:text-[80px] lg:text-[80px] text-[#e0e0e0] font-normal leading-tight pt-10 ${isAccent ? 'text-[var(--color-accent)]' : ''}`} style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </div>
      {accentText && (
        <div className="text-[20px] lg:text-[24px] text-[var(--color-accent)] font-normal leading-tight mb-15" style={{ fontFamily: 'var(--font-sub)' }}>
          {accentText}
        </div>
      )}
    </div>
  );
} 