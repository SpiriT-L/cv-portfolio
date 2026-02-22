import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'I write clean, maintainable code that follows best practices and design patterns.',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description:
      'I optimize web applications for speed and performance, ensuring a smooth user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'I work well in teams, collaborating effectively with designers, developers, and stakeholders to deliver high-quality projects.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'I am always looking for new technologies and approaches to improve my work and stay ahead in the industry.',
  },
];

export const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left column */}
          <div className='space-y-8'>
            <div className='animation-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                {' '}
                About Me
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay 100 text-secondary-foreground'>
              Building the future,{' '}
              <span className='font-serif italic font-normal text-white'>
                one component at a time
              </span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I am a Frontend Developer focused on building modern, intuitive,
                and user‑friendly web applications using JavaScript (ES6+),
                TypeScript, React, and Next.js.{' '}
              </p>
              <p>
                I create responsive interfaces, integrate REST APIs, and
                optimize performance to deliver smooth, enjoyable experiences
                that feel natural to users.
              </p>

              <p>
                Clean code, thoughtful decisions, and continuous learning guide
                my work.{' '}
              </p>
              <p>
                I’m ready for new challenges, open to collaborating with a
                strong team, and motivated to grow professionally while building
                products that bring real value and genuinely improve the way
                people interact with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
