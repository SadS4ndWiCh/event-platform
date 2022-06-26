import { DefaultUi, Player, Youtube } from "@vime/react";

type Props = {
  videoId: string;
};

export const VideoPlayer = ({ videoId }: Props) => {
  return (
    <div className='flex justify-center bg-black'>
      <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
        <Player>
          <Youtube videoId={videoId} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  )
};