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
    name: 'Rewards',
    price: "Every project offering a Venture NFT must provide rewards for their investors. Visit a project's listing page to see what rewards they are offering.",
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Early Access',
    price: 'Holders of Venture NFTs will be able to access premium features, future rewards and other opportunities from a project prior to public access.',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Future tokens',
    price: 'Project tokens will be distributed to holders of Venture NFTs when a project token is launched.',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
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
        <div className="max-w-7xl w-1/3 sm:flex mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
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
            <div key={product.id} className="group relative px-8 ">
              <div className="overflow-hidden  bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-left">
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
