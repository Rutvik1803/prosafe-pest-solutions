'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Shield, Award, Clock } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            About ProSafe Pest Solutions
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
            We are dedicated to providing effective and safe pest control
            solutions for homes and businesses. Our mission is to protect your
            property from unwanted pests while ensuring the safety of your
            family, pets, and the environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/Krish.png"
              alt="Pest Control Professional"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Meet Krish Patel
            </h3>
            <p className="text-muted-foreground mb-6">
              With years of experience in the pest control industry, Krish Patel
              founded ProSafe Pest Solutions with a vision to provide
              exceptional pest management services that prioritize customer
              satisfaction and environmental responsibility.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: 'Certified Professionals',
                  text: 'Our team is fully certified and trained in the latest pest control techniques',
                },
                {
                  icon: Award,
                  title: 'Eco-Friendly Solutions',
                  text: 'We use environmentally responsible products and methods',
                },
                {
                  icon: Clock,
                  title: 'Prompt Service',
                  text: 'Quick response times and efficient service delivery',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
