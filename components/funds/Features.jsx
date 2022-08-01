/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import tested from '../../public/images/verified.gif'
import performance from '../../public/images/speedometer.gif'
import bank from '../../public/images/bank.gif'

const products = [
  {
    id: 1,
    name: 'TRIED & TESTED',
    price: 'All strategies made available by Nous or our fund partners are backtested and live-tested by Nous Systems prior to their release.',
    rating: 5,
    reviewCount: 38,
    imageSrc: tested,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'REAL-TIME PERFORMANCE',
    price: 'Powered by Chainlink, Nous brings reporting data on-chain. Bringing much needed transparency to a historically opaque industry.',
    rating: 5,
    reviewCount: 18,
    imageSrc: performance,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'INSTITUTIONAL GRADE',
    price: 'Nous democratises institutional exchange access meaning lower fees and higher security for your funds. ',
    rating: 5,
    reviewCount: 14,
    imageSrc: bank,
    imageAlt: 'TODO',
    href: '#',
  },

  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
      
    <div className="bg-white flex-col sm:flex-row flex pt-8">
       
      <div className="w-full  overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200  grid grid-cols-1 sm:grid-cols-3 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group pt-8 sm:pt-28 relative px-8 sm:border-r sm:border-t sm:border-b border-gray-200">
              <div className="overflow-hidden  aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <div className=" object-center object-contain">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={120}
                  width={120}
                />
                </div>
              </div>
              <div className="pt-4 pb-4 text-left">
                <h3 className="text-2xl uppercase font-semibold text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <p className="mt-4 mb-8 text-lg font-regular text-neutral-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl sm:w-1/3  mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left ">
          
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold uppercase  text-neutral-200 sm:text-5xl sm:tracking-tight lg:text-7xl">
            FEATURES
          </p>
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold uppercase  text-neutral-200 sm:text-5xl sm:tracking-tight lg:text-7xl">
            FEATURES
          </p>
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold uppercase  text-neutral-200 sm:text-5xl sm:tracking-tight lg:text-7xl">
            FEATURES
          </p>
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold uppercase  text-purple-500 sm:text-5xl sm:tracking-tight lg:text-7xl">
            FEATURES
          </p>
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold uppercase  text-purple-200 sm:text-5xl sm:tracking-tight lg:text-7xl">
            FEATURES
          </p>
          
        </div>
      </div>
    </div>
  )
}
