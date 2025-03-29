import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const juices = [
  {
    id: 1,
    name: 'PassionFruitParadise',
    description: 'Sweet and tangy passion fruit juice made from hand-picked Ugandan passion fruits.',
    price: '5,000 UGX',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-800',
  },
  {
    id: 2,
    name: 'PineappleBliss',
    description: 'Refreshing pineapple juice squeezed from the juiciest pineapples grown in Uganda.',
    price: '4,500 UGX',
    color: 'bg-yellow-50',
    textColor: 'text-yellow-600',
  },
  {
    id: 3,
    name: 'MangoTango',
    description: 'Sweet and smooth mango juice made from ripe, organic Ugandan mangoes.',
    price: '5,000 UGX',
    color: 'bg-orange-100',
    textColor: 'text-orange-700',
  },
  {
    id: 4,
    name: 'WatermelonRefresh',
    description: 'Cool and hydrating watermelon juice, perfect for hot Ugandan days.',
    price: '4,000 UGX',
    color: 'bg-red-100',
    textColor: 'text-red-600',
  },
];

export function FeaturedJuices() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Featured Juices</h2>
          <p className="mt-4 text-lg text-gray-600">
            Handcrafted with care using the finest Ugandan fruits, our juices are packed with flavor and nutrition.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {juices.map((juice) => (
            <Card key={juice.id} className={`${juice.color} overflow-hidden transition-all hover:shadow-lg`}>
              <CardHeader>
                <CardTitle className={`${juice.textColor}`}>{juice.name.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
                <CardDescription>{juice.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 rounded bg-white/50 flex items-center justify-center p-4">
                  <Image
                    src={`/images/${juice.name}.jpg`} // Dynamically loading the image
                    alt={juice.name}
                    width={200}
                    height={150}
                    objectFit="contain"
                    className="rounded-md shadow-md"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-700">{juice.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/products/${juice.id}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/products">View All Juices</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
