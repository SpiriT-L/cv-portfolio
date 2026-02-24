import { AnimationButton } from '@/components/AnimationButton';
import { Button } from '@/components/Button';
import { FollowMe } from '@/components/FollowMe';
import { ProfileImage } from '@/components/ProfileImage';
import { Skills } from '@/components/Skills';
import { ArrowRight, Download } from 'lucide-react';
import { useMemo } from 'react';

const generateDots = () => {
  return Array.from({ length: 50 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
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
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left column content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Software Engineer · React Specialist
              </span>
            </div>
            {/* headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Creating <span className='text-primary glow-text'>modern</span>
                <br />
                interfaces with
                <br />
                <span className='font-serif italic font-normal text-white'>
                  React.
                </span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hi, I’m Leonid Matskevich. I am a React developer who builds
                modern, fast, and intuitive interfaces with the attention to
                every detail. My work includes clean code, thoughtful
                architecture, and visual aesthetics to turn ideas into
                functional and user‑friendly web applications. My goal is to
                craft technology that’s both engineered with precision and
                delightful to interact with.
              </p>
            </div>
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size='lg'>
                Contact Me
                <ArrowRight className='w-5 h-5' />
              </Button>
              <AnimationButton>
                <Download className='w-5 h-5' />
                Download CV
              </AnimationButton>
            </div>
            <FollowMe />
          </div>
          <ProfileImage />
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default Hero;
