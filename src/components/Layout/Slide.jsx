import React, { useState, useEffect, useRef } from 'react';
import { useSnapCarousel } from "react-snap-carousel";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Slide = ({ children, positionCss = '' }) => {
    const {
        scrollRef,
        next,
        prev,
        pages,
        activePageIndex,
    } = useSnapCarousel();
    const [indexSlide, setIndexSlide] = useState(0);
    const [isCanNext, setIsCanNext] = useState(false);
    const [isCanPrev, setIsCanPrev] = useState(false);
    const [elemHeight, setElemHeight] = useState(0);
    const elemContentRef = useRef(null);

    useEffect(() => {        
        if (scrollRef) {
            // Check if we can go next/prev when scrollRef is ready
            setIsCanNext(activePageIndex < pages.length);
            setIsCanPrev(activePageIndex > 0);
        }
    }, [scrollRef, activePageIndex, pages]);

    useEffect(() => {
        if (elemContentRef.current) {
          const height = elemContentRef.current.getBoundingClientRect().height;
          setElemHeight(height);
        }
      }, []);

    const handleNext = () => {
        if (isCanNext) {
            let index = indexSlide;
            setIndexSlide(++index)
            next();
        }
    }
    const handlePrev = () => {
        if (isCanPrev) {
            let index = indexSlide;
            setIndexSlide(--index)
            prev();
        }
    }
    const ArrowSlideLeft = () => {
        return (
            <div className='w-9 h-28 border-r cursor-pointer bg-white flex justify-center' onClick={() => handlePrev()}>
                <Icon className="flex justify-center self-center text-gray-400" icon="fa-solid fa-chevron-left" />
            </div>
        );
    }
    const ArrowSlideRight = () => {
        return (
            <div className='w-9 h-28 border-l cursor-pointer bg-white flex justify-center' onClick={() => handleNext()}>
                <Icon className="self-center text-gray-400" icon="fa-solid fa-chevron-right" />
            </div>
        );
    }
  return (
    <div className='relative'>
        <div ref={elemContentRef} className={`flex ${positionCss ? positionCss : 'justify-start'}`}>
            <div className='w-slide'>
                <div
                    className="flex overflow-x-auto hide-scroll py-6 w-slide"
                    ref={scrollRef}>
                        { children }
                </div>
            </div>
        </div>
        <div className='absolute -left-1 top-0 bg-white' style={{ height: `${elemHeight}px` }}>
            <div className='h-full flex items-center'>
                {isCanPrev && <ArrowSlideLeft />}
            </div>
        </div>
        <div className='absolute right-0 top-0 bg-white' style={{ height: `${elemHeight}px` }}>
            <div className='h-full flex items-center'>
                {isCanNext && <ArrowSlideRight />}
            </div>
        </div>
    </div>
  );
};
export default Slide;