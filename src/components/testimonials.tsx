import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "Carol's Juice has the best passion fruit juice I've ever tasted! It's so fresh and natural, you can really taste the difference.",
    author: "Sarah Namuli",
    location: "Kampala",
  },
  {
    id: 2,
    content: "I order the mango juice every week for my family. The kids love it and I feel good knowing they're drinking something healthy and locally made.",
    author: "David Mukasa",
    location: "Entebbe",
  },
  {
    id: 3,
    content: "As a café owner, I only serve Carol's Juice to my customers. The quality is consistent and my customers keep coming back for more!",
    author: "Janet Asiimwe",
    location: "Jinja",
  },
  {
    id: 4,
    content: "The watermelon juice is so refreshing, especially during the hot season. I love that it's made fresh with no preservatives.",
    author: "Michael Okello",
    location: "Gulu",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied customers!
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full bg-white border-none shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-700">"{testimonial.content}"</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative" />
              <CarouselNext className="relative" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
