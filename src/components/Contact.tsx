import React from 'react';
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 pb-20 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Information */}
        <div className="space-y-8" data-aos="fade-up">
          <h2 className="text-4xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            I’d love to hear from you! Feel free to reach out via email, phone, or by submitting the form.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <AiTwotoneMail size={24} className="text-accent" />
              <span className="text-lg">xyz@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone size={24} className="text-accent" />
              <span className="text-lg">(021) 000-0000</span>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              id="name" 
              className="h-12 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              className="h-12 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" 
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="msg" className="text-gray-700 font-medium">Message</label>
            <textarea 
              id="msg" 
              rows={5} 
              className="p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" 
              placeholder="Your Message"
            />
          </div>
          <button 
            className="bg-accent text-white font-medium p-3 w-full rounded-md hover:bg-accent-dark transition duration-300" 
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
