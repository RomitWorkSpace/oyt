import { CheckCircle, CircleX, CrossIcon } from 'lucide-react'
import React, { useEffect } from 'react'

function HotelFilter({handleFilter, tags}) {

    const filterCategory = {
        price : ["0 to 1000", "1000 to 1500", "1500 to 2500", "2500 to 4000", "4000 to 5000"],
        starRating : ["2", "3", "4", "5"],
        userRating: ["3", "3.5", "4", "4.5"],
        amenities: ["Wi-Fi", "Spa", "Swimming Pool", "Family rooms", "Restaurant", "Bar", "Paking","Cafe", "Balcony"],
        propertyTypes : ["Apartment","Hotel","Resort","Homestay","Villa","Hostel"],
        roomViews : ["Garden View", "City View"],
        houseRules : ["Smoking Allowed", "Pets Allowed", "Alcohol Allowed"],
        paymentPolicies : ["Free Cancellation"]
    }

    const FilterTag = ()=>{
        return(
            <>
            {tags.price && tags.price.map((item,index)=>(
            <div key={index} className="inline-block px-2 bg-sky-100 shadow-sm rounded-full text-xs">
                <div className="flex items-center">
                    <span className="">{item}</span>
                    <CircleX className='ml-1 cursor-pointer' width="13px"
                    onClick={()=>handleFilter("price",item)}
                    />
                </div>
            </div> 
            ))}
            {tags.starRating && tags.starRating.map((rating,index)=>(
            <div key={index} className="inline-block px-2 bg-sky-100 shadow-sm rounded-full text-xs">
                <div className="flex items-center">
                    <span className="">{rating} Stars</span>
                    <CircleX className='ml-1 cursor-pointer' width="13px"
                    onClick={()=>handleFilter("starRating",rating)}
                    />
                </div>
            </div> 
            ))}
            {tags.userRating && tags.userRating.map((rating,index)=>(
            <div key={index} className="inline-block px-2 bg-sky-100 shadow-sm rounded-full text-xs">
                <div className="flex items-center">
                    <span className="">{rating}+ Ratings</span>
                    <CircleX className='ml-1 cursor-pointer' width="13px"
                    onClick={()=>handleFilter("userRating",rating)}
                    />
                </div>
            </div> 
            ))}
            {tags.amenities && tags.amenities.map((amenity,index)=>(
            <div key={index} className="inline-block px-2 bg-sky-100 shadow-sm rounded-full text-xs">
                <div className="flex items-center">
                    <span className="">{amenity}</span>
                    <CircleX className='ml-1 cursor-pointer' width="13px"
                    onClick={()=>handleFilter("amenities",amenity)}
                    />
                </div>
            </div> 
            ))}
            </>
        )
    }

    useEffect(()=>{
        FilterTag()
    },[tags])

    return (
        <>
        <div className="w-full bg-white rounded-sm">
            <div className="filteration-area p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">FILTERS</span>
                <span className="float-right text-xs text-gray-400">CLEAR</span>
                <div className="flex flex-wrap gap-1 mt-2">
                    <FilterTag />
                </div>
            </div>
            <div className="filter-priceWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">Price</span>
                <div className="filter-option-area">
                    {filterCategory.price.map((item,index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" 
                            name={item} id={item} 
                            checked = {tags.price.includes(item)}
                            onChange={()=>handleFilter("price",item)}
                            />
                            <label htmlFor={item} className='ml-2 text-gray-700'>₹{item}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">Star Rating</span>
                <div className="filter-option-area">
                    {filterCategory.starRating.map((rating, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={rating} id={rating}
                            checked = {tags.starRating.includes(rating)}
                            onChange={()=>handleFilter("starRating",rating)}
                            />
                            <label htmlFor={rating} className='ml-2 text-gray-700'>{rating} Stars</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">User Ratings</span>
                <div className="filter-option-area">
                    {filterCategory.userRating.map((rating, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={`${rating}rating`} 
                            id={`${rating}rating`} 
                            checked = {tags.userRating.includes(rating)}
                            onChange={()=>handleFilter("userRating", rating)}
                            />
                            <label htmlFor={`${rating}rating`} className='ml-2 text-gray-700'>{rating}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">Amenities</span>
                <div className="filter-option-area">
                    {filterCategory.amenities.map((amenity, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={amenity} id={amenity}
                            onChange={()=>handleFilter("amenities", amenity)}
                            />
                            <label htmlFor={amenity} className='ml-2 text-gray-700'>{amenity}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">Property Type</span>
                <div className="filter-option-area">
                    {filterCategory.propertyTypes.map((type, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={type} id={type}
                            onChange={()=>handleFilter("propertyType", type)}
                            />
                            <label htmlFor={type} className='ml-2 text-gray-700'>{type}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">Room Views</span>
                <div className="filter-option-area">
                    {filterCategory.roomViews.map((view, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={view} id={view}
                            onChange={()=>handleFilter("roomViews", view)}
                            />
                            <label htmlFor={view} className='ml-2 text-gray-700'>{view}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">House Rules</span>
                <div className="filter-option-area">
                    {filterCategory.houseRules.map((rule, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={rule} id={rule}
                            onChange={()=>handleFilter("houseRules",rule)}
                            />
                            <label htmlFor={rule} className='ml-2 text-gray-700'>{rule}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-starWidget p-4 border-b border-gray-200">
                <span className="text-gray-700 font-semibold">Payment Policies</span>
                <div className="filter-option-area">
                    {filterCategory.paymentPolicies.map((policy, index)=>(
                        <div key={index} className="pt-3">
                            <input type="checkbox" name={policy} id={policy}
                            onChange={()=>handleFilter("paymentPolicies",policy)}
                            />
                            <label htmlFor={policy} className='ml-2 text-gray-700'>{policy}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default HotelFilter
