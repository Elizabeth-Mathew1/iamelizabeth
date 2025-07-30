interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function Quote({ children, className = "" }: QuoteProps) {
  return (
    <blockquote 
      className={`border-l-4 border-white pl-6 py-4 my-8 italic text-[22px] text-white not-prose prose-blockquote:text-white prose-blockquote:border-white ${className}`}
      style={{ 
        fontFamily: 'var(--font-main)',
        color: 'white !important',
        borderLeftColor: 'white !important'
      }}
    >
      {children}
    </blockquote>
  );
} 