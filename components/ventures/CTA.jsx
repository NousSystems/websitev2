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
import ventures from '../../public/images/hero.jpg'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-white">
      

      <main className="sm:relative ">
        <div className="max-w-7xl w-full h-128 pb-24 sm:h-screen relative bg-green text-left lg:text-left">
                 
          <div className="px-4 py-10 absolute sm:bottom-0 lg:w-3/5 sm:px-8 ">
            <h1 className="tracking-tighter  sm:leading-[4.5rem] font-bold text-black sm:text-7xl text-5xl mb-8">
              <span className="xl:inline">Next-generation</span>{' '}
              <span className=" text-green-500 block sm:inline">early-stage </span>
              <span className="block">investing.</span>
            </h1>
            <p className="mt-2 max-w-md font-regular text-lg tracking-tight text-stone-800 opacity-80 sm:text-xl  md:max-w-xl">
              NOUS Ventures will bring together the next generation of startups with a decentralised community of early-stage investors.
            </p>
            <div className=" justify-center w-full sm:mb-0 mb-24 sm:w-1/2">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full mt-24 flex items-center justify-center sm:mt-4 py-4 border border-transparent text-base font-regular text-white bg-stone-800 hover:bg-green-500  md:py-4 md:text-lg md:px-10"
                >
                  EXPLORE PROJECTS
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
            src={ventures}
            alt=""
          />
          </div>
        </div>
      </main>
    </div>
  )
}
