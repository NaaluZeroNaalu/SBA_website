import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Use the formRef to get the current form element
    emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert("Request submitted successfully");
        e.target.reset(); // Reset form after submission
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <form className="space-y-8 container" ref={formRef} onSubmit={sendEmail}>
      {/* Form Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your Full Name"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            required
          />
        </div>
      </div>

      {/* Form Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            required
          />
        </div>
        <div>
          <label htmlFor="education" className="block text-lg font-semibold text-gray-700">Education</label>
          <input
            type="text"
            id="education"
            name="education"
            placeholder="Education"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
            required
          />
        </div>
      </div>

      {/* Support Section */}
      <div>
        <label htmlFor="support" className="block text-lg font-semibold text-gray-700">Domain</label>
        <input
          id="support"
          name="support"
          className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
        />
      </div>

      {/* Update Resume Section */}
      {/* <div>
        <label htmlFor="resume" className="block text-lg font-semibold text-gray-700">Update Resume</label>
        <input
        type="file"
        id="resume"
        name="resume"
        accept=".pdf"
        className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
        />
        </div> */}

      {/* Submit Button */}
      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          className="px-8 py-3 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg"
          style={{ backgroundColor: "#3f649a" }}
        >
          Submit Request
        </button>
      </div>
        <div>
          <p style={{textAlign:"center",fontSize:"40px"}}>Email Us at <span style={{color:"red"}}>hr@sbainfo.in</span></p>
        </div>
    </form>
  );
};

export default ContactForm;
