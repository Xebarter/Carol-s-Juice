import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function ContactCTA() {
  return (
    <section className="py-16 bg-orange-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Want Fresh Juice Delivered?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you need fresh juice for a special event, your café, or regular personal consumption,
                  we've got you covered. Contact us today to discuss your juice needs!
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-x-4 items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-gray-700">+256 785 015 959</div>
                  </div>
                  <div className="flex gap-x-4 items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-gray-700">infocarolsjuice@gmail.com</div>
                  </div>
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <div className="text-sm font-semibold leading-6 text-gray-900">
                    We'll respond within 24 hours <span aria-hidden="true">→</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block h-full bg-orange-200 relative">
              <Image
                src="/images/ContactImage.jpg"
                alt="Fresh juice delivery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}