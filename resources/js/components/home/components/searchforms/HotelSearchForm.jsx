import { MapPin } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

function HotelSearchForm() {

    const [isLocationFieldActive, setIsLocationFieldActive] = useState(false)
    const dropdownRef = useRef();

    const [inputValues, setInputValues] = useState({
        location : '',
        check_in : '',
        check_out: '',
        rooms: '',
        adults: '',
        childs: ''
    })

    const handleInputChange = (e)=>{
        setInputValues(prev=>{
            const values = {...prev, [e.target.name] : e.target.value}
            return values
        })
    }

    const handleSelectedOption = (value)=>{
        setInputValues(prev=>{
            const values = {...prev}
            values.location = value
            return values
        })
    }

    useEffect(()=>{
        const handleClickOutside = (e)=>{
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
            setIsLocationFieldActive(false)
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    },[])

    return (
        <>
        <h3 className="text-orange-400 text-xl">Search Hotel</h3>

                    <div className="mt-3">
                        <form action="#">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/3 p-2">
                                    <div ref={dropdownRef} className="relative">
                                        <label htmlFor="location" className='mb-3'>Select Location</label>
                                        <input type="text" name="location" 
                                        value={inputValues.location}
                                        id="location" className='w-full bg-white h-12 rounded-md outline-primary px-3'
                                        onFocus={()=>setIsLocationFieldActive(true)}
                                        onChange={handleInputChange}
                                        />
                                        <div className={` ${isLocationFieldActive ? 'block' : 'hidden'} absolute top-19 left-0 right-0 p-1 shadow-lg rounded-md bg-gray-50 border border-gray-400`}>
                                            <h3 className="m-0 p-4 text-sm font-semibold text-gray-800 border-b border-gray-300">Trending destinations</h3>
                                            <div className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                                            onClick={()=>handleSelectedOption("Delhi")}
                                            >
                                                <MapPin className='text-primary' /><span className="text-sm ml-2 text-gray-800">Delhi</span>
                                            </div>
                                            <div className="p-2 flex items-center hover:bg-gray-100">
                                                <MapPin className='text-primary' /><span className="text-sm ml-2 text-gray-800">Noida</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label htmlFor="location" className='mb-3'>Check-in</label>
                                    <input type="date" name="check_in" id="location" className='w-full bg-white h-12 rounded-md outline-primary px-3 text-slate-700' />
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label htmlFor="location" className='mb-3'>Check-out</label>
                                    <input type="date" name="check_out" id="location" className='w-full bg-white h-12 rounded-md outline-primary px-3 text-slate-700' />
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label htmlFor="location" className='mb-3'>Rooms</label>
                                    <select name="location" id="location" className='w-full bg-white h-12 rounded-md outline-primary px-3'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label htmlFor="location" className='mb-3'>Adults</label>
                                    <select name="location" id="location" className='w-full bg-white h-12 rounded-md outline-primary px-3'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/3 p-2">
                                    <label htmlFor="location" className='mb-3'>Childs</label>
                                    <select name="location" id="location" className='w-full bg-white h-12 rounded-md outline-primary px-3'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
        </>
    )
}

export default HotelSearchForm
