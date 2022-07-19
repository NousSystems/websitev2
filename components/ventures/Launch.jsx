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
import { SparklesIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const products = [
  {
    id: 1,
    name: 'SUPPORTING BUILDERS WORLDWIDE',
    price: 'Are you a startup founder or just have an idea for the next big thing?',
    description: 'Nous Ventures helps founders raise the capital they need from a decentralised community of angel investors.',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
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
      
    <div className="bg-white flex ">
        <div className="max-w-7xl bg-white w-full flex mx-auto py-16 sm:py-24 ">
        <div className="text-left relative bottom-12 ">
          
          <p className="mt-1 ml-8 uppercase sm:ml-8 text-4xl font-bold text-black sm:text-5xl sm:tracking-tight lg:text-7xl">
            Launch your <span className="block text-green-500"> venture.</span>
          </p>
          
        </div>
      </div>
      <div className="w-full flex overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className=" bg-green-500 grid grid-cols-1 sm:grid-cols-1 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative px-8 grid grid-cols-2 ">
              
              <div className="pt-40 text-left">
                <h3 className="text-4xl uppercase font-semibold text-white">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                
              </div>
              <div className="overflow-hidden  bg-green-500 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                {/* <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                /> */}
                <p className="pt-40 text-md font-regular text-neutral-100">{product.price}</p>
                <p className="mt-2 mb-8 text-md font-regular text-neutral-100">{product.description}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}
