import React, { useEffect, useState } from 'react'
import HotelFilter from './HotelFilter'
import HotelList from './HotelList'
import SearchForm from './SearchForm'
import { Hotels } from '../common/HotelData'
import { useLocation } from 'react-router-dom'

function HotelSearchList() {

    const location = useLocation()
    const [filteredProduct, setFilteredProduct] = useState(Hotels)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [searchData, setSearchData] = useState({
        location : '',
        searchLocation:'',
        searchCity : '',
        searchState: '',
        check_in : '',
        check_out: '',
        adults: 1,
        children: 0,
        rooms: 1
    })
    const [appliedFilter, setAppliedFilter] = useState({
        price : [],
        starRating : [],
        userRating: [],
        amenities: [],
        propertyTypes : [],
        roomViews : [],
        houseRules : [],
        paymentPolicies : []
    })

    const handleFilterOption = (category, option)=>{
        const updatedFilter = {...appliedFilter}
        if(updatedFilter[category].includes(option)){
            updatedFilter[category] = updatedFilter[category].filter((item)=>item != option)
        }
        else{
            updatedFilter[category] = [...updatedFilter[category], option]
        }
        setAppliedFilter(updatedFilter)
    }

    useEffect(()=>{
        if(location.state){
            const data = location.state
            setSearchData(data)
        }

    },[isFormSubmitted])

    return (
        <>
        <div className="container-fluid pt-1 pb-3 bg-primary">
            <div className="max-w-6xl mx-auto">
                <SearchForm formData={searchData} formStatus={setIsFormSubmitted} />
            </div>
        </div>

        <div className="py-1.5 bg-white shadow-lg mb-2">
            <div className="max-w-6xl mx-auto">
                <div className="flex gap-3">
                    <h3 className="font-semibold text-slate-700 leading-4 text-shadow-gray-700">Sort<br/>By:-</h3>
                    <div className="inline-block py-1 px-4 rounded-full bg-blue-100 font-semibold text-primary">Most Popular</div>
                    <div className="inline-block py-1 px-4 rounded-full border border-primary text-primary">Price: Low to high</div>
                    <div className="inline-block py-1 px-4 rounded-full border border-primary text-primary">Price: High to low</div>
                    <div className="inline-block py-1 px-4 rounded-full border border-primary text-primary">Price: Low to high</div>
                </div>
            </div>
        </div>
        <div className="py-5 bg-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex filter-wrapper">
                    <div className="md:w-[26%] px-3">
                        <HotelFilter handleFilter = {handleFilterOption} tags = {appliedFilter} />
                    </div>
                    <div className="md:w-[74%] px-3">
                        {filteredProduct && filteredProduct.map((product,index)=>
                            <HotelList Hotel={product} id={index} data={searchData} />
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HotelSearchList
