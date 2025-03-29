import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
  ],
};

export function Footer() {
  return (
    <footer className="bg-orange-600">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-white hover:text-orange-100">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-8 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-white hover:text-orange-100">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-orange-500 pt-8 text-center">
          <div className="text-white mb-4">
            <p className="text-lg font-semibold">Carol's Juice</p>
            <p className="mt-1">Plot 123, Kireka Road</p>
            <p>Kampala, Uganda</p>
            <p className="mt-2">+256 785 015 959</p>
            <p>infocarolsjuice@gmail.com</p>
          </div>
          <p className="text-xs leading-5 text-orange-200">&copy; {new Date().getFullYear()} Carol's Juice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
