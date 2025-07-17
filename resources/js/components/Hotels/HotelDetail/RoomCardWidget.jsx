import React from 'react'
import { Bath, BedSingle } from 'lucide-react'

function RoomCardWidget() {
    return (
        <>
                    <div className="igt_card_wrapper mb-2">
                        <div className="flex flex-wrap">
                            <div className="hotel_room_info sticky max-h-fit top-[65px] w-full md:w-[35%] bg-white p-4 pt-0">
                                <div className="roomImage pt-3">
                                    <h3 className="text-md font-semibold text-gray-700 mb-4">Deluxe Twin Room</h3>
                                    <img src="https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/room-imgs/201511141311078070-13960-5a219ae6f21c11e885d20242ac110009.jpg?downsize=428:230" alt="room" className='w-full rounded-lg' />

                                    <div className="mt-5">
                                        <div className="flex gap-7">
                                            <div className="flex gap-2 items-center text-gray-800">
                                                <BedSingle className='w-[20px]' /> <span className="text-sm">2 Single Beds</span>
                                            </div>
                                            <div className="flex gap-2 items-center text-gray-800">
                                                <Bath className='w-[20px]' /> <span className="text-sm">1 Bathroom</span>
                                            </div>
                                        </div>
                                        <h4 className="text-primary mt-4 font-semibold">View More Details</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-[65%] bg-white">
                                <div className="room-card border-b border-gray-300">
                                    <div className="flex">
                                    <div className="w-1/2 border-r p-4 border-gray-300">
                                        <div className="text-gray-800 text-sm">
                                            <h3 className="text-sm font-semibold">1. Room Only | Free Cancellation</h3>
                                            <div className="mt-4">
                                                <p className="text-sky-400">Book @ ₹0 available</p>
                                                <p className="">Risk Free Booking!</p>
                                                <ul className="mt-4">
                                                    <li className=""> Free Room Upgrade, Subject to Availability</li>
                                                    <li> 15% off on One-way Airport Transfer</li>
                                                    <li> 10% off on session of Spa</li>
                                                    <li> 15% off on Food & Beverage services</li>
                                                    <li> 15% Off on Laundry service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-4">
                                        <div className="">
                                            <div className="inline-block px-2 rounded-sm text-sm text-white bg-orange-500">10% OFF</div>
                                            <p className="text-sm text-gray-500 line-through mt-3">₹ 6,971</p>
                                            <h3 className="text-2xl text-gray-800 font-semibold">₹ 6,271 
                                                <span className="text-xs font-normal">+ ₹ 752 taxes & fees</span>
                                            </h3>
                                            <p className="text-xs text-gray-500">Room per night</p>

                                            <div className="inline-block py-2 px-5 text-lg cursor-pointer font-semibold rounded-lg border-2 border-primary text-primary mt-4">SELECT ROOM</div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div className="room-card">
                                    <div className="flex">
                                    <div className="w-1/2 border-r p-4 border-gray-300">
                                        <div className="text-gray-800 text-sm">
                                            <h3 className="text-sm font-semibold">2. Room Only | Free Cancellation</h3>
                                            <div className="mt-4">
                                                <p className="text-sky-400">Book @ ₹0 available</p>
                                                <p className="">Risk Free Booking!</p>
                                                <ul className="mt-4">
                                                    <li className=""> Free Room Upgrade, Subject to Availability</li>
                                                    <li> 15% off on One-way Airport Transfer</li>
                                                    <li> 10% off on session of Spa</li>
                                                    <li> 15% off on Food & Beverage services</li>
                                                    <li> 15% Off on Laundry service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-4">
                                        <div className="">
                                            <div className="inline-block px-2 rounded-sm text-sm text-white bg-orange-500">10% OFF</div>
                                            <p className="text-sm text-gray-500 line-through mt-3">₹ 6,971</p>
                                            <h3 className="text-2xl text-gray-800 font-semibold">₹ 6,271 
                                                <span className="text-xs font-normal">+ ₹ 752 taxes & fees</span>
                                            </h3>
                                            <p className="text-xs text-gray-500">Room per night</p>

                                            <div className="inline-block py-2 px-5 text-lg cursor-pointer font-semibold rounded-lg border-2 border-primary text-primary mt-4">SELECT ROOM</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
        </>
    )
}

export default RoomCardWidget
