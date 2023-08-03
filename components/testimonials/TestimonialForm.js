'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTestimonial } from '../../actions/testimonialActions';

const TestimonialForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { name, message, designation };
    dispatch(addTestimonial(newTestimonial));
    setName('');
    setMessage('');
    setDesignation('');
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
  <h2 className="text-xl font-semibold mb-4">Add Testimonial</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
    />
    <input
      type="text"
      placeholder="Designation"
      value={designation}
      onChange={(e) => setDesignation(e.target.value)}
      className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
    />
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="block w-full border rounded-md p-2 focus:outline-none focus:border-blue-500"
    ></textarea>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

  );
};

export default TestimonialForm;
