import { DiscordLogo, Lightning } from "phosphor-react";

import { GetLessonBySlugQuery, Lesson } from "../../../graphql/generated";

type Props = {
  data: GetLessonBySlugQuery
};

export const VideoDetails = ({ data }: Props) => {
  return (
    <div className='flex flex-col items-start gap-16 lg:flex-row'>
      <div className='flex flex-col flex-1'>
        <h1 className='text-2xl font-bold'>
          { data.lesson!.title }
        </h1>
        <p className='mt-4 text-gray-200 leading-relaxed'>
          { data.lesson!.description }
        </p>

        { data.lesson!.teacher && (
          <div className='flex items-center gap-4 mt-6'>
            <img
              src={data.lesson!.teacher.avatarURL}
              alt="Avatar do Professor"
              className='h-16 w-16 rounded-full border-2 border-blue-500'
            />
            <div className='leading-relaxed'>
              <strong className='font-bold text-2xl block'>
                { data.lesson!.teacher.name }
              </strong>
              <span className='text-gray-200 text-sm block'>
                { data.lesson!.teacher.bio }
              </span>
            </div>
          </div>
        ) }
      </div>
      <div className='w-full flex flex-col gap-4 lg:w-fit'>
        <a
          href="#"
          className='p-4 text-small bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors hover:bg-green-700'
        >
          <DiscordLogo size={24} />
          Comunidade do Discord
        </a>
        <a
          href="#"
          className='p-4 text-small border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors hover:bg-blue-500 hover:text-gray-900'
        >
          <Lightning size={24} />
          Acesse o Desafio
        </a>
      </div>
    </div>
  )
};