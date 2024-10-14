import bi from "./images/bi.svg"
import "./styles/section2.css"

function Section2(){

    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col">
                    <img src={bi} alt="" />
                </div>
                <div className="col">
                    <h1>BFSI</h1>
                    <p>SBA offeres end-to-end services for the BFSI industry, includingdigital transformtation, IT consulting, cybersecurity, data analytics, and regulatory compilance
                        <br /><br />
                        These solutions enhance operational efficiency, ensure
                        data security, and support seamless integration of advanced
                        technologies, helping Financial institutions
                        stay competitive and complaint
                     </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section2