import { DetailsSkeleton } from "./Details/DetailsSkeleton";
import { PlayerSkeleton } from "./Player/PlayerSkeleton";

export const VideoSkeleton = () => {
  return (
    <div className='flex-1'>
      <PlayerSkeleton />
      
      <div className='flex flex-col p-8 max-w-[1100px] mx-auto'>
        <DetailsSkeleton />
      </div>
    </div>
  )
};