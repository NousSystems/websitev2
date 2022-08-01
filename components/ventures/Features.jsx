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
import rewards from '../../public/images/award.gif'
import sunrise from '../../public/images/sunrise.gif'
import tokens from '../../public/images/money-flow.gif'


const products = [
  {
    id: 1,
    name: 'Rewards',
    price: "Every project offering a Venture NFT must provide rewards for their investors. Visit a project's listing page to see what rewards they are offering.",
    rating: 5,
    reviewCount: 38,
    imageSrc: rewards,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Early Access',
    price: 'Holders of Venture NFTs will be able to access premium features, future rewards and other opportunities from a project prior to public access.',
    rating: 5,
    reviewCount: 18,
    imageSrc: sunrise,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Future tokens',
    price: 'Project tokens will be distributed to holders of Venture NFTs when a project token is launched.',
    rating: 5,
    reviewCount: 14,
    imageSrc: tokens,
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
      
    <div className="bg-green-500 flex flex-col sm:flex-row">
        <div className="max-w-7xl sm:w-1/3 sm:flex mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-left ">
          
          <p className="mt-1  sm:ml-4 text-5xl font-extrabold uppercase  text-green-600 sm:text-5xl sm:tracking-tight lg:text-7xl">
            Perks
          </p>
          <p className="mt-1  sm:ml-4 text-5xl font-extrabold uppercase  text-white sm:text-5xl sm:tracking-tight lg:text-7xl">
            Perks
          </p>
          <p className="mt-1 sm:ml-4 text-5xl font-extrabold uppercase  text-green-600 sm:text-5xl sm:tracking-tight lg:text-7xl">
            Perks
          </p>
          <p className="mt-1   sm:ml-4 text-5xl font-extrabold uppercase  text-green-600 sm:text-5xl sm:tracking-tight lg:text-7xl">
            Perks
          </p>
          <p className="mt-1  sm:ml-4 text-5xl font-extrabold uppercase  text-green-600 sm:text-5xl sm:tracking-tight lg:text-7xl">
            Perks
          </p>
          
        </div>
      </div>
      <div className="w-full flex overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px  bg-white grid grid-cols-1 sm:grid-cols-3 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group pt-8 sm:pt-28 relative px-8 ">
              <div className="overflow-hidden  bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
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
                <h3 className="text-2xl uppercase font-semibold text-green-500">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <p className="mt-4 mb-8 text-md font-regular text-black">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
