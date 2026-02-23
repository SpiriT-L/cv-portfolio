const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: '/projects/project1.png',
    tags: ['React', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: '/projects/project2.png',
    tags: ['React', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    image: '/projects/project3.png',
    tags: ['React', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    image: '/projects/project4.png',
    tags: ['React', 'TypeScript'],
    link: '#',
    github: '#',
  },
];

export const Projects = () => {
  return (
    <>
      <section id='projects' className='py-32 relative overflow-hidden'>
        {/* bg glows */}
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center mx-auto max-w-3xl mb-16'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
              Featured Work
            </span>
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
              Projects that{' '}
              <span className='font-serif italic font-normal text-white'>
                {' '}
                make an impact.
              </span>
            </h2>
            <p className='text-muted-foreground animate-fade-in animation-delay-200'>
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
