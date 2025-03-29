import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductionProcess } from '@/components/production-process';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About | Carol\'s Juice',
  description: 'Learn about Carol\'s Juice, our story, mission, and commitment to quality fresh juice in Uganda.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-orange-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Carol's Juice</h1>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Our story, mission, and commitment to bringing the best fresh juices to Uganda.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Carol's Juice was founded in 2021 by Carol, a passionate advocate for healthy living and supporter of local agriculture. What started as a small juice stand in Kampala has grown into a beloved brand known throughout Uganda.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Carol's passion for fresh juice began in her childhood, where she grew up surrounded by fruit trees on her family's farm. She believed that everyone should have access to delicious, nutritious juices made from Uganda's abundant fruits.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Today, Carol's Juice works with local farmers across Uganda to source the best fruits, supporting local communities while delivering outstanding quality to our customers.
              </p>
            </div>
            <div className="h-[400px] relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Carol.jpg"
                alt="Carol, founder of Carol's Juice"
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission & Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Carol's Juice, we're driven by a commitment to health, quality, and community.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  name: 'Health First',
                  description: "We believe in making nutrition delicious. Our juices provide essential vitamins and nutrients in a form that's enjoyable and accessible."
                },
                {
                  name: 'Quality Without Compromise',
                  description: 'From the selection of our fruits to our production process, we maintain the highest standards to ensure every bottle of juice is perfect.'
                },
                {
                  name: 'Supporting Local',
                  description: 'We partner with Ugandan farmers to source our fruits, contributing to local economies and reducing our environmental footprint.'
                },
                {
                  name: 'Sustainability',
                  description: "We're committed to environmentally responsible practices, from farming methods to packaging choices."
                },
              ].map((value) => (
                <div key={value.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <ProductionProcess />

      <Footer />
    </main>
  );
}