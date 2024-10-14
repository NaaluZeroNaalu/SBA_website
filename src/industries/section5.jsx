import bi from "./images/bi.svg"
import "./styles/section5.css"


function Section5(){

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>IT/ITES</h1>
                    <p>
                    To optimize IT operations, 
                    enhance productivity, and ensure 
                    robust security measures tailored to business needs, we provide a comprehensive suite of IT services for the IT/ITES sector, including cloud solutions, managed security services, data center infrastructure, disaster recovery,
                     and remote infrastructure management.
                     </p>
                </div>
                <div className="col">
                    <img src={bi} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Section5