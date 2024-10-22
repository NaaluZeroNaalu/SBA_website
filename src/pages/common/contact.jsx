import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if formRef is correctly set
    if (formRef.current) {
      emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
        .then((result) => {
          console.log('Email sent successfully!', result.text);
          alert("Request submitted successfully");
          e.target.reset(); // Reset form after submission
        }, (error) => {
          console.error('Error sending email:', error.text);
        });
    } else {
      console.error('Form reference is not set.');
    }
  };

  return (
<>
<br />
<div>
      <h1 style={{ fontWeight: "bold", textAlign: "center", fontFamily: "league spartans" }}>Contact Us</h1>
      <br /><br />
      <form className="space-y-8 container" ref={formRef} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Work Email Address" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Your Phone Number" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
          <div>
            <label htmlFor="company" className="block text-lg font-semibold text-gray-700">Company Name</label>
            <input type="text" id="company" name="company" placeholder="Your Company Name" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
          </div>
        </div>

        <div>
          <label htmlFor="support" className="block text-lg font-semibold text-gray-700">Support Required On</label>
          <select id="support" name="support" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300">
            <option value="" disabled>Choose a Solution/Service</option>
            <option value="Data and AI">Data and AI</option>
            <option value="IT and Business Automation">IT and Business Automation</option>
            <option value="Open Hybrid Cloud">Open Hybrid Cloud</option>
            <option value="Security and Sustainability">Security and Sustainability</option>
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-lg font-semibold text-gray-700">Query</label>
          <textarea id="query" name="query" placeholder="Describe your Requirement in Detail" className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" rows="5"></textarea>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="px-8 py-3 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg" style={{ backgroundColor: "#3f649a" }}>
            Submit Request
          </button>
        </div>
      </form>
    </div>
    <br /><br /><br />
    </>
  );
};

export default ContactForm;
