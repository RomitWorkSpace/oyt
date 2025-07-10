import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import MobileSlider1 from 'imgPath/sliders/mb1.jpg'
import MobileSlider2 from 'imgPath/sliders/mb2.jpg'
import MobileSlider3 from 'imgPath/sliders/mb3.jpg'
import MobileSlider4 from 'imgPath/sliders/mb4.jpg'
import MobileSlider5 from 'imgPath/sliders/mb5.jpg'

function MobileSlider() {
    return (
        <>
        <div className='container-fluid p-0'>
        <Swiper
                slidesPerView={1}
                effect={'fade'}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">

            <SwiperSlide>
                <img src={ MobileSlider1 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ MobileSlider2 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ MobileSlider3 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ MobileSlider4 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ MobileSlider5 } alt="slider" width="100%" />
            </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default MobileSlider
