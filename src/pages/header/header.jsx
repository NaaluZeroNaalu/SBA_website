import React, { useRef } from 'react';
import logo from './logo.jpg';
import { IoReorderThreeSharp } from 'react-icons/io5';
import emailjs from 'emailjs-com';
import "./style.scss"
import { RiArrowDropDownLine } from "react-icons/ri";


function Header() {
  const formRef = useRef();
 

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_99sz48v', 'template_cvvyb9s', formRef.current, '_s33J6xuP7n0eqqjG')
      .then((result) => {
          console.log(result.text);
          alert('Booked Successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

 
  return (
    <>
      <div className="modal fade" id="book" tabIndex="-1" aria-labelledby="bookLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookLabel">Book a Meeting</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form ref={formRef} onSubmit={sendEmail} required>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Select Date</label>
                  <input type="date" className="form-control" id="date" name="date" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Select Time (IST)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="form-select" name="hour" required>
                      {[10, 11, 12, 1, 2, 3, 4, 5, 6].map((h, i) => (
                        <option key={i} value={h}>{h}</option>
                      ))}
                    </select>
                    <select className="form-select" name="minute" required>
                      {[0, 15, 30, 45].map((min) => (
                        <option key={min} value={min}>{min < 10 ? `0${min}` : min}</option>
                      ))}
                    </select>
                    <select className="form-select" name="period" required>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">Your Company Name</label>
                  <input type="text" className="form-control" id="company" name="company" placeholder="Enter your company name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="number" name="number" placeholder="Enter your phone number" required />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">BOOK</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




<header className="fixed w-100 top-0 h-20 z-50 bg-white " id="topnav" >
  <div className="flex items-center justify-between">
    <img src={logo} alt="Logo" className="h-20 w-20" />
    <nav className="hidden md:flex">
      <ul className="flex items-center space-x-4">
        <li className="relative group">
          <a href="#" className="no-underline text-black mr-5">About</a>
          <div className="hidden absolute left-0  w-48 bg-white shadow-lg group-hover:block">
            <a href="/Aboutus" className="block px-4 py-2 no-underline text-black">About Us </a>
            <a href="/Careers" className="block px-4 py-2 no-underline text-black">Careers</a>
          </div>
        </li>
        <li className="relative group">
          <a href="#" className="no-underline text-black mr-5">Solutions</a>
          <div className="hidden absolute left-0 w-48 bg-white shadow-lg group-hover:block">
            <a href="/Data-AI" className="block px-4 py-2 no-underline text-black">Data and AI</a>
            <a href="/Itautomation" className="block px-4 py-2 no-underline text-black mt-3">IT and Business Automation</a>
            <a href="/Open-Hybrid-Cloud" className="block px-4 py-2 no-underline text-black mt-3">Open Hybrid Cloud</a>
            <a href="/Security-and-sustainability" className="block px-4 py-2 no-underline text-black mt-3">Security and Sustainability</a>
          </div>
        </li>
        <li>
          <a href="/Industries" className="no-underline text-black mr-5">Industries</a>
        </li>
        {/* <li>
          <a href="#" className="no-underline text-black mr-5">Client Stories</a>
        </li> */}
        <li className="relative group">
          <a href="/Casestudies" className="no-underline text-black mr-5">Client Stories</a>
          {/* <div className="hidden absolute left-0 w-48 bg-white shadow-lg group-hover:block">
            <a href="/Casestudies" className="block px-4 py-2 no-underline text-black">Case Studies</a>
          </div> */}
        </li>
        <li className="relative group">
          <a href="/Blogs" className="no-underline text-black mr-5">Blogs</a>
          {/* <div className="hidden absolute left-0  w-48 bg-white shadow-lg group-hover:block">
            <a href="/Blogs" className="block px-4 py-2 no-underline text-black">Blog</a> */}
            {/* <a href="/Casestudies" className="block px-4 py-2 no-underline text-black">Case Studies</a> */}
          {/* </div> */}
        </li>
        <li>
          <button className="bg-red-600 text-white py-2 px-4 rounded-full" type="button" data-bs-toggle="modal" data-bs-target="#book">
            Request a Demo
          </button>
        </li>
      </ul>
    </nav>


    {/* Mobile menu button */}
    <button className="md:hidden p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
      <IoReorderThreeSharp className="text-2xl" />
    </button>
  </div>
</header>
    



      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title"></h1>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="flex flex-col">
            <li><a href="/" className='nav-link mb-2'>Home</a></li>
            <li><a href="/Aboutus" className='nav-link mb-2'>About Us</a></li>
            <li><a href="/Careers" className='nav-link mb-2'>Careers</a></li>
            <hr />
            <li><a href="/Data-AI" className='nav-link mb-2'>Data and AI</a></li>
            <li><a href="/Itautomation" className='nav-link mb-2'>IT and Business Automation</a></li>
            <li><a href="/Open-Hybrid-Cloud" className='nav-link mb-2'>Open Hybrid Cloud</a></li>
            <li><a href="/Security-and-sustainability" className='nav-link mb-2'>Security and Sustainability</a></li>
            <hr />
            <li><a href="/Industries" className='nav-link mb-2'>Industries</a></li>
            <li><a href="/Casestudies" className='nav-link mb-2'>Client Stories</a></li>
            {/* <li><a href="/Resources" className='nav-link mb-2'>Resources</a></li> */}
            {/* <li><a href="/Casestudies" className='nav-link mb-2'>Case Studies</a></li> */}
            <li><a href="/Blogs" className='nav-link mb-2'>Blogs</a></li>
            <li>
              <a className='bg-red-600 text-white py-2 px-3 rounded-full no-underline' href='/request-a-demo' type="button">
                Request a Demo
              </a>
            </li>
          </ul>
        </div>
      </div>      
      
    </>
  );
}

export default Header;
