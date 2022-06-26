import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import { VideoPlayer } from "./Player";
import { VideoSkeleton } from "./VideoSkeleton";
import { VideoDetails } from "./Details";

interface VideoProps {
  lessonSlug: string;
};

export const Video = ({ lessonSlug }: VideoProps) => {
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  });

  if (loading || !data || !data.lesson) { // loading || !data || !data.lesson
    return (
      <VideoSkeleton />
    )
  }

  return (
    <div className='flex-1'>
      <VideoPlayer videoId={data.lesson.videoId} />

      <div className='flex flex-col p-8 max-w-[1100px] mx-auto'>
        <VideoDetails 
          data={data}
        />

        <div className='gap-8 my-20 grid grid-cols-1 xl:grid-cols-2'>
          <a
            href="#"
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 transition-colors hover:bg-gray-600'
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material complementar</strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o meterial complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
          
          <a
            href="#"
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 transition-colors hover:bg-gray-600'
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <Image size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>
                Wallpapers excluxivos
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
};