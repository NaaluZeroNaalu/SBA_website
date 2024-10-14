import bi from "./images/bi.svg"
import "./styles/section1.css"
function Section1(){

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>At SBA, we specialize in delivering robust IT services and security solutions to meet the unique needs of various industries, including Banking,
                     Financial Services, and Insurance (BFSI), Manufacturing, Media, IT and IT-Enabled Services (IT & ITES), and Healthcare, ensuring the integrity and security
                     of their data centers, cloud infrastructure and information security practices
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

export default Section1