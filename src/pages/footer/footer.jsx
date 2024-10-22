import "./footer.scss"
import { FaLocationDot } from "react-icons/fa6";
import trusted from "../../assets/videos/trusted.mp4"
import { FaLinkedin, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer(){

    return(
        <>

<section className="relative h-80 mx-3" id="footer">
    <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
    >
        <source src={trusted} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div className="absolute inset-0 flex flex-col z-10 px-4">
        <br />
        <div className="nav-container">
            <div className="">
                <nav className="nav flex-column">
                    {/* <h5 className="ms-3">More</h5> */}
                    <li className="nav-item">
                        <a href="/Aboutus" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Careers" className="nav-link">Careers</a>
                    </li>
                </nav>
            </div>
            <div className="">
                <nav className="nav flex-column">
                    {/* <h5 className="ms-3">Solutions</h5> */}
                    <li className="nav-item">
                        <a href="/Data-AI" className="nav-link">Data and AI</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Itautomation" className="nav-link">IT and Business Automation</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Open-Hybrid-Cloud" className="nav-link">Open Hybrid Cloud</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Security-and-sustainability" className="nav-link">Security and Sustainability</a>
                    </li>
                </nav>
            </div>
            <div className="">
                <nav className="nav flex-column">
                    {/* <h5 className="ms-3">Industries</h5> */}
                    <li className="nav-item">
                        <a href="/Industries" className="nav-link">Industries</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Industries" className="nav-link">BFSI</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Industries" className="nav-link">Healthcare</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Industries" className="nav-link">IT and ITES</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Industries" className="nav-link">Manufacturing</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Industries" className="nav-link">Media</a>
                    </li>
                </nav>
            </div>
            <div className="">
                <nav className="nav flex-column">
                    {/* <h5 className="ms-3">Client</h5> */}
                    <li className="nav-item">
                        <a href="#" className="nav-link">Client Stories</a>
                    </li>
                </nav>
            </div>
            <div className="">
                <nav className="nav flex-column">
                    {/* <h5 className="ms-3">Resources</h5> */}
                    <li className="nav-item">
                        <a href="#" className="nav-link">Resources</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Blogs" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Casestudies" className="nav-link">Case Studies</a>
                    </li>
                </nav>
            </div>
            <div className="">
                <nav className="nav flex-column " id="socialmedia" style={{alignItems:"center"}}>
                    <h5 className="ms-3">Connect</h5>
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/company/sba-info-solutions/" className="nav-link" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{color:"blue",fontSize:"30px"}} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.youtube.com/@sbainfosolutionspvtltd6340" className="nav-link" target="_blank" rel="noopener noreferrer">
                            <FaYoutube style={{color:"red",fontSize:"30px"}} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="tel:91 9500262708" className="nav-link">
                            <FaPhone style={{fontSize:"30px"}}  />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="mailto:marketing@sbainfo.in" className="nav-link">
                            <FaEnvelope style={{color:"blue",fontSize:"30px"}}  />
                        </a>
                    </li>
                </nav>
            </div>
        </div>
    </div>
    
</section>
<br />
<div>
    <p className="text-center">Copyright © 1996 - 2024, SBA Info Solutions.</p>
</div>



      {/* <div className="footers">
        <div>
            <p>SBA Info</p>
        </div>
        <div>
            <ul className="nav flex-column">
            <li className="nav-item">
                    <p className="nav-link text-dark">About</p>
            </li>
            <li className="nav-item">
                    <a href="#" className="nav-link">About us</a>
            </li>
            <li className="nav-item">
                    <a href="#" className="nav-link">Careers</a>
            </li>
            </ul>
        </div>
        <div>
            <p>SBA Info</p>
        </div>
        <div>
            <p>SBA Info</p>
        </div>
        <div>
            <p>SBA Info</p>
        </div>
      </div>
        <br />
        <p style={{color:"white",textAlign:"center"}}>© 1996 - 2024, SBA Info Solutions.</p>
         */}

        </>
    )
}

export default Footer