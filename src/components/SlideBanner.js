import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import './style/slide.scss'

const SlideBanner = () => {
    const bannerList = [
        {
            id:1,
            url:'https://media.studio7thailand.com/143963/NewWebsiteStudio7Promotion-1400x700-190824_310824.jpg',
            backgroundColor: '#f2f2f2',
            route: ''
        },
        {
            id:2,
            url:'https://media.studio7thailand.com/148810/iPhone15Dis5000-1400x700-190824_310824.jpg',
            backgroundColor: '#f2f2f2',
            route: ''
        },
        {
            id:3,
            url:'https://media.studio7thailand.com/143964/NewWebsiteStudio7Promotion-600x500-190824_310824.jpg',
            backgroundColor: '#f2f2f2',
            route: ''
        },
        {
            id:4,
            url:'https://media.studio7thailand.com/148811/iPhone15Dis5000-600x500-190824_310824.jpg',
            backgroundColor: '#f2f2f2',
            route: ''
        },
        {
            id:5,
            url:'https://media.studio7thailand.com/134922/DAPP_iPad_Pro_DesktopW1400xH700px.jpg',
            backgroundColor: '#f2f2f2',
            route: ''
        }
    ]
    const { scrollRef, next, prev } = useSnapCarousel();
    const inActiveStyle = {
        background: '#d0d0d0',
    };
    return (
        <div>
            <div className='hide-scroll' ref={scrollRef} style={{ display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
                {bannerList.map((banner) => (
                    <div style={{ flex: '0 0 100%', scrollSnapAlign: 'start', backgroundColor: `${banner.backgroundColor}`, height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img className='h-full' src={banner.url} alt="Banner" />
                    </div>
                ))}
            </div>
            <div className='flex justify-center bg-white w-auto rounded-lg'>
                <button>
                    <span className='w-3 h-3 rounded-full'></span>
                </button>
            </div>
    </div>
    );
};

export default SlideBanner;
