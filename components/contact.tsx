'use client';

import type React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={
              inView ? { opacity: 1, width: '100px' } : { opacity: 0, width: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Ready to get started? Contact us today for a free consultation. Our
            team is ready to help you with all your pest control needs.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">Phone</h4>
                <p className="text-white/80">+91 8238238004</p>
                <p className="text-sm text-white/60 mt-1">
                  Available Mon-Sat, 9am-6pm
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-white/80">krish.patel.ch@gmail.com</p>
                <p className="text-sm text-white/60 mt-1">
                  We'll respond as soon as possible
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">Service Areas</h4>
                <p className="text-white/80">Vadodara, Bharuch, Ankleshwar</p>
                <p className="text-sm text-white/60 mt-1">
                  Residential and commercial properties
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Emergency Pest Control</h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Facing an urgent pest problem? Call our emergency hotline for
                immediate assistance.
              </p>
              <a
                href="tel:+918238238004"
                className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
