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
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import fixedyield from '../../public/images/growing.gif'
import dailyrewards from '../../public/images/save-money.gif'
import lowerrisk from '../../public/images/handshake.gif'
const products = [
  {
    id: 1,
    name: 'FIXED YIELDS',
    price: 'NOUS allows investors to mint investment contracts as NFTs - creating an immutable proof of ownership over an investment and its terms.',
    rating: 5,
    reviewCount: 38,
    imageSrc: fixedyield,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'LOWER RISK',
    price: 'Monitor the performance of your investments in real-time. Powered by Chainlink, NOUS leverages the latest in on-chain infrastructure to provide decentralised reporting on investments and their performance.',
    rating: 5,
    reviewCount: 18,
    imageSrc: lowerrisk,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'DAILY REWARDS',
    price: 'Select a Rewards Period when you mint and receive dividends on your investments, paid out in USDT/USDC.',
    rating: 5,
    reviewCount: 14,
    imageSrc: dailyrewards,
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
      
    <div className="bg-white flex sm:flex-row flex-col pt-8">
        <div className="max-w-7xl sm:w-1/3 flex sm:mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left ">
          
          <p className="mt-1 ml-4  sm:ml-0 text-5xl font-extrabold uppercase  text-black sm:text-5xl sm:tracking-tight lg:text-7xl">
            Why buy a bond?
          </p>
          
        </div>
      </div>
      <div className="w-full flex overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-1 sm:grid-cols-3 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative px-8 sm:border-r sm:border-b border-gray-200">
              <div className="overflow-hidden   bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <div className=" object-center object-contain">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={100}
                  width={100}
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
                
                <p className="mt-4 mb-8 text-md sm:text-lg font-regular text-neutral-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
