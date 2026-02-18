export const FloatingBadge = () => {
  return (
    <>
      <div className='absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float '>
        <div className='flex items-center gap-3'>
          <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
          <span className='text-sm font-medium'>Available for work</span>
        </div>
      </div>
    </>
  );
};
