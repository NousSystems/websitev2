/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    BriefcaseIcon,
    ChartBarIcon,
    CheckCircleIcon,
    ChevronRightIcon,
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
import bonds from '../../public/images/bonds.jpg'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      

      <main className="sm:relative ">
        <div className="max-w-7xl w-full h-2/3 relative bg-black  text-left lg:text-left">
                 
          <div className="px-4 py-12 sm:py-16 lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tight leading-[4rem] font-semibold text-white text-6xl sm:text-8xl uppercase">
              Bonds.
            </h1>
            <p className="mt-2 sm:mt-4 ml-1 max-w-md font-regular text-lg tracking-tight text-neutral-400   md:max-w-sm">
              Bonds are simple investment contracts that given an investor a fixed rate of return. Browse open bond offerings from high-quality projects.
            </p>
            <p className="mt-48 max-w-md flex font-regular text-lg tracking-tight text-white sm:text-lg  md:max-w-md">
                
                - Access a range of fixed yields.
            </p>
            <p className="mt-2 max-w-md flex font-regular text-lg tracking-tight text-white  sm:text-lg  md:max-w-md">
                
               - Transparent, on-chain enforcement.
            </p>
            <p className="mt-2 max-w-md flex font-regular text-lg tracking-tight text-white  sm:text-lg  md:max-w-md">
                
               - No performance fees.
            </p>
            <div className=" justify-center w-full sm:w-1/2 ">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full px-4 sm:px-4 flex items-center justify-center mt-4 py-4 border border-transparent text-base font-regular text-green-300 border-2 border-green-300  md:py-4 md:text-lg md:px-10"
                >
                  VIEW BOND OFFERINGS
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-screen">
          
          <div className="absolute inset-0 w-full h-full bg-cyan-500 object-cover">
          {/* <Image
            layout="fill"
            objectFit="cover"
            src={bonds}
            alt=""
          /> */}
          </div>
        </div>
      </main>
    </div>
  )
}
