import { FloatingBadge } from './FloatingBadge';
import { StatusBadge } from './StatusBadge';

export const ProfileImage = () => {
  return (
    <>
      <div className='relative animate-fade-in animation-delay-300'>
        <div className='relative max-w-md mx-auto'>
          <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
          <div className='relative glass rounded-3xl p-2 glow-border'>
            <img
              src='/profile.jpg'
              alt='Profile image'
              className='w-full aspect-4/5 object-cover rounded-2xl'
            />
            <FloatingBadge />
            <StatusBadge />
          </div>
        </div>
      </div>
    </>
  );
};
