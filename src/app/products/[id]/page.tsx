// app/products/[id]/page.tsx
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const juices = [
  {
    id: 1,
    name: 'Passion Fruit Paradise',
    description: 'Sweet and tangy passion fruit juice made from hand-picked Ugandan passion fruits.',
    longDescription: "Our Passion Fruit Paradise is crafted from the finest Ugandan passion fruits, known for their vibrant flavor and aromatic qualities. Each bottle contains the essence of approximately 15-20 passion fruits, carefully extracted to preserve their natural sweetness and tangy punch. Grown in the fertile volcanic soils of Western Uganda, our passion fruits are harvested at peak ripeness for maximum flavor and nutritional value. This juice is a perfect balance of sweet and tart, making it an excellent choice for breakfast or as a refreshing afternoon pick-me-up.",
    price: '5,000 UGX',
    color: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    benefits: [
      'High in Vitamin C (30% of daily value per serving)',
      'Rich in antioxidants like carotenoids and polyphenols',
      'Contains digestive enzymes that aid in nutrient absorption',
      'Natural source of iron and potassium',
      'Boosts immunity with high vitamin A content'
    ],
    sizes: ['250ml', '500ml', '1 Liter'],
    image: '/images/PassionFruitParadise.jpg',
    nutrition: {
      calories: '120 kcal',
      sugar: '24g (natural)',
      ingredients: '100% pure passion fruit juice, no additives',
      allergens: 'None',
      shelfLife: '3 days refrigerated'
    }
  },
  // ... (include all other juices with similar detailed structure)
];

export default function JuiceDetailPage({ params }: { params: { id: string } }) {
  const juice = juices.find(j => j.id.toString() === params.id);

  if (!juice) {
    return (
      <main>
        <Header />
        <div className="max-w-7xl mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Juice Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">The requested juice could not be found in our collection.</p>
          <Button className="mt-6" asChild>
            <Link href="/products">Browse All Juices</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />

      {/* Product Hero Section */}
      <div className={`${juice.color} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <div className="flex items-center">
                      <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                        Home
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <Link href="/products" className="ml-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                        Products
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-500">{juice.name}</span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className={`mt-4 text-4xl font-bold tracking-tight ${juice.textColor}`}>{juice.name}</h1>
              <p className="mt-2 text-lg text-gray-700">{juice.description}</p>
            </div>
            <div className="hidden md:block">
              <span className="text-3xl font-bold text-gray-900">{juice.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Image */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
              <Image
                src={juice.image}
                alt={juice.name}
                width={800}
                height={800}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>

            {/* Product details */}
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
                <span className="text-2xl font-bold text-gray-900 md:hidden">{juice.price}</span>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-base text-gray-700">{juice.longDescription}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Health Benefits</h3>
                <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
                  {juice.benefits.map((benefit, index) => (
                    <li key={index} className="text-base">{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Available Sizes</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {juice.sizes.map((size) => (
                    <span 
                      key={size} 
                      className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Nutritional Information</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Calories</p>
                    <p className="text-base font-medium text-gray-900">{juice.nutrition.calories}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sugar Content</p>
                    <p className="text-base font-medium text-gray-900">{juice.nutrition.sugar}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ingredients</p>
                    <p className="text-base font-medium text-gray-900">{juice.nutrition.ingredients}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Allergens</p>
                    <p className="text-base font-medium text-gray-900">{juice.nutrition.allergens}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <Button className="flex-1 py-6 text-lg" asChild>
                  <Link href="/contact">Order Now</Link>
                </Button>
                <Button variant="outline" className="flex-1 py-6 text-lg" asChild>
                  <Link href="/products">Back to Products</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900">About Our Juices</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Production Process</h3>
                <p className="mt-2 text-base text-gray-600">
                  All our juices are cold-pressed to preserve maximum nutrients and flavor. We hand-select fruits at peak ripeness, wash them thoroughly with purified water, and process them within hours of harvesting. Our juices are never heated or pasteurized, maintaining all the natural enzymes and vitamins.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Storage & Serving</h3>
                <p className="mt-2 text-base text-gray-600">
                  For best quality, keep refrigerated at all times and consume within {juice.nutrition.shelfLife}. Shake well before serving. Serve chilled over ice or use in smoothies and cocktails. Our juices are perfect for breakfast, post-workout recovery, or as a refreshing afternoon drink.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-bold">S</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">Sarah K.</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  "The {juice.name} is absolutely delicious! I can taste the freshness in every sip. It's become my daily morning ritual."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-bold">J</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">James M.</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  "I love that Carol's Juice uses local fruits. The {juice.name} tastes so authentic and fresh compared to other brands."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="h-10 w-10 rounded-full bg-orange-200 flex items-center justify-center text-orange-800 font-bold">A</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">Amina N.</h4>
                    <div className="flex mt-1">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  "My kids love the {juice.name}! It's reassuring to know they're getting real fruit with no added sugars or preservatives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}