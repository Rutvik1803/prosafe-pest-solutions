'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Mosquito Control',
    description:
      'Effective solutions to eliminate mosquitoes and prevent breeding, reducing the risk of mosquito-borne diseases.',
    image: '/mosquito.png',
  },
  {
    title: 'Cockroach Control',
    description:
      'Comprehensive treatment to eliminate cockroach infestations and prevent future occurrences.',
    image: '/cockroach.png',
  },
  {
    title: 'Bedbug Control',
    description:
      'Specialized treatments to eradicate bedbugs from your home, ensuring peaceful sleep.',
    image: '/bedbug.png',
  },
  {
    title: 'Ant Control',
    description:
      'Targeted solutions to eliminate ant colonies and prevent reinfestation.',
    image: '/ant.png',
  },
  {
    title: 'Termite Treatment',
    description:
      'Protect your property from destructive termites with our effective treatment methods.',
    image: '/termite.png',
  },
  {
    title: 'Rodent Control',
    description:
      'Humane and effective solutions to remove rodents and prevent their return.',
    image: '/rodents.png',
  },
];

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Our Pest Control Services
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
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We offer comprehensive pest control solutions tailored to your
            specific needs. Our services are designed to effectively eliminate
            pests while ensuring the safety of your family and the environment.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="mt-4 text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Get a quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
