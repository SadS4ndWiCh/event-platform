import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PlayerSkeleton = () => {
  return (
    <div className='flex justify-center bg-black'>
      <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
        <Skeleton className='w-full h-full' enableAnimation />
      </div>
    </div>
  )
};