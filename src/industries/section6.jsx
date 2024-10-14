import bi from "./images/bi.svg"
import "./styles/section6.css"


function Section6(){

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Healthcare</h1>
                    <p>
                    SBA Info Solutions provides comprehensive 
                    IT services to the healthcare industry,
                     including:
                     </p>
                     <ul>
                        <li>Hybrid Cloud Infrastructure</li>
                        <li>Intelligent Data-as-aService (iDaas)</li>
                        <li>AI-Enhanced Data Analysis</li>
                        <li>Data Protection</li>
                        <li>Automated Security</li>
                     </ul>
                </div>
                <div className="col">
                    <img src={bi} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Section6