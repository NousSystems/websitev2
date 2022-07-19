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
    name: 'LOW RISK, STABLE RETURNS',
    price: "Exposure to crypto assets without the risk. Nous A1 arbitrages with stablecoins, exploiting funding rate dislocation across all major exchanges.",
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Extensively tested',
    price: 'Nous A1 has been backtested over 2 years, undergone live testing and risk analysis. Download the full product prospectus below.',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
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
        <div className=" mx-auto bg-white py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-left">
          
          <p className="mt-1 ml-4  sm:ml-0 text-4xl font-extrabold tracking-tighter uppercase text-black sm:text-5xl sm:tracking-tight lg:text-8xl">
            SAY HELLO TO NOUS A1. <span className="text-purple-500 ">ARBITRAGE, DEMOCRATISED.</span>
          </p>
          
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px  grid grid-cols-1 sm:grid-cols-2 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative px-8 ">
              <div className="overflow-hidden  bg-black aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-left">
                <h3 className="text-4xl uppercase font-bold text-purple-500">
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
