export const AvailabilityCard = () => {
  return (
    <>
      <div className='glass rounded-3xl p-8 border border-primary/30'>
        <div className='flex items-center gap-3 mb-4'>
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className='font-medium'>Currently Available</span>
        </div>
        <p className='text-muted-foreground text-sm'>
          I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!
        </p>
      </div>
    </>
  );
};
