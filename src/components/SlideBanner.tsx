import React, { useState, useEffect, useRef } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import '../style/slide.scss'
import { IBannerItem } from '@/types/IBanner';

type SlideBannerProps = {
    bannerList: IBannerItem[];
};
const SlideBanner : React.FC<SlideBannerProps> = ({ bannerList = [] }) => {
    const { scrollRef, goTo, pages } = useSnapCarousel();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
    //* function
    const handleChangeBanner = (index: number) => {
        setCurrentIndex(index);
        goTo(index)
    };
    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        const width = e.currentTarget.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setCurrentIndex(index);
    };
    // Setup autoplay
    // Autoplay functionality
    useEffect(() => {
        autoplayInterval.current = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= bannerList.length) {
                nextIndex = 0; // Reset to first slide
            }
            handleChangeBanner(nextIndex);
        }, 3000); // Change slide every 3000 ms

        return () => {
            if (autoplayInterval.current) clearInterval(autoplayInterval.current); // Cleanup on unmount
          };
        // eslint-disable-next-line
    }, [currentIndex, bannerList.length]); // Dependencies ensure the interval is reset appropriately
    
    return (
        <div>
            <div onScroll={handleScroll} className='hide-scroll' ref={scrollRef} style={{ display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
                {bannerList.map((banner) => (
                    <div key={banner.id} style={{ flex: '0 0 100%', scrollSnapAlign: 'start', backgroundColor: `${banner.backgroundColor}`, height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img className='h-full' src={banner.imgSrc} alt="Banner" />
                    </div>
                ))}
            </div>
            <div className='relative'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 p-3 rounded-full shadow-md bg-white'>
                    {pages.map((_, i) => (
                        <button key={i} className='px-2' onClick={() => handleChangeBanner(i)}>
                            <span className={`w-3 h-3 rounded-full block ${currentIndex === i ? 'bg-gray-7d7d7d' : 'bg-gray-d0d0d0'}`}></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideBanner;
