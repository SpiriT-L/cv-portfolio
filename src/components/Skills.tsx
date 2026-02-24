import { ChevronDown } from 'lucide-react'

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML & CSS',
  'Tailwind CSS',
  'Next.js',
  'Redux',
  'Git & GitHub',
  'Testing (Jest, Vitest)',
  'RESTful APIs',
  'Agile Methodologies',
  'Figma',
];

export const Skills = () => {
  return (
    <>
      <div className='mt-20 animate-fade-in animation-delay-600'>
        <p className='text-sm text-muted-foreground mb-6 text-center'>
          Technologies I work with
        </p>
        <div className='relative overflow-hidden'>
          <div className='flex animate-marquee'>
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className='shrink-0 px-8 py-4'>
                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
<a href="#about" className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer'>
  <span className='text-xs uppercase tracking-wider'>Scroll</span>
  <ChevronDown className='animate-bounce w-6 h-6' />
</a>
      </div>
    </>
  );
};
