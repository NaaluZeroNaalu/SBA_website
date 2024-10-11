import { FaInfinity } from "react-icons/fa6";
import { FaRobot, FaHandsHelping  } from "react-icons/fa";
import "./styles/section2.css"

function Section2(){


    return(

        <>
         <section className="intelligent_solutions">
            <h1 style={{ textAlign: "left", color: "white",fontFamily: 'League Spartan',fontWeight:"bold"}}>Intelligent Solutions</h1>
           <br /><br />
            <div className="solutions">
                <div>
                    <FaInfinity className="solution-icon" />
                    <p>Infrastructure & Application Modernization</p>
                    <br /><br />
                    <div style={{border:"1px solid red",height:"30px",backgroundColor:"red"}}>

                    </div>
                </div>
                <div>
                    <FaHandsHelping className="solution-icon" />
                    <p>Cyber Resiliency</p>
                    <br /><br /><br />
                    <div style={{border:"1px solid red",height:"30px",backgroundColor:"red"}}>

                    </div>
                </div>
                <div>
                    <FaRobot className="solution-icon" />
                    <p>Data, Automation & AI</p>
                    <br /><br /><br />
                    <div style={{border:"1px solid red",height:"30px",backgroundColor:"red"}}>

                    </div>
                </div>
                <div>
                    <FaHandsHelping className="solution-icon" />
                    <p>Managed Services</p>
                    <br /><br /><br />
                    <div style={{border:"1px solid red",height:"30px",backgroundColor:"red"}}>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section2