import "./styles/section3.css"
import bfsi from "./images/bfsi.png"
import manufacturer from "./images/manufacture.png"
import it from "./images/it.png"
import media from "./images/media.png"
import run from "./images/running.gif"

function Section3(){

    return(
        <>
        <section className="about_services">
            <div className="row">
                <div className="col-lg-3">
                    <img src={run} alt="" />
                </div>
                <div className="col-lg-9">
                    <h3 style={{color:"red"}}>For core applications and domains of banking, insurance, and institutions</h3>
                    <h4 style={{fontFamily:"glacial indifference"}}>We drastically simplify buisness and IT operations building <span>digital systems powered by AI, automation and hybrid cloud infrastructure</span></h4>
                    <div className="services">
                        <div style={{height:"343px"}}>
                            <h3 style={{color:"white",textAlign:"center"}}>BFSI</h3>
                            <img src={bfsi} alt=""/>
                        </div>
                        <div style={{height:"343px"}}>
                            <h3 style={{color:"white",textAlign:"center"}}>Manufacturing</h3>
                            <img src={manufacturer} alt=""/>
                            
                        </div >
                        <div style={{height:"343px"}}>
                            <h3 style={{color:"white",textAlign:"center"}}>Media</h3>
                            <img src={media} alt=""/>
                           
                        </div>
                        <div style={{height:"343px"}}>
                            <h3 style={{color:"white",textAlign:"center"}}>IT/ITES</h3>
                            <img src={it} alt=""/>
                            
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default Section3