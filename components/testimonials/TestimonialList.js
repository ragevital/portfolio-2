'use client'
import React from 'react';
import { useSelector } from 'react-redux';

const TestimonialList = () => {
  const testimonials = useSelector(state => state.testimonials);

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <p>{testimonial.message}</p>
            <p>{testimonial.name}</p>
            <p>{testimonial.designation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialList;
