export default function Hero() {
  return (
    <div>
      <h1
        className="text-4xl sm:text-4xl md:text-7xl 2xl:text-9xl font-[Rosarivo] font-normal leading-tight text-center md:text-left"
        style={{ color: 'var(--color-text)' }}
      >
        Hello mate!<br />
        I&#39;m{' '}
        <span
          style={{
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-main)',
          }}
        >
          Elizabeth
        </span>
        .
      </h1>
    </div>
  );
} 