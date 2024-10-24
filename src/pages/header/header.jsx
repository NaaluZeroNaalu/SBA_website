import React, { useRef } from 'react';
import logo from './logo.jpg';
import "./style.scss";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';

import emailjs from 'emailjs-com';

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

    // Reset the form after submission
    e.target.reset();
  };
  return (
    <>

    {/* 

    

    */}


<div className="modal fade" id="book" tabIndex="-1" aria-labelledby="bookLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="bookLabel">Book a Time</h5>
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
                <div className="row">
                  <div className="col-4">
                    <select className="form-select" name="hour" required>
                      {[10,11,12,1,2,3,4,5,6].map((h, i) => (
                        <option key={i} value={h}>{h}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-4">
                    <select className="form-select" name="minute" required>
                      {[0, 15, 30, 45].map((min) => (
                        <option key={min} value={min}>{min < 10 ? `0${min}` : min}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-4">
                    <select className="form-select" name="period" required>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
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


  <header className="navbar" style={{ position: "sticky" }}>
  <img src={logo} alt="Logo" style={{ height: "100px", width: "100px", marginLeft: "50px" }} />
  <nav>
  <ul className="nav-links flex items-center justify-between">
  <li className="dropdown">
    <a href="#">About</a>
    <div className="dropdown-content">
      <a href="/Aboutus">About Us</a>
      <a href="/Careers">Careers</a>
    </div>
  </li>
  <li className="dropdown">
    <a href="#">Solutions</a>
    <div className="dropdown-content">
      <a href="/Data-AI">Data and AI</a>
      <a href="/Itautomation">IT and Business Automation</a>
      <a href="/Open-Hybrid-Cloud">Open Hybrid Cloud</a>
      <a href="/Security-and-sustainability">Security and Sustainability</a>
    </div>
  </li>
  <li><a href="/Industries">Industries</a></li>
  <li><a href="#">Client stories</a></li>
  <li className="dropdown">
    <a href="#">Resources</a>
    <div className="dropdown-content">
      <a href="/Blogs">Blog</a>
      <a href="/Casestudies">Case Studies</a>
    </div>
  </li>
  <li className="flex items-center"> {/* Added flex to align button */}
  <button className='btn btn-danger' type="button" data-bs-toggle="modal" data-bs-target="#book" style={{ borderRadius: "30px" }}>
   Request a demo
</button>

  </li>
</ul>

    <div className="offcanvas offcanvas-start" id="demo">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title"></h1>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
      </div>
      <Outlet />
      <div className="offcanvas-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="/Aboutus" className='nav-link'>About us</a>
          </li>
          <li className="nav-item">
            <a href="/Casestudies" className='nav-link'>Careers</a>
          </li>
          <li className="nav-item">
            <a href="/Casestudies" className='nav-link'>Solutions</a>
          </li>
          <li className="nav-item">
            <a href="/Industries" className='nav-link'>Industries</a>
          </li>
          <li className="nav-item">
            <a href="#" className='nav-link'>Client Stories</a>
          </li>
          <li className="nav-item">
            <a href="/Resources" className='nav-link'>Resources</a>
          </li>
          <li className="nav-item">
            <a href="/Blogs" className='nav-link'>Blogs</a>
          </li>
          <li className="nav-item">
            <a href="/Casestudies" className='nav-link'>Case Studies</a>
          </li>
          <li className="nav-item">
            <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#myModal" type="button" style={{ borderRadius: "30px" }}>Request a demo</button>
          </li>
        </ul>
      </div>
    </div>
    <button className="btn" id='navbtn' >
      <IoReorderThreeSharp />
    </button>
  </nav>
</header>
    </>
  );
}

export default Header;
