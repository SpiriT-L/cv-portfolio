import { useMemo } from 'react';

const generateDots = () => {
  return Array.from({ length: 50 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 10}s`,
  }));
};

const Hero = () => {
  const dots = useMemo(() => generateDots(), []);

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src='/hero-bg.jpg'
          alt='Hero Background image'
          className='w-full h-full object-cover opacity-40'
        />

        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background' />
      </div>

      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {dots.map((pos, i) => (
          <div
            key={i}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              background: '#20B2A6',
              left: pos.left,
              top: pos.top,
              animation: `slow-drift ${pos.animationDuration} ease-in-out infinite`,
              animationDelay: pos.animationDelay,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
