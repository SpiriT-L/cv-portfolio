const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: 'Sarah Chen',
    role: 'CTO, Tech Innovators Inc.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote:
      'Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.',
    author: 'Michael Rodriguez',
    role: 'Product Manager, Digital Solutions',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: 'Emily Watson',
    role: 'Engineering Lead, StartUp Labs',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: 'David Kim',
    role: 'CEO, Innovation Hub',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
];

export const Testimonials = () => {
  return (
    <>
      <section id='testimonials' className='py-32 relative overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
        <div className='container mx-auto px-6 relative z-10'>
          <div className='container mx-auto px-6 relative z-10'>
            <div className='text-center max-w-3xl mb-16'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                What People Say
              </span>
              <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                Kind world from{' '}
                <span className='font-serif italic font-normal text-white'>
                  amazing people.
                </span>
              </h2>
              {/* <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                My journey is basically the story of how I went from a curious
                beginner who loved figuring out how things work to a developer
                who confidently builds real projects with React. I learned by
                doing, experimenting, and solving actual problems — turning
                interest into solid skills that I use every day.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
