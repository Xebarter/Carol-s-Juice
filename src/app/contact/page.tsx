'use client'; // Add this at the top of the file

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mqapdlaz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-orange-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Have questions, feedback, or want to place an order? Reach out to us - we'd love to hear from you!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Send Us a Message</h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1" 
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1" 
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1" 
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1" 
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-md">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <div>
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
              <p className="mt-4 text-lg text-gray-600">
                You can also reach out to us directly using the information below.
              </p>

              <div className="mt-10 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <MapPin className="h-7 w-7 text-orange-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                        <p className="mt-1 text-gray-600">
                          Plot 123, Kireka Road<br />
                          Kampala, Uganda
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Phone className="h-7 w-7 text-orange-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                        <p className="mt-1 text-gray-600">+256 785 015 959</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Mail className="h-7 w-7 text-orange-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                        <p className="mt-1 text-gray-600">infocarolsjuice@gmail.com</p>
                        <p className="text-gray-600">orderscarolsjuice@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Clock className="h-7 w-7 text-orange-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                        <div className="mt-1 text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-10 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.751867882529!2d32.6341974093058!3d0.3306870640050486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db967f07d173b%3A0x9a1d1604e586d317!2sKireka%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1743244274999!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our juices, ordering, and delivery.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
            <div className="space-y-8">
              {[
                {
                  question: 'How long do your juices stay fresh?',
                  answer: 'Our juices are fresh and preservative-free, so we recommend consuming them within 3-5 days of purchase. Always keep refrigerated for best quality and taste.'
                },
                {
                  question: 'Do you offer delivery services?',
                  answer: 'Yes, we offer delivery within Kampala and surrounding areas. Delivery fees apply based on location. For orders above 50,000 UGX, delivery within central Kampala is free.'
                },
                {
                  question: 'Can I place a bulk order for an event?',
                  answer: 'Absolutely! We cater to events of all sizes. Please contact us at least 48 hours in advance for bulk orders to ensure we can meet your needs.'
                },
                {
                  question: 'Are your juices pasteurized?',
                  answer: 'We offer both pasteurized and unpasteurized options. Our standard juices undergo gentle pasteurization to extend shelf life while preserving nutrients. We also offer raw, unpasteurized options upon request.'
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}