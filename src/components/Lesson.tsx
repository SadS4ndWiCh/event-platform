import { Link, useParams } from 'react-router-dom';

import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
};

export const Lesson = (lesson: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(lesson.availableAt);
  const availableDateFormatted = format(lesson.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })
  
  const isActiveLesson = slug == lesson.slug;

  return (
    <Link to={isLessonAvailable ? `/event/lesson/${lesson.slug}` : '#'} className={classNames('block mt-8 group', {
      'pointer-events-none': !isLessonAvailable,
    })}>
      <span className='text-sm text-gray-300'>
        { availableDateFormatted }
      </span>
      <div
        className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500': isActiveLesson
        })}
      >
        <header className='flex items-center justify-between'>
          { isLessonAvailable ? (
            <span className={classNames('flex items-center gap-2 font-medium text-xs', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-xs text-orange-500'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames('text-xs rounded border px-2 py-[0.125rem] font-bold text-white', {
              'border-white': isActiveLesson,
              'border-green-300': !isActiveLesson
            })}
          >
            { lesson.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>

        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {lesson.title}
        </strong>
      </div>
    </Link>
  )
};