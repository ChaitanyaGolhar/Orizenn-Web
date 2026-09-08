export function FooterWordmark() {
  return (
    <div className="relative w-full mt-20 md:mt-32 flex justify-center footer-anim-element overflow-hidden pb-0">

      <style>{`
        @keyframes wordmark-flow {
          0% { background-position: 0px 0px; }
          100% { background-position: 0px -24px; }
        }
      `}</style>

      {/* The wordmark container */}
      <div className="relative w-full flex justify-center translate-y-[15%]">

        {/* Solid muted base text */}
        <h1
          className="font-sans font-bold m-0 text-center tracking-tighter text-white opacity-[0.08] select-none"
          style={{
            fontSize: 'clamp(6rem, 18vw, 24rem)',
            lineHeight: '0.8'
          }}
        >
          ORIZENN
        </h1>

        {/* Animated technical dots masked exactly to the letters */}
        <h1
          className="absolute top-0 left-0 right-0 font-sans font-bold m-0 text-center tracking-tighter select-none pointer-events-none opacity-40"
          style={{
            fontSize: 'clamp(6rem, 18vw, 24rem)',
            lineHeight: '0.8',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            animation: 'wordmark-flow 15s linear infinite',
            maskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 90%)'
          }}
        >
          ORIZENN
        </h1>
      </div>

    </div>
  );
}
