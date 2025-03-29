import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Products | Carol\'s Juice',
  description: 'Explore our range of fresh, natural juices made from locally-sourced Ugandan fruits.',
};

const juices = [
  {
    id: 1,
    name: 'Passion Fruit Paradise',
    description: 'Sweet and tangy passion fruit juice made from hand-picked Ugandan passion fruits.',
    longDescription: "Our passion fruit juice is a customer favorite! Made from the finest Ugandan passion fruits, known for their exceptional flavor. Each bottle contains the juice of approximately 15-20 passion fruits, giving it an intense, tropical taste that's both sweet and tangy.",
    price: '5,000 UGX',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    benefits: ['High in Vitamin C', 'Rich in antioxidants', 'Aids digestion', 'Boosts immunity'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/PassionFruitParadise.jpg'
  },
  {
    id: 2,
    name: 'Pineapple Bliss',
    description: 'Refreshing pineapple juice squeezed from the juiciest pineapples grown in Uganda.',
    longDescription: "Our Pineapple Bliss juice is made from sweet, sun-ripened pineapples grown in Uganda's fertile central region. The pineapples are hand-selected at peak ripeness, ensuring a perfect balance of sweetness and refreshing tropical flavor in every sip.",
    price: '4,500 UGX',
    color: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    benefits: ['Contains bromelain for digestion', 'Rich in manganese', 'Good source of vitamin C', 'Hydrating'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/PineappleBliss.jpg'
  },
  {
    id: 3,
    name: 'Mango Tango',
    description: 'Sweet and smooth mango juice made from ripe, organic Ugandan mangoes.',
    longDescription: 'Mango Tango is a tropical delight made from the sweetest Ugandan mangoes. We select only fully ripe mangoes for the perfect natural sweetness. Our gentle processing preserves the smooth texture and rich flavor that makes mango juice so beloved.',
    price: '5,000 UGX',
    color: 'bg-orange-100',
    textColor: 'text-orange-700',
    benefits: ['High in vitamin A', 'Good source of fiber', 'Contains antioxidants', 'Rich in potassium'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/MangoTango.jpg'
  },
  {
    id: 4,
    name: 'Watermelon Refresh',
    description: 'Cool and hydrating watermelon juice, perfect for hot Ugandan days.',
    longDescription: "Our Watermelon Refresh is the ultimate thirst quencher. Made from locally grown watermelons at the peak of ripeness, this juice is naturally sweet, incredibly hydrating, and perfect for Uganda's warm climate. A refreshing treat any time of day.",
    price: '4,000 UGX',
    color: 'bg-red-100',
    textColor: 'text-red-600',
    benefits: ['Hydrating', 'Contains lycopene', 'Low in calories', 'Good source of vitamins A and C'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/WatermelonRefresh.jpg'
  },
  {
    id: 5,
    name: 'Orange Sunrise',
    description: 'Bright, zesty orange juice packed with vitamin C and sunshine.',
    longDescription: 'Our Orange Sunrise juice is made from sweet, juicy oranges grown in Uganda. Each morning, we squeeze fresh oranges to capture that perfect balance of sweetness and tanginess. A glass of our orange juice is like sunshine in a bottle!',
    price: '4,500 UGX',
    color: 'bg-orange-50',
    textColor: 'text-orange-600',
    benefits: ['High in vitamin C', 'Supports immune function', 'Contains folate', 'Good source of potassium'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/OrangeSunrise.jpg'
  },
  {
    id: 6,
    name: 'Avocado Smoothie',
    description: 'Creamy, nutritious avocado smoothie with a hint of sweetness.',
    longDescription: 'Our Avocado Smoothie combines the rich creaminess of ripe Ugandan avocados with a touch of natural sweetness. This nutritional powerhouse is filling, satisfying, and perfect for a quick meal or post-workout recovery.',
    price: '6,000 UGX',
    color: 'bg-green-100',
    textColor: 'text-green-700',
    benefits: ['High in healthy fats', 'Good source of protein', 'Contains essential vitamins', 'Filling and satisfying'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/AvocadoSmoothie.jpg'
  },
  {
    id: 7,
    name: 'Pineapple-Ginger Zing',
    description: 'A zesty blend of pineapple and ginger for an energizing kick.',
    longDescription: 'Our Pineapple-Ginger Zing combines sweet pineapple juice with fresh ginger for a refreshing drink with a spicy kick. The powerful antioxidants from both ingredients make this a popular choice for those looking to support their wellness.',
    price: '5,500 UGX',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    benefits: ['Aids digestion', 'Anti-inflammatory properties', 'Energizing', 'Supports immune system'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/PineappleGingerZing.jpg'
  },
  {
    id: 8,
    name: 'Berry Blast',
    description: 'A mix of local berries bursting with flavor and antioxidants.',
    longDescription: 'Our Berry Blast is a delicious combination of locally grown berries, packed with antioxidants and natural sweetness. This vibrant, purple juice is as nutritious as it is delicious, making it a favorite among health-conscious customers.',
    price: '6,000 UGX',
    color: 'bg-purple-100',
    textColor: 'text-purple-700',
    benefits: ['High in antioxidants', 'Rich in vitamin C', 'Supports brain health', 'Anti-inflammatory properties'],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/BerryBlast.jpg'
  },
];

export default function ProductsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-orange-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Fresh Juices</h1>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Explore our range of delicious, fresh juices made from locally-sourced Ugandan fruits.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All Juices</h2>
            <p className="mt-4 text-lg text-gray-600">
              Each bottle is packed with pure fruit goodness and no additives.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {juices.map((juice) => (
              <Card key={juice.id} className={`${juice.color} overflow-hidden transition-all hover:shadow-lg`}>
                <CardHeader>
                  <CardTitle className={`${juice.textColor}`}>{juice.name}</CardTitle>
                  <CardDescription>{juice.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 rounded bg-white/50 flex items-center justify-center p-4 relative">
                    <Image 
                      src={juice.image} 
                      alt={juice.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-4 text-sm text-gray-700">{juice.description}</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Benefits:</h4>
                    <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                      {juice.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Available Sizes:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {juice.sizes.map((size) => (
                        <span key={size} className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-gray-700 border border-gray-200">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/products/${juice.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="py-16 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to Order</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Getting our fresh juices is easy! You can order through phone, email, or visit our location.
            </p>

            <div className="mt-10 max-w-xl mx-auto">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">Retail Orders</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Visit our shop in Kampala or call us to place your order for personal consumption.
                  </p>
                  <p className="mt-4 text-sm font-medium text-gray-900">+256 785 015 959</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">Wholesale Orders</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    For cafés, restaurants, and events, email us for wholesale pricing and delivery options.
                  </p>
                  <p className="mt-4 text-sm font-medium text-gray-900">wholesalecarolsjuice@gmail.com</p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Us to Order</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}