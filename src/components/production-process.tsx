import { CheckCircle } from 'lucide-react';

const steps = [
  {
    name: 'Sourcing Local Fruits',
    description:
      'We work directly with local Ugandan farmers to source the freshest, ripest fruits for our juices.',
  },
  {
    name: 'Careful Selection',
    description:
      'Each fruit is hand-selected for quality, ensuring only the best go into our juices.',
  },
  {
    name: 'Washing & Cleaning',
    description:
      'All fruits are thoroughly washed and cleaned to ensure the highest levels of hygiene.',
  },
  {
    name: 'Cold Pressing',
    description:
      'We use a gentle cold-press method to extract the maximum flavor and nutrients from the fruits.',
  },
  {
    name: 'No Additives',
    description:
      'Our juices contain no added sugar, preservatives, or artificial colors - just pure fruit goodness.',
  },
  {
    name: 'Fresh Delivery',
    description:
      'Juices are bottled and delivered fresh to ensure you get the best taste and nutritional value.',
  },
];

export function ProductionProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Pure Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Make Our Fresh Juices
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Carol's Juice, we take pride in our careful, natural juice-making process.
            From farm to bottle, quality is our priority.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircle className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
