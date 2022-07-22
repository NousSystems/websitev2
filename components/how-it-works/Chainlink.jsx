/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
import hero from '../../public/images/hero.jpg'
import nous from '../../public/images/nous.svg'
import polygon from '../../public/images/polygon.svg'
import chainlink from '../../public/images/chainlink.jpg'

const solutions = [
    {
      name: 'Bonds',
      description: 'Invest in crypto projects with fixed yield bonds.',
      href: 'bonds',
      icon: ChartBarIcon,
    },
    {
      name: 'Funds',
      description: 'Invest in a range of actively managed crypto funds.',
      href: 'funds',
      icon: CursorClickIcon,
    },
    { name: 'Ventures', description: "Invest in the hottest new projects in crypto and web3 ", href: 'ventures', icon: ShieldCheckIcon },
    
  ]

  const more = [
    {
      name: 'How it works',
      description: 'A pioneering use case for NFTs',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Company',
      description: 'Find out more about the team building Nous.',
      href: '#',
      icon: CursorClickIcon,
    },
    { name: 'Docs', description: "Read our whitepaper and project documentation.", href: '#', icon: ShieldCheckIcon },
    
  ]

  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'View All Products', href: '#', icon: CheckCircleIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  const company = [
    { name: 'About', href: '#', icon: InformationCircleIcon },
    { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
    { name: 'Press', href: '#', icon: NewspaperIcon },
    { name: 'Careers', href: '#', icon: BriefcaseIcon },
    { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
  ]
  const resources = [
    { name: 'Community', href: '#', icon: UserGroupIcon },
    { name: 'Partners', href: '#', icon: GlobeAltIcon },
    { name: 'Guides', href: '#', icon: BookmarkAltIcon },
    { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
  ]
  const blogPosts = [
    {
      id: 1,
      name: 'Boost your conversion rate',
      href: '#',
      preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
      imageUrl:
        'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
    },
    {
      id: 2,
      name: 'How to use search engine optimization to drive traffic to your site',
      href: '#',
      preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
      imageUrl:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
    },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    
      <main className="sm:relative relative ">
        <div className=" w-full h-screen sm:h-screen  bg-black  text-left lg:text-left">
                 
          <div className="px-4 py-8  lg:w-1/2 absolute bottom-8 sm:px-8 ">
            
            <h1 className="tracking-tighter  leading-[5.5rem] sm:leading-[4rem] font-semibold text-white text-4xl sm:text-7xl ">
              <span className="block xl:inline">Enforcing <span className="">contracts</span></span>{' '}
              <span className="block text-blue-500 "><span className="text-white"></span>on-chain.</span>
     
            </h1>
            <p className="mt-3 max-w-md font-regular  text-md text-blue-500 sm:text-lg md:max-w-full">
              Powered by Chainlink Keepers, <span className="text-white">Nous is committed to building decentralised infrastructure to monitor contracts and automate utility.</span>
            </p>
           
            <div className=" sm:flex sm:justify-start sm:mt-8 mt-8 w-full lg:justify-start">
              <div className=" bottom-8">
                <a
                  href="#"
                  className="w-2/3 flex items-center uppercase justify-center px-8 border border-transparent truncate text-base font-medium  text-blue-500 border-2 hover:border-white hover:border-double border-blue-500 hover:bg-black py-3 px-24 md:py-3 md:text-lg md:px-64"
                >
                  Read THE article
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative w-full h-96 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          
          <div className="absolute inset-0 w-full h-full bg-cyan-400 toobject-cover ">
           <Image
            layout="fill"
            objectFit="cover"
            src={chainlink}
            alt=""
          /> 
          </div>
        </div>
      </main>
   
  )
}
