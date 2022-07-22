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
import ventures from '../../public/images/ventureshero.jpg'
import bonds from '../../public/images/bonds.jpg'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-cyan-500">
      

      <main className="sm:relative ">
        
        <div className="w-full h-2/3 flex flex-col sm:flex-row">
            <div className="flex-1 w-full">
            <div className=" relative w-full h-full bg-black object-contain">
           <Image
            layout="fill"
            objectFit="cover"
            src={ventures}
            alt=""
          /> 
          </div>
        </div>
        <div className="flex-1 w-full  ">
        <div className="px-4 py-12 sm:py-16 lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tighter leading-[4rem] uppercase font-bold text-white text-6xl sm:text-8xl">
              Ventures.
            </h1>
            <p className="mt-2 sm:mt-4 ml-1 max-w-md font-regular text-lg tracking-tight text-green-50   md:max-w-sm">
              Nous is connecting startups and new projects with crypto investors from around the world.
            </p>
            <p className="mt-48 max-w-md flex font-regular text-lg tracking-tight text-white sm:text-lg  md:max-w-md">
                
                - High quality web3, crypto and tech startups.
            </p>
            <p className="mt-2 max-w-md flex font-regular text-lg tracking-tight text-white  sm:text-lg  md:max-w-md">
                
               - Real founders, real use cases.
            </p>
            <p className="mt-2 max-w-md flex font-regular text-lg tracking-tight text-white  sm:text-lg  md:max-w-md">
                
               - Angel investing made easy.
            </p>
            <div className=" justify-center w-2/3 ">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center mt-4 py-4 border border-transparent text-base font-regular text-white border-2 border-white  md:py-4 md:text-lg md:px-10"
                >
                  COMING SOON
                </a>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
