import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const DetailsSkeleton = () => {
  return (
    <div className='flex flex-col items-start gap-16 lg:flex-row'>
      <div className='flex flex-col flex-1'>
        <Skeleton className='h-8 mb-4' />
        <Skeleton count={4} />
        <Skeleton className='w-4/5' inline />

        <div className='flex items-center gap-4 mt-6'>
          <Skeleton circle className='h-16 w-16' />

          <div className='w-full'>
            <Skeleton width={300} className='h-8 mb-2' />
            <Skeleton count={2} />
            <Skeleton className='w-4/5' inline />
          </div>
        </div>
      </div>
    </div>
  )
};