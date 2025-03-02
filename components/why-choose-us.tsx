"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Shield, Leaf, BadgeCheck, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: CheckCircle,
    title: "Experienced Professionals",
    description: "Our team consists of certified pest control experts with years of experience.",
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    description: "We understand the urgency of pest problems and respond promptly to all service requests.",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "We stand behind our work with a satisfaction guarantee on all our services.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "We use environmentally responsible products that are safe for your family and pets.",
  },
  {
    icon: BadgeCheck,
    title: "Customized Treatments",
    description: "We develop personalized pest control plans tailored to your specific needs.",
  },
  {
    icon: ThumbsUp,
    title: "Affordable Pricing",
    description: "Quality pest control services at competitive and transparent prices.",
  },
]

export function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="why-us" className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Why Choose ProSafe Pest Solutions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We are committed to providing exceptional pest control services that prioritize your safety, satisfaction,
            and peace of mind. Here's why our customers choose us:
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}

