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
import connect from '../../public/images/wallet.gif'
import browse from '../../public/images/book.gif'
import select from '../../public/images/infography.gif'
import mint from '../../public/images/diamond.gif'
const products = [
  {
    id: 1,
    name: '1. CONNECT YOUR WALLET',
    price: "Exposure to crypto assets without the risk. Nous A1 arbitrages with stablecoins, exploiting funding rate dislocation across all major exchanges.",
    rating: 5,
    reviewCount: 38,
    imageSrc: connect,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: '2. BROWSE INVESTMENTS',
    price: 'Nous A1 has been backtested over 2 years, undergone live testing and risk analysis. Download the full product prospectus below.',
    rating: 5,
    reviewCount: 18,
    imageSrc: browse,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: '3. SELECT YOUR TERMS',
    price: "Exposure to crypto assets without the risk. Nous A1 arbitrages with stablecoins, exploiting funding rate dislocation across all major exchanges.",
    rating: 5,
    reviewCount: 38,
    imageSrc: select,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: '4. MINT YOUR NFT',
    price: 'Nous A1 has been backtested over 2 years, undergone live testing and risk analysis. Download the full product prospectus below.',
    rating: 5,
    reviewCount: 18,
    imageSrc: mint,
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
        <div className=" mx-auto bg-black py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-left">
          
          <p className="mt-36 ml-4 uppercase sm:ml-0 text-5xl font-semibold tracking-tighter  text-white sm:text-5xl sm:tracking-tight lg:text-8xl">
            A nous way <span className="text-white block sm:inline ">to invest.</span>
          </p>
          
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px  grid grid-cols-1 sm:grid-cols-4 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group border-r border-b relative px-8 ">
              <div className="overflow-hidden pt-4 bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
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
                <h3 className="text-2xl uppercase font-semibold text-black">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <p className="mt-4  text-md font-regular text-neutral-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
