import React from 'react'
import Logo from 'imgPath/logo.png'
import { ChevronRight, CopyrightIcon, FacebookIcon, InstagramIcon, LinkedinIcon, Mail, MapIcon, PhoneCall, TwitterIcon, YoutubeIcon } from 'lucide-react'

function Footer() {
    return (
        <>
        <div className="footer pt-10 pb-6 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 p-4">
                        <img src={ Logo } alt="oyt Logo" width="100" />
                        <div className="mt-2 text-sm text-gray-800">Plot No. 35 , Ecotech-II , Udyog Vihar Extension. Greater Noida Uttar Pradesh-201306</div>
                        <div className="flex gap-2 mt-4">
                            <FacebookIcon className='w-5 text-primary' />
                            <InstagramIcon className='w-5 text-primary' />
                            <TwitterIcon className='w-5 text-primary' />
                            <YoutubeIcon className='w-5 text-primary' />
                            <LinkedinIcon className='w-5 text-primary' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="text-md mb-3 text-gray-900 font-semibold">Useful Links</h3>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">About us</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">How We Work</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">Careers</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">List your property</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">Corporate contact</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">Terms & Conditions</span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="text-md mb-3 text-gray-900 font-semibold">Best Locations</h3>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">About us</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">How We Work</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">Careers</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">List your property</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">Corporate contact</span>
                        </div>
                        <div className="flex items-center">
                            <ChevronRight className='text-primary text-sm' /> <span className="text-sm text-gray-800">Terms & Conditions</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="text-md mb-3 text-gray-900 font-semibold">Get In Touch</h3>
                        <div className="flex">
                            <MapIcon className='text-primary' style={{fontSize:'20px'}} /> <span className="text-sm text-gray-800 w-[90%]"> Plot No. 35 , Ecotech-II , Udyog Vihar Extension. Greater Noida Uttar Pradesh-201306</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <PhoneCall className='text-primary' /><span className="text-sm"> +91 8493898343</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Mail className='text-primary' /><span className="text-sm"> support@ownyourtravel.in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-primary py-4">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center flex text-white text-sm">
                    Copyright 2025 | All rights reserved
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
