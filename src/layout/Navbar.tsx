import { Button } from '@/components/Button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  return (
    <>
      <header className='fixed top-0 right-0 left-0 bg-transparent py-5'>
        <nav className='container mx-auto px-6 flex items-center justify-between'>
          <a
            className='text-xl font-bold tracking-light hover:text-primary'
            href='#'
          >
            CV LM <span className='text-primary'>.</span>
          </a>

          <div className='flex items-center gap-1'>
            <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface/50 transition-colors'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <Button size="sm">Contact Me</Button>
          </div>
        </nav>
      </header>
    </>
  );
};
