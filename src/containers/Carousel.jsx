import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import essential Swiper styles
import 'swiper/css';

const Carousel = ({ children, spaceBetween = 32, swiperProps = {} }) => {
    const swiperRef = useRef(null);

    // Effect to update Swiper after mount to ensure 'auto' works correctly
    useEffect(() => {
        // Small timeout allows DOM/CSS to settle before Swiper calculates layout
        const timer = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.update();
            }
        }, 100); // Adjust delay if needed (e.g., 50, 100, 200)

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, [children]); // Re-run if children change significantly (might need adjustment)

    // Ensure children is an array for mapping, even if only one child is passed
    const childrenArray = React.Children.toArray(children);

    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={spaceBetween}
            grabCursor={true}

            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}

            {...swiperProps}
        >
            {childrenArray.map((child, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;