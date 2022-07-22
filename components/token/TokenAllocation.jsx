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
import tokenomics from '../../public/images/tokenomics.png'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'TOKEN SALE',
    price: "Exposure to crypto assets without the risk. Nous A1 arbitrages with stablecoins, exploiting funding rate dislocation across all major exchanges.",
    rating: 5,
    reviewCount: 38,
    imageSrc: '',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'TEAM',
    price: 'Nous A1 has been backtested over 2 years, undergone live testing and risk analysis. Download the full product prospectus below.',
    rating: 5,
    reviewCount: 18,
    imageSrc: '',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'MARKETING',
    price: "Exposure to crypto assets without the risk. Nous A1 arbitrages with stablecoins, exploiting funding rate dislocation across all major exchanges.",
    rating: 5,
    reviewCount: 38,
    imageSrc: '',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'LIQUIDITY',
    price: 'Nous A1 has been backtested over 2 years, undergone live testing and risk analysis. Download the full product prospectus below.',
    rating: 5,
    reviewCount: 18,
    imageSrc: '',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'ECOSYSTEM',
    price: 'Nous A1 has been backtested over 2 years, undergone live testing and risk analysis. Download the full product prospectus below.',
    rating: 5,
    reviewCount: 18,
    imageSrc: '',
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
      
    <div className="bg-black">
        <div className="  bg-black pt-16 sm:pt-24 border-b border-green-500 flex flex-col sm:flex-row ">
        <div className="flex bg-blacktext-left">
          
          <p className=" ml-8 mr-8 sm:mt-80  uppercase sm:ml-0 text-5xl font-semibold tracking-tighter  text-white sm:text-5xl sm:tracking-tight lg:text-8xl">
            TOKENOMICS <span className="text-white "></span>
          </p>
          
          
        </div>
        <div className="sm:w-1/2 w-full mt-8 mb-24  bg-white sm:mt-0 flex-1  h-full relative">
        <Image src={tokenomics} layout="responsive" objectFit="contain"/>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px  grid grid-cols-1 sm:grid-cols-4 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group border-r border-b  border-green-500 relative px-8 ">
              <div className="overflow-hidden h-8 bg-black aspect-w-1 aspect-h-1 group-hover:opacity-75">
                {/* <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                /> */}
              </div>
              <div className="sm:pt-10 pb-4 text-left">
                <h3 className="text-4xl uppercase font-semibold text-white">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <p className="mt-4 pb-4 text-md font-regular text-neutral-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
