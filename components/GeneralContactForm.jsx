"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';


export const GeneralContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    // --- IMPORTANT ---
    // Replace with your actual Web3Forms Access Key
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

        const data = new FormData(e.target);
        data.append("access_key", accessKey);
        data.append("subject", "New Contact Form Submission from Spetraluce"); // Added a subject line

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000); // Reset status after 5 seconds
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };
    
    // --- Animation Variants ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.section 
            className="bg-black py-24 sm:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                
                <motion.div className="max-w-3xl mx-auto text-center" variants={itemVariants}>
                    <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-gray-100">
                        Let's Start a Conversation
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                        Our central team will route you to the right person.
                    </p>
                </motion.div>

                <motion.form 
                    onSubmit={handleSubmit} 
                    className="mt-16 max-w-4xl mx-auto"
                    variants={containerVariants} // Stagger children of the form
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* First Name */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="block w-full rounded-lg border-2 border-gray-700 bg-gray-900/50 text-white px-4 py-3 shadow-sm focus:border-amber-500 focus:ring-amber-500 transition-colors duration-200" />
                        </motion.div>

                        {/* Last Name */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="block w-full rounded-lg border-2 border-gray-700 bg-gray-900/50 text-white px-4 py-3 shadow-sm focus:border-amber-500 focus:ring-amber-500 transition-colors duration-200" />
                        </motion.div>

                        {/* Email */}
                        <motion.div className="sm:col-span-2" variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-lg border-2 border-gray-700 bg-gray-900/50 text-white px-4 py-3 shadow-sm focus:border-amber-500 focus:ring-amber-500 transition-colors duration-200" />
                        </motion.div>

                        {/* Message */}
                        <motion.div className="sm:col-span-2" variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">How can we help?</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" required className="block w-full rounded-lg border-2 border-gray-700 bg-gray-900/50 text-white px-4 py-3 shadow-sm focus:border-amber-500 focus:ring-amber-500 transition-colors duration-200"></textarea>
                        </motion.div>
                    </div>
                    
                    <motion.div className="mt-12 text-center" variants={itemVariants}>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="inline-block px-12 py-4 bg-amber-500 text-black font-semibold text-base uppercase tracking-wider rounded-md shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {/* Animated Status Messages */}
                        <div className="mt-4 h-6">
                            {status === 'success' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-green-400 font-semibold">
                                    <CheckCircleIcon className="w-6 h-6" /> Thank you! Your message has been sent.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-red-400 font-semibold">
                                   <XCircleIcon className="w-6 h-6" /> Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.form>
            </div>
        </motion.section>
    );
};

