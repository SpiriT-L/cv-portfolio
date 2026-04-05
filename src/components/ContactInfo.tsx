import { Mail, MapPin, Phone } from 'lucide-react';
import { AvailabilityCard } from './AvailabilityCard';

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

export const ContactInfo = () => {
  return (
    <>
      <div className='space-y-6 animate-fade-in animation-delay-400'>
        <div className='glass rounded-3xl p-8'>
          <h3 className='text-xl font-semibold mb-6'>Contact Information</h3>
          <div className='space-y-4'>
            {contactInfo.map((item, i) => (
              <div key={i} className='flex items-start gap-4'>
                <item.icon className='w-6 h-6 text-primary mt-1' />
                <div>
                  <p className='font-medium'>{item.Label}</p>
                  <a
                    href={item.href}
                    className='text-muted-foreground hover:text-primary transition-colors duration-300'
                    target='_blank'
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AvailabilityCard />
      </div>
    </>
  );
};
