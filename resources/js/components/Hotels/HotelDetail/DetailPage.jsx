import React from 'react'
import SearchForm from '../SearchForm'
import { useLocation } from 'react-router-dom'
import { ChevronRight, ShieldCheck, StarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RoomCardWidget from './RoomCardWidget'

function DetailPage() {
    const location = useLocation()
    const data = location.state
    return (
        <>
        <div className="container-fluid pt-1 pb-3 bg-primary">
            <div className="max-w-6xl mx-auto">
                <SearchForm formData={data} />
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#f2f2f2'}}>
            <div className="max-w-6xl mx-auto">
                <div className="breadcrumb text-xs font-semibold text-gray-600 py-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary">Home</span> <ChevronRight width="13px" className='text-gray-400' />
                        <span className="text-primary">Hotels in Delhi</span> <ChevronRight width="13px" className='text-gray-400' />
                        <span className="">{data.location}</span>
                    </div>
                </div>
                <div className="p-4 shadow-lg rounded-lg bg-white">
                    <div className="text-2xl font-semibold text-gray-700">Pride Plaza Hotel Aerocity New Delhi</div>
                    <div className="flex items-center justify-between">
                        <div className="inline-block text-xs text-gray-600 border  px-1 rounded-sm border-gray-300">
                            <div className="flex items-center">5 <StarIcon width="12px" className='text-yellow-500' /> . Hotel</div>
                        </div>
                        
                        <div className="text-primary text-xs">120 ratings . <span className="cursor-pointer">View reviews</span></div>
                    </div>

                    <div className="hotel-infoSection mt-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-[67%]">
                                <div className="flex gap-4">
                                    <div className="w-full md:w-[67%]">
                                        <img src="https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&crop=520:350;2,0&output-format=jpg&downsize=540:*" alt="mds" className='rounded-lg' width="100%" />
                                    </div>
                                    <div className="w-full md:w-[33%]">
                                        <div className="mb-4">
                                            <img src="https://r1imghtlak.ibcdn.com/9caf0e2a43e811e98b9a0242ac110003.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp" alt="" width="100%" className='rounded-lg object-cover' />
                                        </div>
                                        <div className="">
                                            <img src="https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&crop=520:350;2,0&output-format=jpg&downsize=540:*" alt="" width="100%" className='rounded-lg' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-sm text-gray-800">With a perfect blend of comfort and affordability, this hotel offers an epitome of world-class amenities with unmatched hospitality. <span className="text-primary">Read More</span></div>
                            </div>
                            <div className="w-full md:w-[33%] pl-4">
                                <div className="border border-gray-300 rounded-lg p-4">
                                    <h3 className="text-gray-700 font-semibold"><span className="text-orange-500">Note:-</span> Day use room (10 am to 5 pm) Maximum 6 hrs stay.</h3>
                                    <span className="text-sm text-gray-700">- Fits 3 Adults</span>
                                    <p className="text-sm text-gray-700">- Non refundable</p>
                                    <p className="text-sm text-gray-700">- No meals included</p>
                                    <div className="flex items-center mt-4 text-sm text-green-700 gap-2"><ShieldCheck width="16px" /> Free Cancellation</div>
                                    <p className="line-through text-gray-600">₹ 18,997</p>
                                    <h3 className="text-3xl font-semibold">₹ 16,997 <span className="text-sm text-gray-600 font-normal"> + ₹ 2665 taxes & fees</span></h3>

                                    <div className="flex items-center justify-between">
                                        <Button className="mt-4 cursor-pointer bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
                                            Book This Now
                                        </Button>
                                        <p className="text-primary text-sm">View 9 More Options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="room-typeWidget">
                    <div className="bg-white text-2xl text-gray-800 p-4 font-semibold">Select Room Types</div>
                        <RoomCardWidget />
                        <RoomCardWidget />
                </div>

            </div>
        </div>
        </>
    )
}

export default DetailPage
