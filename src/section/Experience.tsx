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
              My journey is basically the story of how I went from a curious beginner who loved figuring out how things work to a developer who confidently builds real projects with React. I learned by doing, experimenting, and solving actual problems — turning interest into solid skills that I use every day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
