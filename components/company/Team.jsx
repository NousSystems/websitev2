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
import tom from '../../public/images/Tom.jpg'
import mo from '../../public/images/Mo.jpg'
import kristijan from '../../public/images/Kris.jpg'
import manuel from '../../public/images/Manuel.jpg'
import henry from '../../public/images/Henry.jpg'
import ollie from '../../public/images/Ollie.jpg'
import rinor from '../../public/images/Rinor.jpg'
import ylli from '../../public/images/Ylli.jpg'
const products = [
  {
    id: 1,
    name: 'Thomas Stuart',
    price: 'Founder, CEO',
    rating: 5,
    reviewCount: 38,
    imageSrc: tom,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Muhamed Selmani',
    price: 'Founder, CIO',
    rating: 5,
    reviewCount: 18,
    imageSrc: mo,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Kristijan Zivcec',
    price: 'Founder, CTO',
    rating: 5,
    reviewCount: 18,
    imageSrc: kristijan,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Manuel Morales',
    price: 'CSO',
    rating: 5,
    reviewCount: 18,
    imageSrc: manuel,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'Ollie Francis',
    price: 'Smart Contract Developer',
    rating: 5,
    reviewCount: 18,
    imageSrc: ollie,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'Henry Wilson',
    price: 'Communications',
    rating: 5,
    reviewCount: 18,
    imageSrc: henry,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 7,
    name: 'Ylli Bilcaj',
    price: 'Community',
    rating: 5,
    reviewCount: 18,
    imageSrc: ylli,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 8,
    name: 'Rinor Restelica',
    price: 'Growth',
    rating: 5,
    reviewCount: 18,
    imageSrc: rinor,
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 9,
    name: 'Edon Hoxha',
    price: 'Design',
    rating: 5,
    reviewCount: 18,
    imageSrc: tom,
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
      
    <div className="bg-white border-t flex flex-col sm:flex-row">
       <div className="max-w-7xl w-1/4 sm:mx-auto  px-4  sm:px-6 lg:px-8">
        <div className="text-left py-8  ">
          
          <p className=" font-medium uppercase text-5xl text-black  sm:tracking-tight lg:text-5xl">
            Team
          </p>
          
          
        </div>
      </div> 
      <div className="w-full flex bg-black overflow-hidden">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l w-full bg-white border-gray-200 grid grid-cols-2 sm:grid-cols-4 sm:mx-0 ">
           {products.map((product) => (
            <div key={product.id} className="group relative border-r bg-white border-b border-white">
              <div className="overflow-hidden h-48  object-contain py-8 bg-white aspect-w-1 aspect-h-1 group-hover:opacity-10">
                  
              <div className="w-full h-full  object-center ">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  layout="fill"
                  objectFit="cover"
                />
                </div>  
                
              </div>
              <div className="pt-10 mx-8 pb-4 text-left">
                  
                <h3 className="text-2xl  font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <p className="mt-2 mb-8 text-lg font-regular text-neutral-500">{product.price}</p>
              </div>
            </div>
          ))} 
          
        </div>
      </div>
      
      
    </div>
    
  )
}
