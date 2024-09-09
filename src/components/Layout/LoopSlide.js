import React, { useMemo } from 'react';
import { useSnapCarousel } from "react-snap-carousel";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const LoopSlide = ({ children }) => {
  const {
    scrollRef,
    next,
    prev,
  } = useSnapCarousel();

  const handleNext = () => {
    next()
  }
  const handlePrev = () => {
    prev()
  }
  return (
    <div className="flex justify-center px-16">
        <div className='w-14 self-center'>
            <button className="h-12 w-12 bg-btn-0071e3 flex justify-center rounded-full">
                <Icon className="self-center text-white" icon="fa-solid fa-chevron-left" onClick={() => handlePrev()} />
            </button>
        </div>  
        <div className="w-main-page px-7 py-5">
            <div
            className="flex overflow-x-auto pt-6 hide-scroll"
            ref={scrollRef}
            >
            { children }
            </div>
        </div>
         <div className='w-14 self-center'>
            <button className="h-12 w-12 bg-btn-0071e3 flex justify-center rounded-full">
                <Icon className="self-center text-white" icon="fa-solid fa-chevron-right" onClick={() => handleNext()} />
            </button>
        </div>
    </div>
  );
};
export default LoopSlide;