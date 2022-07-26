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
import { SparklesIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import launch from '../../public/images/checklist.gif'
const products = [
  {
    id: 1,
    name: 'APPLY TO NOUS',
    price: 'Do you run a web3 business, crypto project or company in need of funding? Find out how Bonds can help you take your business to the next level.',
    rating: 5,
    reviewCount: 38,
    imageSrc: launch,
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
      
    <div className="bg-white flex flex-col sm:flex-row">
        <div className="max-w-7xl bg-green-500 w-full flex mx-auto py-16 sm:py-24 ">
        <div className="text-left ">
          
          <p className="mt-1 ml-8  sm:ml-8 text-5xl font-semibold text-white sm:text-5xl tracking-tighter lg:text-7xl">
            Want to <span className="block">offer a bond?</span>
          </p>
          
        </div>
      </div>
      <div className="w-full flex overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className=" border-l border-gray-200 grid grid-cols-1 sm:grid-cols-1 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative px-8 grid grid-cols-2 border-r border-b border-gray-200">
              
              <div className="pt-8 sm:pt-40 text-left">
                <h3 className="text-2xl uppercase font-semibold text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute  inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <p className="mt-4 mb-8 tex-sm sm:text-lg font-regular text-neutral-500">{product.price}</p>
              </div>
              <div className="overflow-hidden  bg-white aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <div className="object-center object-contain absolute bottom-8 right-8">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height={120}
                  width={120}
                />
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}
