"use client";

import { useState } from 'react';

export const GeneralContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms Access Key
  const accessKey = "YOUR_ACCESS_KEY_HERE"; 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);
    
    // Append the access key to the form data
    data.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-white dark:bg-gray-950 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        
        {/* Elegant Title Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100">
            Let's Start a Conversation
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Can't find what you're looking for? Send us a general message and 
            our central team will route you to the right person.
          </p>
        </div>

        {/* Premium Form Layout */}
        <form onSubmit={handleSubmit} className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name
              </label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200" 
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Name
              </label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200" 
              />
            </div>

            {/* Email (Full Width) */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200" 
              />
            </div>

            {/* Message (Full Width) */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 shadow-sm focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200"
              ></textarea>
            </div>
          </div>
          
          {/* Submit Button & Status Message */}
          <div className="mt-12 text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-block relative overflow-hidden group 
                         bg-gray-900 text-white dark:bg-white dark:text-gray-900 
                         px-12 py-4 text-sm font-medium uppercase tracking-wider 
                         hover:bg-gray-700 dark:hover:bg-gray-200 
                         transition-colors duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed
                         "
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </span>
              <span className="absolute inset-0 bg-gray-700 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            {status === 'success' && (
              <p className="mt-4 text-green-500 dark:text-green-400 font-semibold">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-500 dark:text-red-400 font-semibold">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};