import bi from "./images/bi.svg"
import "./styles/section1.css"

function Section3(){

    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Manufacturing</h1>
                    <p>We provide advanced solutions for manufacturing industries that include:</p>
                    <ul>
                        <li>Predictive Maintenance</li>
                        <li>Supply Chain Optimization</li>
                        <li>Cloudera Workload Optimization</li>
                        <li>SAP Observability</li>
                        <li>High Performance Analytics</li>
                        <li>AI Assitants</li>
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

export default Section3