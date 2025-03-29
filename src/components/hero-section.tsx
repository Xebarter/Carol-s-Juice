import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-100 to-white" />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        {/* Left Section - Text */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="max-w-lg text-4xl font-bold tracking-tight text-orange-600 sm:text-6xl">
            Fresh Ugandan Juice Made With Love
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Carol&apos;s Juice, we handcraft the freshest, most delicious juices using locally-sourced fruits from Uganda&apos;s fertile lands. Every sip is a taste of pure, natural goodness.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/products">Explore Our Juices</Link>
            </Button>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more about us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative h-80 sm:h-[500px] lg:h-[600px] lg:w-[450px] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/juice.jpg" // ✅ Correct way to reference public images
              alt="Fresh juice"
              width={450} // Adjust as needed
              height={600} // Adjust as needed
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
