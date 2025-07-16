import { Check } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HotelList({ Hotel, id, data }) {
    const nav = useNavigate()
    const hotel_name = Hotel.hotel_name

    const h_name = hotel_name.toLowerCase().replaceAll(" ","-")
    const navigateToDetailPage = ()=>{
        nav(`/hotels/hotel-detail/${Hotel.hotel_id}?${h_name}&checkin=2025-07-16&checkout=2025-07-18`, {state:data})
    }

    return (
        <>
        <div key={id} onClick={()=>navigateToDetailPage()} className="bg-white p-4 rounded-md shadow-sm mb-5 hover:cursor-pointer hover:border hover:border-primary">
            <div className="flex flex-wrap">
                <div className="w-full md:w-[30%]">
                   <div className="">
                     <img src={Hotel.images[0]} alt="prop" width="100%" className='rounded-md' />
                     <div className="mt-2 flex">
                        
                        {Hotel.images.map((photo, index)=>(
                            <div key={index} className="w-1/4 px-1">
                                <img src={photo} alt="sdf" width="100%" className='rounded-md h-12' />
                            </div>
                        ))}
                        
                     </div>
                   </div>
                </div>
                <div className="w-full md:w-[70%]">
                    <div className="hotel-info pl-4">
                        <h3 className="text-md text-gray-700 font-semibold">{Hotel.hotel_name}</h3>
                        <span className="text-xs text-primary">{`${Hotel.address.city}, ${Hotel.address.state}`}</span>
                        <div className="mt-4 flex items-center gap-3">
                            
                            {Hotel.amenities.map((amenty, index)=>(
                                <div key={index} className="inline-block py-1 px-2 border border-gray-200 rounded-sm text-xs text-gray-500">{amenty}</div>
                            ))}
                            <span className="text-primary text-xs">& more</span>
                        </div>
                        <div className="flex flex-wrap justify-between mt-5">
                            <div className="inline-block">
                                <div className="flex gap-2 items-center text-xs">
                                    <Check className='text-green-600' /> <span className="text-gray-500">Free Cancellation</span>
                                </div>
                                <div className="flex gap-2 items-center text-xs">
                                    <Check className='text-green-600' /> <span className="text-gray-500">Book @ ₹0 available</span>
                                </div>
                                <div className="flex gap-2 items-center text-xs">
                                    <Check className='text-green-600' /> <span className="text-gray-500">10% off on Food & Beverage services</span>
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-3xl text-gray-600 font-semibold">₹ {Hotel.price}</h3>
                                <span className="text-xs text-gray-600">+ ₹ {Hotel.taxes} taxes & fees<br/>Rooms per night</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HotelList
