import React, { useMemo } from 'react';
import { useSnapCarousel } from "react-snap-carousel";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Slide = ({ children }) => {
  const {
    scrollRef,
    next,
    prev,
    pages,
    activePageIndex,
  } = useSnapCarousel();
  
  const isCanNext = useMemo(() => {
      if(activePageIndex >= pages.length - 1) {
        return false;
      }
      return true;
  });

  const isCanPrev = useMemo(() => {
      if(activePageIndex === 0) {
        return false;
      }
      return true;
  });

  const handleNext = () => {
    next()
  }
  const handlePrev = () => {
    prev()
  }
  return (
    <div className="flex justify-center px-16">
      <div className="border-r p-3 h-20 self-center mr-5 flex cursor-pointer">
        {isCanPrev && 
          <Icon className="self-center text-gray-400" icon="fa-solid fa-chevron-left" onClick={() => handlePrev()} />
        }
      </div>
      <div className="my-12 w-main-page">
        <div
          className="flex gap-x-10 overflow-x-auto pt-6 hide-scroll"
          ref={scrollRef}
        >
          { children }
        </div>
      </div>
      <div className="border-l p-3 h-20 self-center ml-5 flex cursor-pointer">
        {isCanNext && 
          <Icon className="self-center text-gray-400" icon="fa-solid fa-chevron-right" onClick={() => handleNext()} />
        }
      </div>
    </div>
  );
};
export default Slide;