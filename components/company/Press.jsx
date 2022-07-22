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
    name: 'Nous integrates Chainlink services on Polygon',
    price: 'Binance News',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://assets.website-files.com/62829b28e6300b34ff739f02/62ab4d5bcac192d04c00cdd0_Group%20427322190.png',
    imageAlt: 'TODO',
    href: 'https://www.binance.com/en/news/top/7103527',
  },
  {
    id: 2,
    name: 'Nous launches decentralised investment platform',
    price: 'Yahoo Finance',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://assets.website-files.com/62829b28e6300b34ff739f02/62ab4d5a172ebd0dd1175906_Group.png',
    imageAlt: 'TODO',
    href: 'https://finance.yahoo.com/news/nous-systems-launches-world-first-172056728.html',
  },
  {
    id: 3,
    name: 'Nous debuts on-chain bond product',
    price: 'IQ Stock',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://assets.website-files.com/62829b28e6300b34ff739f02/62ab4d5bcac192d04c00cdd0_Group%20427322190.png',
    imageAlt: 'TODO',
    href: 'https://www.iqstock.news/n/nous-systems-debuts-nft-investment-platform-chain-bond-offering-3775273/',
  },
 
  

  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        
      <div className="bg-white flex flex-col sm:flex-row border-t ">
         <div className="max-w-7xl w-full flex mx-auto   px-4  sm:px-6 lg:px-8">
          <div className="text-left py-8  ">
            
            <p className=" font-medium uppercase text-5xl  text-black  sm:tracking-tight lg:text-5xl">
              Press
            </p>
            
            
          </div>
        </div>
        <div className="w-full flex bg-white overflow-hidden">
          <h2 className="sr-only">Products</h2>
  
          <div className="-mx-px border-l bg-green-500 border-gray-200 grid grid-rows-1 sm:grid-rows-2 sm:mx-0 ">
            {products.map((product) => (
              <div key={product.id} className="group relative border-r pt-8 pb-8  bg-white border-b border-white">
                
                <div className=" mx-8 pb-4 text-left">
                  <h3 className="text-2xl underline font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  
                  <p className="mt-2 text-md  font-regular text-neutral-500">{product.price}</p>
                </div>
              </div>
            ))} 
            
          </div>
        </div>
        
        
      </div>
      
    )
  }