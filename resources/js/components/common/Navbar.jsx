"use client"

import { useState } from "react"
import { ChevronDown, Menu, X, MapPin, Plane, Calendar, Users, Camera, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import Logo from 'imgPath/logo.png'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const services = [
    { name: "Flight Booking", icon: Plane, href: "#flights" },
    { name: "Hotel Reservations", icon: MapPin, href: "#hotels" },
    { name: "Tour Packages", icon: Calendar, href: "#tours" },
    { name: "Group Travel", icon: Users, href: "#group" },
    { name: "Photography Tours", icon: Camera, href: "#photography" },
    { name: "International Travel", icon: Globe, href: "#international" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={ Logo } alt="oyt logo" width="100" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700 hover:text-blue-600 px-3 outline-none py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1">
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2" align="start">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <a
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <service.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{service.name}</span>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#destinations"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Destinations
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
              Book Now
            </Button>
          </div>


        </div>
      </div>



    </nav>
  )
}
