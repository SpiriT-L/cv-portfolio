import { Github, Linkedin } from 'lucide-react';
import React from 'react';

export const FollowMe = () => {
  return (
    <>
      <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
        <span className='text-sm text-muted-foreground'>Follow me: </span>
        {[
          { icon: Github, href: 'https://github.com/SpiriT-L' },
          {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/m-leonid/',
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
          >
            <social.icon className='w-5 h-5' />
          </a>
        ))}
      </div>
    </>
  );
};
