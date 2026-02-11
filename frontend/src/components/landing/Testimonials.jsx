import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer',
    company: 'TechCorp',
    content: 'CodeRefine has transformed how our team reviews code. The optimization suggestions are incredibly helpful.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Engineering Manager',
    company: 'StartupInc',
    content: 'The instant feedback and scoring system has helped our junior developers improve rapidly.',
    rating: 5,
    avatar: 'MR',
  },
  {
    name: 'Priya Patel',
    role: 'Lead Architect',
    company: 'Enterprise Solutions',
    content: 'Best code analysis tool I have used. The complexity analysis is spot on!',
    rating: 5,
    avatar: 'PP',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of satisfied developers who write better code with CodeRefine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;