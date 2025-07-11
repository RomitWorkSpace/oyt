import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import CaravanIcon from 'imgPath/icons/caravan.png'
import CruiseIcon from 'imgPath/icons/cruise.png'
import GolfIcon from 'imgPath/icons/golf.png'
import HolidayIcon from 'imgPath/icons/holiday.png'
import HoneymoonIcon from 'imgPath/icons/honeymoon.png'
import HotelIcon from 'imgPath/icons/hotel.png'
import PlaneIcon from 'imgPath/icons/plane.png'
import ResortIcon from 'imgPath/icons/resort.png'
import WeddingIcon from 'imgPath/icons/wedding.png'
import WineIcon from 'imgPath/icons/wine.png'

function ProductCategory() {
    return (
        <>
        <div className="mt-5 py-5 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                        <Swiper
                                slidesPerView={3}
                                breakpoints= {{
                                540: {
                                    slidesPerView:3,
                                    },

                                768: {
                                    slidesPerView: 5,
                                    },
                                1080: {
                                    slidesPerView: 10,
                                    }
                                }}
                                modules={[]}
                                loop={true}
                                autoplay={{delay: 4000,
                                disableOnInteraction: false}}
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ HotelIcon } alt="hotel" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Hotel</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ CruiseIcon } alt="cruise" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Cruise</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ PlaneIcon } alt="plane" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Plane</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ CaravanIcon } alt="caravan" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Caravan</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ WeddingIcon } alt="wedding" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Wedding</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ WineIcon } alt="wine" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Wine</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ ResortIcon } alt="resort" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Resort</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ HolidayIcon } alt="holiday" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Holiday</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ HoneymoonIcon } alt="homeymoon" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Honeymoon</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center">
                                    <img src={ GolfIcon } alt="golf" width="50" className="mx-auto" />
                                    <p className="text-primary text-md font-semibold">Golf</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
            </div>
        </div>
        </>
    )
}

export default ProductCategory
