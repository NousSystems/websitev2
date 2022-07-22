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

const products = [
  {
    id: 1,
    name: 'OWN YOUR INVESTMENT',
    price: 'All strategies made available by Nous or our fund partners are backtested and live-tested by Nous Systems prior to their release.',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://assets.website-files.com/62829b28e6300b34ff739f02/62ab4d5bcac192d04c00cdd0_Group%20427322190.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'ACCESS FINANCIAL SERVICES',
    price: 'Powered by Chainlink, Nous brings reporting data on-chain. Bringing much needed transparency to a historically opaque industry.',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://assets.website-files.com/62829b28e6300b34ff739f02/62ab4d5a172ebd0dd1175906_Group.png',
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
       <div className="max-w-7xl w-full flex mx-auto   px-4  sm:px-6 lg:px-8">
        <div className="text-left py-8  ">
          
          <p className=" font-medium text-5xl uppercase  text-black  sm:tracking-tight lg:text-5xl">
            Story
          </p>
          
          
        </div>
      </div>
      <div className="w-full flex bg-green-500 overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l bg-green-500 border-gray-200 grid grid-cols-1 sm:grid-cols-2 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative border-r bg-white border-b border-white">
              
              <div className="pt-10 mx-8 pb-4 text-left">
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
      
      
    </div>
    
  )
}
