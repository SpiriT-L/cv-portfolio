const experiences = [
  {
    period: '2021 - Present',
    role: 'Frontend Developer',
    company: 'Freelance',
    description:
      'I have been working as a freelance frontend developer, creating responsive and user-friendly websites and applications for various clients. My work involves using modern technologies such as React, Next.js, and Tailwind CSS to build high-quality digital products.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    current: true,
  },
  {
    period: '2010 - 2021',
    role: 'Administrator of the website and online store',
    company: 'World of High Technology',
    description:
      'I worked on the World of High Technology website, a resource for computer news and software. I wrote news articles and reviews, made sure the site was working properly, and did everything I could to make it user-friendly.',
    technologies: [
      'Bitrix CMS',
      'PHP',
      'HTML',
      'CSS',
      'JavaScript',
      'MySQL',
      'SEO',
      'Google Analytics',
      'Yandex Metrica',
      'CentOS',
      'Apache',
      'Nginx',
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <>
      <section id='experience' className='py-32 relative overflow-hidden'>
        <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
        <div className='container mx-auto px-6 relative z-10'>
          <div className='max-w-3xl mb-16'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
              Career Journey
            </span>
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
              Experience{' '}
              <span className='font-serif italic font-normal text-white'>
                speaks volumes.
              </span>
            </h2>
            <p className='text-muted-foreground animate-fade-in animation-delay-200'>
              My journey is basically the story of how I went from a curious
              beginner who loved figuring out how things work to a developer who
              confidently builds real projects with React. I learned by doing,
              experimenting, and solving actual problems — turning interest into
              solid skills that I use every day.
            </p>
          </div>
          {/* Timeline */}
          <div className='relative'>
            <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-2 bg-linear-to-b from-primary/70 via-primary/30 to-transparent mb:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]' />

            <div className='space-y-12'>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
                    {exp.current && (
                      <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75' />
                    )}
                  </div>
                  <div
                    className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className='text-sm text-primary font medium '>
                        {exp.period}
                      </span>
                      <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                      <p className='text-muted-foreground'>{exp.company}</p>
                      <p className='text-sm text-muted-foreground mt-4'>
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                      >
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
