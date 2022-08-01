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
import nft from '../../public/images/credit.gif'
import report from '../../public/images/line-chart.gif'
import rewards from '../../public/images/payment.gif'
import trade from '../../public/images/exchange.gif'
const products = [
  {
    id: 1,
    name: 'OWN YOUR INVESTMENT AS AN NFT',
    price: 'NOUS allows investors to mint investment contracts as NFTs - creating an immutable proof of ownership over an investment and its terms.',
    rating: 5,
    reviewCount: 38,
    imageSrc: nft,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'REAL-TIME REPORTING',
    price: 'Monitor the performance of your investments in real-time. Powered by Chainlink, NOUS leverages the latest in on-chain infrastructure to provide decentralised reporting on investments and their performance.',
    rating: 5,
    reviewCount: 18,
    imageSrc: report,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'WEEKLY REWARDS',
    price: 'Select a Rewards Period when you mint and receive dividends on your investments, paid out in USDT/USDC.',
    rating: 5,
    reviewCount: 14,
    imageSrc: rewards,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'TRADE YOUR INVESTMENTS',
    price: 'Buy and sell NFT investments on the NOUS Market to access liquidity and profit from secondary sales.',
    rating: 4,
    reviewCount: 21,
    imageSrc: trade,
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
      
    <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left">
          
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold uppercase  text-black sm:text-5xl sm:tracking-tight lg:text-7xl">
            A Better Investing Experience for Investors and Providers.
          </p>
          
        </div>
      </div>
      <div className="max-w-7xl mb-24 mx-auto overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px  grid grid-cols-1 sm:grid-cols-2 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative px-8  border-gray-200">
              <div className="overflow-hidden  bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <div className="object-center object-contain">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={120}
                  width={120}
                />
                </div>
              </div>
              <div className="pt-8 pb-4 text-left">
                <h3 className="text-4xl uppercase font-semibold text-gray-900">
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
    </div>
  )
}
