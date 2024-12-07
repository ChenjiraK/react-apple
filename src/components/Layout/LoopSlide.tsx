import React, { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ProductCarouselProps = {
    children: React.ReactElement;
    items: { id: string | number; [key: string]: any }[];
    slidesPerView?: number;
    loop?: boolean;
    pagination?: boolean;
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({
    children,
    items = [],
    slidesPerView = 3,
    loop = true,
    pagination = true,
}) => {
    const swiperRef = useRef<SwiperClass | null>(null);

    if (!items.length) {
        return null;
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
        <div className="relative">
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={pagination ? { clickable: true } : false}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            loop={loop}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className=""
        >
            {items.map((item, index) => (
            <SwiperSlide key={`${item.id}_${index}`}>
                {React.cloneElement(children, { item })}
            </SwiperSlide>
            ))}
        </Swiper>
        <div className="bg-white left-0 z-10 absolute h-full w-16 top-0 flex justify-center">
            <button className="btn-navigation-slide mt-40" onClick={handlePrev}>
            <Icon className="self-center text-white" icon={faChevronLeft} />
            </button>
        </div>
        <div className="bg-white right-0 z-10 absolute h-full w-16 top-0 flex justify-center">
            <button className="btn-navigation-slide mt-40" onClick={handleNext}>
            <Icon className="self-center text-white" icon={faChevronRight} />
            </button>
        </div>
        </div>
    );
};

export default ProductCarousel;