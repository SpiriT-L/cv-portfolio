import { Button } from '@/components/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className='fixed top-0 right-0 left-0 bg-transparent py-5 z-50'>
        <nav className='container mx-auto px-6 flex items-center justify-between'>
          <a
            className='text-xl font-bold tracking-light hover:text-primary'
            href='#'
          >
            CV LM <span className='text-primary'>.</span>
          </a>

          <div className='hidden md:flex items-center gap-1'>
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
          <div className='hidden md:block'>
            <Button size='sm'>Contact Me</Button>
          </div>
          <button
            className='md:hidden cursor-pointer text-foreground hover:text-primary '
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className='md:hidden glass-strong animate-fade-in'>
            <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='text-lg text-muted-foreground hover:text-foreground py-2'
                >
                  {link.label}
                </a>
              ))}

              <Button>Contact Me</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
