import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPenToSquare,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { emits } from '../../helper/EmitData';

type MainSidebarProps = {
  isShowMenu?: boolean;
  onClickMenu?: (value: boolean) => void;
};

const Sidebar: React.FC<MainSidebarProps> = ({
  isShowMenu = false,
  onClickMenu,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  let location = useLocation();

  useEffect(() => {
    setIsOpen(isShowMenu);
  }, [isShowMenu]);

  function setIsShowMenu(status: boolean) {
    setIsOpen(status);
    emits(onClickMenu, status);
  }

  function isActiveMenu(path: string) {
    if (location.pathname === path) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className="relative">
        <div
          className={`fixed z-20 top-0 left-0 h-full hover:text-primary 
            rounded-r-lg text-black bg-white w-full max-w-[400px] 
            transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pl-7">
            <button
              className="text-lg font-bold py-5 cursor-pointer"
              onClick={() => setIsShowMenu(!isOpen)}
            >
              <Icon icon={faArrowRight} />
            </button>
            <Link
              to="/home"
              onClick={() => setIsShowMenu(false)}
              className={`block w-max py-2 font-semibold hover:text-success 
                ${isActiveMenu('/home') ? 'text-success' : 'text-white'}`}
            >
              <Icon icon={faHome} />
              <span className="pl-3">Home</span>
            </Link>
            <Link
              to="/our-blog"
              onClick={() => setIsShowMenu(false)}
              className={`block w-max py-2 font-semibold hover:text-success 
                ${isActiveMenu('/home') ? 'text-success' : 'text-white'}`}
            >
              <Icon icon={faPenToSquare} />
              <span className="pl-3">Our Blog</span>
            </Link>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setIsShowMenu(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
