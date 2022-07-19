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
    <div className="relative bg-white">
      

      <main className="sm:relative ">
        
        <div className="w-full h-2/3 flex flex-col sm:flex-row">
        <div className="flex-1 w-full  ">
        <div className="px-4 py-12 sm:py-16 lg:w-full sm:px-8 ">
            <h1 className="tracking-tight uppercase sm:leading-[6rem] mb-24 sm:mb-48 font-bold text-black text-7xl sm:text-8xl">
              Invest in <span className="block text-purple-500">Nous A1</span> 
            </h1>
            
            <div className=" justify-center w-2/3 ">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center mt-4 py-4 border border-transparent text-base font-medium bg-white text-purple-500 border-2 border-purple-500  md:py-4 md:text-lg md:px-10"
                >
                  REGISTER FOR EARLY ACCESS
                </a>
              </div>
              
            </div>
          </div>
        </div>
            <div className="flex-1 w-full">
            <div className=" relative w-full h-full bg-gradient-radial from-purple-600 via-purple-700 to-purple-800 object-contain">
            
              <p className="text-xl font-medium uppercase leading-[1rem text-white p-8">Performance</p>
              <p className="text-4xl font-regular uppercase text-center mt-20 leading-[1rem text-neutral-200">Current APY:</p>
              <p className="text-9xl font-bold uppercase text-center  text-white ">23%</p>
              <p className="text-lg font-regular uppercase text-center  mt-2 text-neutral-200">* LAST UPDATED: 19.07.2022</p>
              <p className="text-xl text-right font-medium uppercase absolute bottom-0 right-0 mb-8 text-white px-8">Performance</p>
         
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
