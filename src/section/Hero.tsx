const Hero = () => {
  return (
    <>
      <section className='relative min-h-screen flex items-center overflow-hidden'>
        <div className='absolute insert-0'>
          <img src='/hero-bg.jpg' alt='Hero Background image' className='w-full h-full object-cover opacity-40'/>
          <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'/>
        </div>
      </section>
    </>
  );
};

export default Hero;
