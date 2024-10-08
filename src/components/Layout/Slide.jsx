import React, { useMemo, useState } from 'react';
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
    const [indexSlide, setIndexSlide] = useState(0);

    // eslint-disable-next-line
    const isCanNext = useMemo(() => {
        if(activePageIndex >= pages.length - 1) {
            return false;
        }
        return true;
    });

    // eslint-disable-next-line
    const isCanPrev = useMemo(() => {
        if(indexSlide > 0 && indexSlide >= activePageIndex) {
            return true;
        }
        return false;
    });

    const handleNext = () => {
        let index = indexSlide;
        setIndexSlide(++index)
        next()
    }
    const handlePrev = () => {
        let index = indexSlide;
        setIndexSlide(--index)
        prev()
    }
    const ArrowSlideLeft = () => {
        return (
            <div className='w-9 h-24 border-r cursor-pointer bg-white flex justify-center' onClick={() => handlePrev()}>
            <Icon className="flex justify-center self-center text-gray-400" icon="fa-solid fa-chevron-left" />
            </div>
        );
    }
    const ArrowSlideRight = () => {
        return (
            <div className='w-9 h-24 border-l cursor-pointer bg-white flex justify-center' onClick={() => handleNext()}>
            <Icon className="flex justify-center self-center text-gray-400" icon="fa-solid fa-chevron-right" />
            </div>
        );
    }
  return (
    <div className='relative'>
        <div className="flex justify-start">
            <div>
                <div
                    className="flex overflow-x-auto py-6 hide-scroll"
                    ref={scrollRef}>
                        { children }
                </div>
            </div>
        </div>
        <div className='absolute left-0 top-1/3'>
            {isCanPrev && <ArrowSlideLeft />}
        </div>
        <div className='absolute right-0 top-1/3'>
            {isCanNext && <ArrowSlideRight />}
        </div>
    </div>
  );
};
export default Slide;