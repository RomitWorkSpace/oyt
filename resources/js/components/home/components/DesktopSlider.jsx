import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Slider1 from 'imgPath/sliders/1.jpg'
import Slider2 from 'imgPath/sliders/2.jpg'
import Slider3 from 'imgPath/sliders/3.jpg'
import Slider4 from 'imgPath/sliders/4.jpg'
import Slider5 from 'imgPath/sliders/5.jpg'

function DesktopSlider() {
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
                <img src={ Slider1 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ Slider2 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ Slider3 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ Slider4 } alt="slider" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ Slider5 } alt="slider" width="100%" />
            </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default DesktopSlider
