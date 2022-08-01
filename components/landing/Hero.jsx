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
import hero from '../../public/images/hero.jpg'
import nous from '../../public/images/nous.svg'
import polygon from '../../public/images/polygon.svg'
import bull from '../../public/images/bull.jpg'

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
      href: 'how-it-works',
      icon: ChartBarIcon,
    },
    {
      name: 'Company',
      description: 'Find out more about the team building Nous.',
      href: 'company',
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
    <div className="relative w-full bg-white">
      <Popover className="relative mx-auto bg-white">
      <div className="absolute inset-0  z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex justify-between items-center sm:my-0 my-4 ml-0 sm:ml-4 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">
              
              <div className="relative  h-8 w-28  sm:h-10">
              <Image
                src={navbarlogo}
                alt=""
                layout="fill"
                objectFit="contain"
              />
              </div>
              
            </a>
          </div>
          <div className="-my-2 mr-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900'
                      )}
                    >
                      <span className="uppercase">Invest</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  {/* <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span> */}
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-4xl font-semibold  uppercase text-gray-900">{item.name}</p>
                                    <p className="mt-3 text-md text-gray-500">{item.description}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium uppercase text-teal-500 lg:mt-4">
                                    Learn more <span aria-hidden="true">&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-emerald-500">
                          <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            <h1 className="text-white">
                                Offer a product on the Nous marketplace.
                            </h1>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
              </a> */}
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white inline-flex items-center text-base font-medium hover:text-gray-900 '
                      )}
                    >
                      <span className="uppercase">More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16">
                          {more.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between hover:bg-stone-50"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  {/* <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span> */}
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-4xl font-semibold uppercase text-gray-900">{item.name}</p>
                                    <p className="mt-3 text-md text-gray-500">{item.description}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium uppercase text-teal-500 lg:mt-4">
                                    Learn more <span aria-hidden="true">&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-teal-500">
                          <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            <h1 className="text-white">
                                Offer a product on the Nous marketplace.
                            </h1>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a href="token" className="text-base font-medium text-gray-500 hover:text-gray-900">
                $NOUS
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center uppercase justify-center px-4 py-4  border border-transparent shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-green-500"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className=" shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-left justify-between">
                <div className="relative float-left w-1/4  py-2">
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    src={navbarlogo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md py-4 px-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center py-3 rounded-lg hover:bg-gray-50"
                      >
                        {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-black text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div> */}
                        <div className="ml-3 text-2xl font-semibold uppercase text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <a href="#" className="font-medium text-black-600 hover:text-neutral-500">
                      {' '}
                      Browse all products <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 bg-black">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="rounded-md text-xl font-medium text-white">
                  HOW IT WORKS
                </a>

                <a href="#" className="rounded-md text-xl font-medium text-white">
                  COMPANY
                </a>

                <a href="#" className="rounded-md text-xl font-medium text-white">
                  DOCS
                </a>

                
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent uppercase text-base font-medium text-white bg-green-500 hover:bg-green-600"
                >
                  LAUNCH APP
                </a>
                <p className="mt-6 text-center text-base font-medium text-white">
                  Launch a product?{' '}
                  <a href="#" className="text-green-500 font-semibold  hover:text-green-600">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

      <main className="sm:relative relative sm:ml-20  mx-auto ">
        <div className=" w-full h-screen bg-white  text-left lg:text-left">
                 
          <div className="px-4 py-8 lg:w-1/2 sm:px-8 ">
            <div className="flex hidden sm:block float-left sm:float-right w-max mr-24 sm:mr-0 sm:ml-24 top-0 mb-6  px-2  py-2">
                {/* <h1 className="flex my-auto font-semibold mr-4  text-black text-3xl " >Built on Polygon</h1> */}
                <Image height={60} width={60} src={nous}/>
            </div>
            <div className="flex  w-max  top-0 mb-6   py-2">
                <h1 className="flex my-auto font-semibold uppercase mr-1 text-black text-xl " ><span className="text-neutral-500 mr-1">LIVE on </span> Polygon</h1> 
                <div className="ml-2 mr-1 mt-2 ">
                <Image className="" height={30} width={30} src={polygon}/>
                </div>
                
            </div>
            <h1 className="tracking-tighter  leading-[5rem] sm:leading-[6.5rem] font-semibold text-black text-7xl sm:text-9xl mb-8">
              <span className="block xl:inline truncate  ">A new way</span>{' '}
              <span className="block  text-green-500 ">to invest.</span>
              <span className="inline  "></span>
     
            </h1>
            <p className="mt-3 w-5/6 font-regular  text-xl text-black  sm:text-2xl md:mt-5 md:max-w-lg">
              Browse, buy and trade <span className="text-green-500">digital investment contracts.</span> Nous is the world&apos;s first investment marketplace, built on web3.
            </p>
           
            <div className=" sm:flex sm:justify-start mt-24 sm:mt-40 mb-8 lg:justify-start">
              <div className="">
                <a
                  href="#"
                  className="w-full flex items-center uppercase justify-center px-10 py-4 border border-transparent text-base font-medium  text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3  sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center uppercase justify-center px-10 py-4 border border-transparent text-base font-medium  text-black border-1 border-black hover:bg-neutral-800 md:py-4 md:text-lg md:px-10"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block relative w-full h-96 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          
          <div className="absolute inset-0 w-full h-full object-contain ">
          <Image
            layout="fill"
            objectFit="cover"
            src={bull}
            alt=""
          />
          </div>
        </div>
      </main>
    </div>
  )
}
