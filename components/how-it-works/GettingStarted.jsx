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
        <div className="px-4 py-4 sm:py-8 lg:w-full sm:px-8 ">
            <h1 className="tracking-tight uppercase  mb-24 sm:mb-48 font-semibold text-black  sm:text-2xl">
              WHAT'S NEEDED<span className="block">TO GET STARTED?</span> 
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
            <div className=" relative w-full h-full bg-white object-contain">
            
              
         
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
