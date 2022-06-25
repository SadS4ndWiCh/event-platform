import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header
        isSidebarOpened={isSidebarOpened}
        handleToggleSidebar={() => setIsSidebarOpened(old => !old)}
      />
      <main className='relative flex flex-1'>
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <div className='flex-1' /> 
        }
        <Sidebar isOpen={isSidebarOpened} />
      </main>
    </div>
  )
};