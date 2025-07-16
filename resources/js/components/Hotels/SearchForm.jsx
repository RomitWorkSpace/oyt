import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Locations } from '../common/HotelData'
import { MapPin } from 'lucide-react'

function SearchForm({formData, formStatus}) {
    
    const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
    const [isTravellerDropdownOpen, setIsTravellerDropdownOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const searchDropdownRef = useRef()
    const travellerDropdownRef = useRef()

    const queryParams = new URLSearchParams(window.location.search);
    const checkin = queryParams.get('checkin').trim();
    const checkout = queryParams.get('checkout').trim();

    const [travellerInfo, setTravellerInfo] = useState({
        adults : formData.adults,
        rooms : formData.rooms,
        children : formData.children
    })

    const handleSearchDropdown = ()=>{
        setIsSearchDropdownOpen(true)
    }

    const handleTravellerDropdown = ()=>{
        setIsTravellerDropdownOpen(true)
    }

    const handleIncrementButton = (entity)=>{
        let tempData = {...travellerInfo}
        if(entity == "adults"){
            tempData.adults = tempData.adults+1
        }
        if(entity == "children"){
            tempData.children = tempData.children+1
        }
        if(entity == "rooms"){
            tempData.rooms = tempData.rooms+1
        }
        setTravellerInfo(tempData)
    }

    const handleDecrimentButton = (entity)=>{
        let tempData = {...travellerInfo}
        if(entity == "adults"){
            tempData.adults = tempData.adults-1
        }
        if(entity == "children"){
            tempData.children = tempData.children-1
        }
        if(entity == "rooms"){
            tempData.rooms = tempData.rooms-1
        }
        setTravellerInfo(tempData)
    }

    useEffect(()=>{
        const handleClickOutside = (e)=>{
            if(searchDropdownRef.current && !searchDropdownRef.current.contains(e.target)){
                setIsSearchDropdownOpen(false)
            }
            if(travellerDropdownRef.current && !travellerDropdownRef.current.contains(e.target)){
                setIsTravellerDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown',handleClickOutside)
        return ()=>document.removeEventListener('mousedown',handleClickOutside)
    },[])

//--------------------- Check in & Check out -------------------- //
    useEffect(()=>{
        setStartDate(checkin)
        setEndDate(checkout)
    },[])

          // Helper to remove time part from date
  const stripTime = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
  };

  const isStartDateDisabled = (date) => {
    return stripTime(date) > stripTime(new Date());
  };

  const isEndDateDisabled = (date) => {
    return stripTime(date) > stripTime(startDate);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (stripTime(date) > stripTime(endDate)) {
      setEndDate(date);
    }
  };

    return (
        <>
        <div className="searchWidget">
                    <form action="#">
                        <div className="flex flex-wrap items-center">
                            <div className="search-input-widget w-full lg:w-[30%] px-2">
                                <div ref={searchDropdownRef} className="relative">
                                    <label htmlFor="search-input" className='text-xs text-white'>SEARCH HOTEL LOCATION</label>
                                    <input type="text" name="location" 
                                    id="search-input" className='w-full h-11 bg-white px-4 rounded-md'
                                    placeholder='Enter location...'
                                    value={formData.location}
                                    onFocus={()=>handleSearchDropdown()}
                                    />
                                    <div className={` ${isSearchDropdownOpen ? 'block' : 'hidden'} absolute top-18 z-10 left-0 right-0 p-4 shadow-md bg-white rounded-md`}>
                                        <div className="pb-4 border-b border-gray-200 text-sm font-semibold">Trending Destinations</div>
                                        <div className="flex items-center py-3 text-sm">
                                            <MapPin className='text-primary' /> <span className="ml-2">Greater Noida</span>
                                        </div>
                                        <div className="flex items-center py-3 text-sm">
                                            <MapPin className='text-primary' /> <span className="ml-2">Greater Noida</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="search-input-widget w-full lg:w-[15%] px-2">
                                <div className="date-picker-group flex flex-col mt-2">
                                    <label htmlFor="search-input" className='text-xs text-white'>CHECKIN</label>
                                        <DatePicker
                                            id="start-date"
                                            selected={startDate}
                                            onChange={handleStartDateChange}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            filterDate={isStartDateDisabled}
                                            dateFormat="dd MMM, yyyy"
                                            timeFormat = "HH:mm"
                                            className="w-full bg-white h-11 rounded-md outline-primary px-2"
                                            popperPlacement="bottom-start"
                                        />
                                </div>
                            </div>
                            <div className="search-input-widget w-full lg:w-[15%] px-2">
                            <div className="date-picker-group flex flex-col mt-2">
                                <label htmlFor="search-input" className='text-xs text-white'>CHECKOUT</label>
                                    <DatePicker
                                        id="end-date"
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        filterDate={isEndDateDisabled}
                                        dateFormat="dd MMM, yyyy"
                                        timeFormat = "HH:mm"
                                        className="w-full bg-white h-11 rounded-md outline-primary px-2"
                                        popperPlacement="bottom-start"
                                    />
                                </div>
                            </div>
                            <div className="search-input-widget w-full lg:w-[23%] px-2">
                                <div ref={travellerDropdownRef} className="relative">
                                    <label htmlFor="traveller" className='text-xs text-white'>GUEST & ROOMS</label>
                                    <input type="text" name="traveller" 
                                    id="traveller" className='w-full h-11 bg-white px-3 rounded-md' 
                                    editable = "false"
                                    value={`${travellerInfo.adults} Adults . ${travellerInfo.children} Children . ${travellerInfo.rooms} Rooms`}
                                    onFocus={()=>handleTravellerDropdown()}
                                />
                                <div className={` ${isTravellerDropdownOpen ? 'block' : 'hidden'} absolute top-18 left-0 right-0 p-4 border border-gray-200 z-10 bg-white rounded-sm shadow-md`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-700">Adults</span>
                                        <div className="border flex border-gray-300 rounded-xs text-gray-700">
                                            <div className={`px-3 py-1 hover:bg-gray-100 text-2xl
                                            ${travellerInfo.adults <= 1 ? 'pointer-events-none text-gray-400' : 'cursor-pointer'}`}
                                            onClick={()=>handleDecrimentButton("adults")}
                                            >-</div>
                                            <div className="px-3 py-1 text-xl">{travellerInfo.adults}</div>
                                            <div className="px-3 py-1 cursor-pointer hover:bg-gray-100 text-2xl"
                                            onClick={()=>handleIncrementButton("adults")}
                                            >+</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-700">Children</span>
                                        <div className="border flex border-gray-300 rounded-xs text-gray-700">
                                            <div className={`px-3 py-1 hover:bg-gray-100 text-2xl ${travellerInfo.children <= 0 ? 'pointer-events-none text-gray-400' : 'cursor-pointer'}`}
                                            onClick={()=>handleDecrimentButton("children")}
                                            >-</div>
                                            <div className="px-3 py-1 text-xl">{travellerInfo.children}</div>
                                            <div className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-2xl"
                                            onClick={()=>handleIncrementButton("children")}
                                            >+</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-700">Rooms</span>
                                        <div className="border flex border-gray-300 rounded-xs text-gray-700">
                                            <div className={`px-3 py-1 hover:bg-gray-100 text-2xl
                                            ${travellerInfo.rooms <= 1 ? 'pointer-events-none text-gray-400' : 'cursor-pointer'}`}
                                            onClick={()=>handleDecrimentButton("rooms")}
                                            >-</div>
                                            <div className="px-3 py-1 text-xl">{travellerInfo.rooms}</div>
                                            <div className="px-3 py-1 hover:bg-gray-100 text-2xl cursor-pointer"
                                            onClick={()=>handleIncrementButton("rooms")}
                                            >+</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="inline-block py-1.5 px-4 bg-gray-100 ml-auto mt-5 text-orange-400 font-semibold text-xl cursor-pointer rounded-md">Update Search</div>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default SearchForm
