/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    BriefcaseIcon,
    ChartBarIcon,
    CheckCircleIcon,
    CursorClickIcon,
    DesktopComputerIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    MenuIcon,
    NewspaperIcon,
    OfficeBuildingIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ViewGridIcon,
    XIcon,
  } from '@heroicons/react/outline'
  import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../../public/images/logo.svg'
import navbarlogo from '../../public/images/navbarlogo.svg'
import marketplace from '../../public/images/marketplace.jpg'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-black mx-auto">
      

      <main className="sm:relative bg-black">
        <div className="max-w-7xl sm:ml-20 w-full h-128 pb-24 sm:h-screen relative bg-black text-left lg:text-left">
                 
          <div className="px-4 py-10 absolute sm:bottom-0 lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tighter  sm:leading-[4rem] font-semibold text-neutral-200  sm:text-7xl text-6xl mb-8">
              <span className="xl:inline">A marketplace for</span>{' '}
              <span className=" text-cyan-500 inline">crypto investors.</span>
            </h1>
            <p className="mt-2 max-w-md font-regular text-lg tracking-tight text-neutral-200 opacity-80 sm:text-xl  md:max-w-xl">
              Marketplaces bring greater equality and transparency to fragmented markets like crypto and DeFi. Explore the best opportunities in crypto.
            </p>
            <div className=" justify-center mt-24 w-full sm:mb-0 mb-24 sm:w-1/2">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full   flex items-center justify-center sm:mt-4 py-4 border border-transparent text-base font-regular text-white bg-stone-800 hover:bg-blue-700  md:py-4 md:text-lg md:px-10"
                >
                  BROWSE THE MARKET
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="hidden sm:block relative w-full h-128 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          
          <div className="absolute inset-0 w-full h-full object-cover">
          <Image
            layout="fill"
            objectFit="cover"
            src={marketplace}
            alt=""
          />
          </div>
        </div>
      </main>
    </div>
  )
}
