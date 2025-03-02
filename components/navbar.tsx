'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bug } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary/95 shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* <Bug className="h-8 w-8 text-accent" /> */}
          <img
            src="/logo_final.png"
            alt="ProSafe Pest Solutions"
            className="h-8 w-8"
          />
          <div>
            <h1 className="text-xl font-bold text-white">ProSafe</h1>
            <p className="text-xs text-accent -mt-1">Pest Solutions</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {[
            'about',
            'services',
            'areas',
            'why-us',
            'testimonials',
            'contact',
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-accent transition-colors capitalize"
            >
              {item.replace('-', ' ')}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-primary/95 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {[
          'about',
          'services',
          'areas',
          'why-us',
          'testimonials',
          'contact',
        ].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-xl text-white hover:text-accent transition-colors capitalize"
          >
            {item.replace('-', ' ')}
          </button>
        ))}
      </div>
    </header>
  );
}
