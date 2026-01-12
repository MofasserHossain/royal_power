import Link from 'next/link'
import { Facebook, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Royal Power Service</h3>
            <p className="text-sm text-foreground/80">
              House of Engineering solutions provider nationwide with quality
              and trust.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Product List
                </Link>
              </li>
              <li>
                <Link href="/our-clients" className="hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-primary transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Product List
                </Link>
              </li>
              <li>
                <Link href="/our-clients" className="hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-primary transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium mb-1">Address:</p>
                <p className="text-background/80">
                  House No 06, Lane 03, Block-C,
                  <br />
                  Mirpur 10, Dhaka-1216
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Phone:</p>
                <a
                  href="tel:+8801729959988"
                  className="text-secondary hover:underline"
                >
                  +88 01729959988
                </a>
              </div>
              <div>
                <p className="font-medium mb-1">Email:</p>
                <a
                  href="mailto:info@royalpowerservice.com"
                  className="text-secondary hover:underline"
                >
                  info@royalpowerservice.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-background/80">
              All rights reserved by Royal Power Service @ 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
