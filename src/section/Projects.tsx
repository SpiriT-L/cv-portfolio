import { AnimationButton } from '@/components/AnimationButton';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'REST Client App',
    description: 'A lightweight alternative to Postman that allows you to send HTTP requests, manage headers, authentication, and request history.',
    image: '/projects/rest-client-app.png',
    tags: ['Next.js', 'TypeScript', 'Eslint', 'Vite', 'husky'],
    link: 'https://rest-client-app-77.vercel.app/',
    github: 'https://github.com/SpiriT-L/rest-client-app-77',
  },
  {
    title: 'Weather App',
    description: 'Weather App is a simple and user‑friendly service for checking real‑time weather conditions. The application displays up‑to‑date temperature, sky status, and atmospheric details. Its minimalist interface and atmospheric visuals create a pleasant experience, making weather checking quick and enjoyable.',
    image: '/projects/weather-app.png',
    tags: ['Next.js', 'TypeScript', 'Eslint', 'Vite', 'husky'],
    link: 'https://weather-app-sooty-pi-18.vercel.app/',
    github: 'https://github.com/SpiriT-L/weather-app',
  },
  {
    title: 'Rick & Morty',
    description: 'Rick and Morty App is an interactive React-based application powered by the Rick and Morty API. The service allows users to browse characters from the universe, navigate through pages, and view character images and names. The interface is clean and minimalistic, offering smooth and intuitive navigation. The project showcases API integration, routing, and component-driven architecture in React.',
    image: '/projects/rick-morty.png',
    tags: ['React', 'TypeScript', 'Eslint', 'Vite', 'husky'],
    link: 'https://rs-react-app-l.netlify.app/',
    github: 'https://github.com/SpiriT-L/rs-react-app',
  },
  {
    title: 'Learning results App',
    description: 'Learning Results is a simple application for tracking progress in learning various technologies. Users can view their current completion percentage, add new technologies, and provide titles and descriptions. The interface is clean and intuitive, making it easy to manage and update a personal learning list.',
    image: '/projects/learning-results.png',
    tags: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://spirit-l.github.io/learning-results/',
    github: 'https://github.com/SpiriT-L/learning-results',
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
          {/* project grid */}
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='group glass rounded-2xl overflow-hidden animate-fade-in md:span-1'
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className='relative overflow-hidden aspect-video'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60' />
                  {/* overlay links */}
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors duration-300'
                    >
                      <ArrowUpRight className='w-5 h-5' />
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors duration-300'
                    >
                      <Github />
                    </a>
                  </div>
                </div>

                {/* content */}
                <div className='p-6 space-y-4'>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                      {project.title}
                    </h3>
                    <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 translate-all' />
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-12 animate-fade-in animation-delay-500'>
            <AnimationButton>
              View All Projects
              <ArrowUpRight className='w-5 h-5' />
            </AnimationButton>
          </div>
        </div>
      </section>
    </>
  );
};
