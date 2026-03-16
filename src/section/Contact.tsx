import { Button } from '@/components/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    Label: 'Email',
    value: 'lmatskevich79@gmail.com',
    href: 'mailto:lmatskevich79@gmail.com',
  },
  {
    icon: Phone,
    Label: 'Phone',
    value: '+375 (25) 718-10-12',
    href: 'tel:+375257181012',
  },
  {
    icon: MapPin,
    Label: 'Location',
    value: 'Minsk, Belarus',
    href: 'https://www.google.com/maps/place/Minsk,+Belarus/@53.9006016,27.4499271,12z/data=!3m1!4b1!4m5!3m4!1s0x46dbcdbf8b9c9e7:0x400d567e279a160!8m2!3d53.9006016!4d27.5590008',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <>
      <section id='contact' className='py-32 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
        </div>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
              Get In Touch
            </span>
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
              Let's build{' '}
              <span className='font-serif italic font-normal text-white'>
                something great.
              </span>
            </h2>
            <p className='text-muted-foreground animate-fade-in animation-delay-200'>
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's discuss how we can work together.
            </p>
          </div>
          <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium mb-2'
                  >
                    Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder='Your name...'
                    className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium mb-2'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder='Your message...'
                    className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none h-32'
                  />
                </div>
                <Button size='lg' type='submit' className='w-full'>
                  Send Message <Send />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
