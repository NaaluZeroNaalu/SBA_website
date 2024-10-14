import React, { useState } from 'react';
import './styles//header.css'; // Assuming you will create a CSS file for styling
import { IoReorderThreeSharp } from "react-icons/io5";
import logo from "./images/trustedby/logo.jpg"

function Header() {
    

    return (
        <> 
            <header className="navbar">
                <img src={logo} alt="" style={{height:"100px",width:"100px",marginLeft:"50px"}}  />
                <nav>
                    <ul className="nav-links">
                    <li className="dropdown">
                            <a href="#">About</a>
                            <div className="dropdown-content">
                                <a href="/About-us">About us</a>
                                <a href="/Casestudies">Careers</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#">Solutions</a>
                            <div className="dropdown-content">
                                <a href="Data-AI">Data and AI</a>
                                <a href="#">IT and Business Automation</a>
                                <a href="/Open-Hybrid-Cloud">Open Hybrid Cloud</a>
                                <a href="/Secure-and-sustainability">Security and Sustainability </a>
                            </div>
                        </li>
                        <li><a href="/Industries">Industries</a></li>
                        <li><a href="#">Client stories</a></li>
                        <li className="dropdown">
                            <a href="#">Resources</a>
                            <div className="dropdown-content">
                                <a href="/blog">Blog</a>
                                <a href="/Casestudies">Case Studies</a>
                            </div>
                        </li>
                        <li><button className='btn btn-danger' style={{borderRadius:"30px"}}>Request a demo</button></li>
                    </ul>
                    <div class="offcanvas offcanvas-start" id="demo">
                        <div class="offcanvas-header">
                            <h1 class="offcanvas-title">Heading</h1>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div class="offcanvas-body">
                            <p>Some text lorem ipsum.</p>
                            <p>Some text lorem ipsum.</p>
                            <button class="btn btn-secondary" type="button">A Button</button>
                        </div>
                    </div>
                    <button className="btn" id='navbtn' type="button" data-bs-toggle="offcanvas" data-bs-target="#demo"><IoReorderThreeSharp /></button>
                </nav>
            </header>
        </>
    );
}

export default Header;
