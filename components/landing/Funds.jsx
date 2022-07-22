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
import funds from '../../public/images/fundshero.webp'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative ">
      

      <main className="sm:relative ">
        <div className="max-w-7xl w-full h-2/3 relative bg-white  text-left lg:text-left">
                 
          <div className="px-4 py-12 sm:py-16 lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tighter uppercase leading-[4rem] font-bold text-black text-6xl  sm:text-8xl">
              Funds.
            </h1>
            <p className="mt-2 sm:mt-4 max-w-md font-regular ml-1 text-lg tracking-tight text-neutral-600   md:max-w-sm">
              Invest in a managed fund that suits your investment philosophy, from market-neutral to momentum. 
            </p>
            <p className="mt-48 max-w-md flex font-regular text-lg tracking-tight text-black sm:text-lg  md:max-w-md">
                
                - Access algorithmic trading.
            </p>
            <p className="mt-2 max-w-md flex font-regular text-lg tracking-tight text-black  sm:text-lg  md:max-w-md">
                
               - Live reporting.
            </p>
            <p className="mt-2 max-w-md flex font-regular text-lg tracking-tight text-black  sm:text-lg  md:max-w-md">
                
               - Real yield generation.
            </p>
            <div className=" justify-center w-1/2 ">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center mt-4 py-4 border border-transparent text-md font-medium text-cyan-500 border-2 border-cyan-500 hover:bg-  md:py-4 md:text-md md:px-10"
                >
                  BROWSE OPEN FUNDS
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          
          <div className="absolute inset-0 w-full h-full bg-neutral-500 object-cover">
          <Image
            layout="fill"
            objectFit="cover"
            src={funds}
            alt=""
          /> 
          </div>
        </div>
      </main>
    </div>
  )
}
