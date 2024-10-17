import "./footer.scss"

function Footer(){

    return(
        <>

        <div className="bg-dark">
        <div className="footers">
            <div>
                <h4>About Us</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link">SBA info Solution</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Careers</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4>Industries</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link">BFSI</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Manufacturing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Media</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">IT/ITES</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4>Resources</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Case Studies</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
            <h4>Solutions</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Data and AI</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">IT Automation</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Open Hybrid Cloud</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Security and Sustainability</a>
                    </li>
                </ul>
            </div>
          <ul>
            <li>social medias</li>
          </ul>
            <div>
          
             </div>       
        
       
        </div>
        <br />
        <p style={{color:"white",textAlign:"center"}}>© 1996 - 2024, SBA Info Solutions.</p>
        </div>

        </>
    )
}

export default Footer