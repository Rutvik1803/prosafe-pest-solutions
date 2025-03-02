'use client';
import Link from 'next/link';
import { Bug, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Bug className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-xl font-bold text-primary">ProSafe</h1>
                <p className="text-xs text-accent -mt-1">Pest Solutions</p>
              </div>
            </Link>
            <p className="text-muted-foreground mb-4">
              Pest free solutions. Delivered with excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Mosquito Control',
                'Cockroach Control',
                'Bedbug Control',
                'Ant Control',
                'Termite Treatment',
                'Rodent Control',
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      document
                        .getElementById('services')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Areas Served', id: 'areas' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent">Phone:</span>
                <a
                  href="tel:+918238238004"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8238238004
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">Email:</span>
                <a
                  href="mailto:krish.patel.ch@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  krish.patel.ch@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">Areas:</span>
                <span className="text-muted-foreground">
                  Vadodara, Bharuch, Ankleshwar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">Hours:</span>
                <span className="text-muted-foreground">Mon-Sat: 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} ProSafe Pest Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
