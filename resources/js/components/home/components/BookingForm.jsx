import React from 'react'
import BgImage from 'imgPath/bg3.jpg'
import { Bus, Flag, HeartHandshake, HotelIcon, LuggageIcon, PlaneIcon, ShipIcon, TentTree, TreePalm, Wine } from 'lucide-react'
import HotelSearchForm from './searchforms/HotelSearchForm'

function BookingForm() {

    const formTabs = [
        {id:1, name:"Hotel", icon: HotelIcon},
        {id:2, name: "Cruises", icon: ShipIcon},
        {id:3, name: "Charted Planes", icon: PlaneIcon},
        {id:4, name: "Wedding", icon: HeartHandshake},
        {id:5, name: "Resorts", icon: TentTree},
        {id:6, name: "Wines", icon: Wine},
        {id:7, name: "Holiday", icon: TreePalm},
        {id:8, name: "Honeymoon", icon: LuggageIcon},
        {id:9, name: "Caravan", icon: Bus},
    ]

    return (
        <>
        <div className="container-fluid py-12 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${BgImage})`}}>
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="md:text-3xl text-2xl text-primary text-center">Booking Form Open</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                    {formTabs.map((item)=>(
                        <div key={item.id} className="inline-block px-3 py-1 border border-primary rounded-sm text-primary">
                            <div className="flex">
                                <item.icon />{item.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="py-6 px-5 shadow-lg mt-6 rounded-lg" style={{backgroundColor:'#00000020'}}>
                    <HotelSearchForm />
                </div>
            </div>
        </div>
        </>
    )
}

export default BookingForm
