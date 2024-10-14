import Displaysandsvideo from "./video";
import img from "./images/hyper1.jpg"
import "./styles/section1.css"

function SecurityandSus(){

    return(
        <>
        <Displaysandsvideo />
        <div className="container">
            <h1 style={{fontFamily:"league spartan",fontWeight:"bold"}}>IBM LinuxONE: Unlocking Efficiency, Security, and Sustainability</h1>
            <p style={{fontFamily:"roboton"}}>IBM LinuxONE is a family of enterprise servers designed to deliver high performance,
                 security, and sustainability.</p>
        </div>
        <br /><br />
        <div className="container">
           <div className="row">
            <div className="col">
            <h1 style={{fontFamily:"league spartan",fontWeight:"bold"}}>Secure Mainframe Solutions</h1>
            <ul >
                <li>Enhanced Security IBM Z offers encryption and access controls to protect data.</li>
                <li>Compliance Tools for auditing and monitoring help meet regulatory requirements.</li>
                <li>High Availability Designed for resilience, minimizing downtime.</li>
            </ul>
            </div>
            <div className="col">
                <img className="ms-5" src={img} alt="" style={{width:"500px",borderRadius:"10px"}} />
            </div>
           </div>
        </div>
        <br /><br />
        <div className="container">
           <div className="row">
            <div className="col">
                <img src={img} alt="" style={{width:"500px",borderRadius:"10px"}} />
            </div>
            <div className="col">
            <h1 className="ms-5" style={{fontFamily:"league spartan",fontWeight:"bold"}}>Efficient Linux Workloads</h1>
            <ul className="ms-5">
                <li>Workload Isolation Secure environments protect data integrity.</li>
                <li>Energy Efficiency Consolidation reduces energy consumption and costs.</li>
                <li>Scalability High-performance capabilities support efficient workload scaling.</li>
            </ul>
            </div>
           </div>
        </div>
        <br /><br />
        <div className="container">
           <div className="row">
            <div className="col">
            <h1 style={{fontFamily:"league spartan",fontWeight:"bold"}}>Sustainability Goals</h1>
            <ul>
                <li>Reduced Carbon Footprint Energy-efficient practices lower emissions.</li>
                <li>Cost Savings Reduces operational costs through efficiency.</li>
                <li>Brand Reputation Enhances reputation and supports compliance with sustainability goals.</li>
            </ul>
            </div>
            <div className="col">
                <img className="ms-5" src={img} alt="" style={{width:"500px",borderRadius:"10px"}} />
               
            </div>
           </div>
        </div>
        <br /><br />
        </>
    )
}

export default SecurityandSus;