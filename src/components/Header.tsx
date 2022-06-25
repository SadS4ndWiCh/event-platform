import { Logo } from './Logo';
import { Hamburger } from './Hamburger';
import { Close } from './Close';

type Props = {
  isSidebarOpened?: boolean;

  handleToggleSidebar?: () => void;
};

export const Header = ({ isSidebarOpened, handleToggleSidebar }: Props) => {
  return (
    <header className='flex items-center justify-between w-full p-5 border-b border-gray-600 lg:justify-center'>
      <Logo />

      <button className='flex items-center gap-2 lg:hidden' onClick={handleToggleSidebar}>
        Aulas { isSidebarOpened ? <Close /> : <Hamburger /> }
      </button>
    </header>
  )
};