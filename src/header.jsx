import React, { useState } from 'react';
import './styles//header.css'; // Assuming you will create a CSS file for styling

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
                        <li><button className='btn btn-danger'>Request a demo</button></li>
                    </ul>
                    <button className='btn btn-light' id='navbtn'>click</button>
                </nav>
            </header>
        </>
    );
}

export default Header;
