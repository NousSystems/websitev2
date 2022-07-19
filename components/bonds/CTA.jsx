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
import ventures from '../../public/images/ventures.jpg'
import bonds from '../../public/images/bonds.jpg'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-cyan-500">
      

      <main className="sm:relative ">
        
        <div className="w-full h-2/3 flex flex-col sm:flex-row">
        <div className="flex-1 w-full  ">
        <div className="px-4 py-12 sm:py-16 lg:w-full sm:px-8 ">
            <h1 className="tracking-tighter sm:leading-[6rem] mb-24 sm:mb-48 font-bold text-white text-7xl sm:text-8xl">
              Mint a<span className="block">bond.</span> 
            </h1>
            
            <div className=" justify-center w-2/3 ">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center mt-4 py-4 border border-transparent text-base font-medium bg-white text-cyan-500 border-2 border-white  md:py-4 md:text-lg md:px-10"
                >
                  INVEST
                </a>
              </div>
              
            </div>
          </div>
        </div>
            <div className="flex-1 w-full">
            <div className=" relative w-full h-full bg-black object-contain">
              <p className="text-9xl font-medium uppercase leading-[6rem] text-white p-8">&quot;</p>
              <p className="text-3xl font-medium text-white px-12">&quot;We&apos;re delighted to announce the release of our bond offering, aimed at raising the capital needed to grow the company and develop products and services for our growing community of investors.&quot;</p>
              <p className="text-xl font-medium uppercase leading-[6rem] text-white px-12">Thomas Stuart | CEO</p>
              <p className="text-9xl text-right font-medium uppercase leading-[6rem] text-white px-8">&quot;</p>
         
          {/* /* <Image
            layout="fill"
            objectFit="cover"
            src={bonds}
            alt=""
          />  */}
          </div>
        </div>
        
        </div>
      </main>
    </div>
  )
}
