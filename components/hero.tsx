'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Bug, SprayCanIcon as Spray } from 'lucide-react';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-primary/80"></div>

      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col items-center text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Shield className="h-16 w-16 text-accent mx-auto" />
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            ProSafe Pest Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-accent font-medium mb-8"
          >
            Pest free solutions. Delivered with excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Our Services
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto"
          >
            {[
              {
                icon: Bug,
                title: 'Pest Identification',
                text: "We identify the exact pest problem you're facing",
              },
              {
                icon: Spray,
                title: 'Safe Treatment',
                text: 'Eco-friendly solutions that are safe for your family',
              },
              {
                icon: Shield,
                title: 'Guaranteed Results',
                text: "100% satisfaction or we'll return at no extra cost",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center"
              >
                <item.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() =>
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Scroll down"
          className="text-white/70 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
