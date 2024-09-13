import React, { useRef } from 'react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductCarousel = ({ children, items = [] }) => {
    const swiperRef = useRef(null);
    if(!items.length) {
      return ;
    }
    const handleNext = () => {
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      };
    const handlePrev = () => {
        if (swiperRef.current) {
          swiperRef.current.slidePrev();
        }
      };
    return (
        <div className='relative w-slide'>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="">
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            {React.cloneElement(children, { item })}
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className='bg-white left-0 z-10 absolute h-full w-16 top-0 flex justify-center'>
                <button
                    className="btn-navigation-slide mt-40"
                    onClick={handlePrev}>
                        <Icon className="self-center text-white" icon="fa-solid fa-chevron-left" />
                </button>
            </div>
            <div className='bg-white right-0 z-10 absolute h-full w-16 top-0 flex justify-center'>
                <button
                    className="btn-navigation-slide mt-40"
                    onClick={handleNext}>
                        <Icon className="self-center text-white" icon="fa-solid fa-chevron-right" />
                </button>
            </div>
        </div>
      );
};

export default ProductCarousel;

