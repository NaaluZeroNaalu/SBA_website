import React, { useState } from 'react';
import './styles//header.css'; // Assuming you will create a CSS file for styling
import { IoReorderThreeSharp } from "react-icons/io5";

function Header() {
    

    return (
        <> 
            <header className="navbar">
                <h1>SBA</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Carrires</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Client stories</a></li>
                        <li className="dropdown">
                            <a href="#">Resources</a>
                            <div className="dropdown-content">
                                <a href="#service1">Carrers</a>
                                <a href="#service2">Blog</a>
                                <a href="#service3">Case Studies</a>
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
