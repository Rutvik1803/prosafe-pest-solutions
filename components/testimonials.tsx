'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Vadodara',
    rating: 5,
    text: 'ProSafe Pest Solutions provided excellent service for our termite problem. Krish and his team were professional, thorough, and explained every step of the treatment process. Our home has been pest-free for months now!',
  },
  {
    name: 'Priya Patel',
    location: 'Bharuch',
    rating: 5,
    text: 'We had a serious cockroach infestation in our restaurant. ProSafe not only eliminated the problem quickly but also provided valuable advice on preventing future issues. Highly recommended for business owners!',
  },
  {
    name: 'Amit Desai',
    location: 'Ankleshwar',
    rating: 4,
    text: 'Very satisfied with the mosquito control service. The team was punctual and courteous. They did a thorough job and followed up to ensure the treatment was effective. Would use their services again.',
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            What Our Customers Say
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
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our pest control services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
