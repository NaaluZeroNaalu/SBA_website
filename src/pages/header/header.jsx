import React from 'react';
import logo from './logo.jpg';
import "./style.scss";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
  <header className="navbar" style={{ position: "sticky" }}>
  <img src={logo} alt="Logo" style={{ height: "100px", width: "100px", marginLeft: "50px" }} />
  <nav>
    <ul className="nav-links">
      <li className="dropdown">
        <a href="#">About</a>
        <div className="dropdown-content">
          <a href="/Aboutus">About us</a>
          <a href="/Casestudies">Careers</a>
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
        <a href="/Resources">Resources</a>
        <div className="dropdown-content">
          <a href="/Blogs">Blog</a>
          <a href="/Casestudies">Case Studies</a>
        </div>
      </li>
      <li>
        <button className='btn btn-danger' style={{ borderRadius: "30px" }}>Request a demo</button>
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
            <button className='btn btn-danger' style={{ borderRadius: "30px" }}>Request a demo</button>
          </li>
        </ul>
      </div>
    </div>
    <button className="btn" id='navbtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
      <IoReorderThreeSharp />
    </button>
  </nav>
</header>
    </>
  );
}

export default Header;
