'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = [
  {
    name: 'Vadodara',
    description:
      'Comprehensive pest control services throughout Vadodara city and surrounding areas.',
    image: '/Vadodara.jpg',
  },
  {
    name: 'Bharuch',
    description:
      'Serving residential and commercial properties across Bharuch with effective pest solutions.',
    image: '/bharuch.jpg',
  },
  {
    name: 'Ankleshwar',
    description:
      'Reliable pest management services for homes and businesses in Ankleshwar.',
    image: '/ankleshwar.jpg',
  },
];

export function Areas() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="areas" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Areas We Serve
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
            ProSafe Pest Solutions proudly serves multiple locations in Gujarat.
            Our team of experts is ready to address your pest control needs
            wherever you are located.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
            >
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">{area.name}</h3>
              <p className="text-white/70">{area.description}</p>
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="mt-4 text-accent hover:text-white transition-colors font-medium"
              >
                Service this area
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/80 mb-4">
            Don't see your location listed? We may still be able to help!
          </p>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Check Service Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
}
