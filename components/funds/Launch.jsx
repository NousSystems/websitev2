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
    name: 'DEMOCRATISE YOUR STRATEGIES',
    price: 'Nous intends to bring investors and asset management funds closer together.',
    description: 'Funds can offer their products and services on a transparent and decentralised marketplace.',
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
      
    <div className="bg-black flex ">
        <div className="max-w-7xl bg-black w-full flex mx-auto py-16 sm:py-24 ">
        <div className="text-left relative bottom-12 ">
          
          <p className="mt-1 ml-8 uppercase sm:ml-8 text-4xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-7xl">
            Launch a <span className="block text-purple-500"> fund.</span>
          </p>
          <div className=" justify-center p-8 w-full ">
              <div className="w-full">
                <a
                  href="#"
                  className="w-full flex items-center justify-center mt-4 py-4 border border-transparent text-base font-medium bg-white text-black   md:py-4 md:text-lg md:px-10"
                >
                  ONBOARDING FORM
                </a>
              </div>
              
            </div>
        </div>
      </div>
      <div className="w-full flex overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className=" bg-black grid grid-cols-1 sm:grid-cols-1 sm:mx-0 ">
          {products.map((product) => (
            <div key={product.id} className="group relative px-8 grid grid-cols-2 ">
              
              <div className="pt-40 text-left">
                <h3 className="text-4xl mr-10 uppercase font-semibold text-white">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                
              </div>
              <div className="overflow-hidden aspect-w-1 aspect-h-1 group-hover:opacity-75">
                {/* <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                /> */}
                <p className="pt-40 text-lg font-regular text-white">{product.price}</p>
                <p className="mt-6 mb-8 text-lg font-regular text-white">{product.description}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}
