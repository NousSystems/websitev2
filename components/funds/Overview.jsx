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
    <div className="relative bg-gray-50">
      

      <main className="sm:relative ">
        <div className="max-w-7xl w-full h-128 pb-24 sm:h-screen relative bg-white text-left lg:text-left">
                 
          <div className="px-4 py-10 absolute sm:bottom-0 lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tighter  sm:leading-[4.5rem] font-bold text-stone-800  sm:text-7xl text-5xl mb-8">
              <span className="xl:inline">Fighting the</span>{' '}
              <span className=" text-purple-600 block">wealth divide.</span>
            </h1>
            <p className="mt-2 max-w-md font-regular text-lg tracking-tight text-stone-800 opacity-80 sm:text-lg  md:max-w-md">
              Since 1995, the top 1% have earned 20x more global wealth than the bottom 50%. 
            </p>
            <p className="mt-2 max-w-md font-regular text-lg tracking-tight text-stone-800 opacity-80 sm:text-lg  md:max-w-md">
            We think that&apos;s a problem and we&apos;re on a mission to bring the asset management industry closer to normal people.
            </p>
            <div className=" justify-center w-full sm:mb-0 mb-24 sm:w-1/2">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full mt-24 flex items-center justify-center sm:mt-4 py-4 border border-transparent text-base font-regular text-white bg-purple-600 hover:bg-blue-700  md:py-4 md:text-lg md:px-10"
                >
                  BROWSE FUNDS
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative w-full h-128 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          
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
