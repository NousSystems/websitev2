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
        <div className="max-w-7xl w-full  relative bg-stone-100  text-left lg:text-left">
                 
          <div className="px-4 py-16  lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tighter  leading-[4rem] font-semibold text-stone-800 text-8xl mb-8">
              Indexes
            </h1>
            <p className="mt-2 max-w-md font-light text-lg tracking-tight text-stone-200 opacity-80 sm:text-xl  md:max-w-md">
              Bonds are simple investment contracts that given an investor a fixed rate of return. Browse open bond offerings from high-quality projects.
            </p>
            <div className=" justify-center w-1/2 mt-36">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center mt-4 py-4 border border-transparent text-base font-light text-white bg-stone-800 hover:bg-blue-700  md:py-4 md:text-lg md:px-10"
                >
                  BROWSE THE MARKET
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          
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
