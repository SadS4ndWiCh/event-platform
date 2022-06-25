import { useNavigate } from "react-router-dom";

import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

import classNames from "classnames";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
};

export const Sidebar = ({ isOpen }: Props) => {
  const { data, previousData } = useGetLessonsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !data || !data.lessons || previousData || !(['/event', '/event/'].includes(window.location.pathname))
    ) return;
    
    navigate(`/event/lesson/${data.lessons[0].slug}`)
  }, [data]);

  return (
    <aside className={classNames('absolute border-l border-gray-600 bg-gray-700 p-6 lg:static lg:block lg:w-[348px]', {
      'hidden': !isOpen,
      'block z-50 right-0 left-0 bottom-0 top-0': isOpen,
    })}>
      <span className='block font-bold text-2xl pb-6 mb-6 border-b border-gray-600'>
        Cronograma de Aulas
      </span>

      <div>
        { data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        )) }
      </div>
    </aside>
  )
};