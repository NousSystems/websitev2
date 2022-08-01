/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'EARN WITH',
      price: 'BONDS',
      frequency: '',
      description: 'Bonds are simple investment contracts that given an investor a fixed rate of return. Browse open bond offerings from high-quality projects.',
      features: ['Access a range of fixed yields.', 'Transparent, on-chain enforcement.', 'No performance fees.'],
      cta: 'BROWSE BONDS',
      mostPopular: false,
      color:'#2563eb'
    },
    {
      title: 'INVEST IN',
      price: 'FUNDS',
      frequency: '',
      description: 'Invest in a managed fund that suits your investment philosophy, from market-neutral to momentum.',
      features: [
        'Access algorithmic trading.',
        'Live reporting.',
        'Real yield generation.'
       
      ],
      cta: 'BROWSE FUNDS',
      mostPopular: true,
      color:'#9333ea'
    },
    {
      title: 'DISCOVER NEW',
      price: 'VENTURES',
      frequency: '',
      description: 'Nous is connecting startups and new projects with crypto investors from around the world.',
      features: [
        'High quality web3, crypto and tech startups.',
        'Real founders, real use cases.',
        'Angel investing made easy.'
      ],
      cta: 'BROWSE VENTURES',
      mostPopular: false,
      color: '#22c55e',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
      <h2 className="text-7xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none tracking-tighter lg:text-8xl">
        Earn, invest, discover.
      </h2>
      <p className="mt-6 max-w-2xl text-2xl text-gray-500">
        Discover a nous world of investment opportunities.
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
          style={{backgroundColor:tier.color}}
            key={tier.title}
            className="relative p-8 border border-white  shadow-2xl flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-neutral-200">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 py-1.5 px-4 bg-black rounded-lg text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  COMING SOON
                </p>
              ) : null}
              <p className="mt-1 flex items-baseline text-white">
                <span className="text-6xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              <p className="mt-6 text-white">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-white" aria-hidden="true" />
                    <span className="ml-3 text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={classNames(
                tier.mostPopular
                  ? 'bg-white text-black hover:bg-neutral-100'
                  : 'bg-black text-white hover:bg-neutral-800',
                'sm:mt-32 mt-8 block w-full py-3 px-6 border border-transparent text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
