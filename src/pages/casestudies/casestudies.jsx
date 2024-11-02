import "./style.scss"
import CaseStudys from "../../assets/videos/CaseStudy.mp4";
import Contactus from "../common/contact";
import Casestudiessections from "./casestudiessections";
import Sidecontent from "../sidecontact/side";



function Casestudies(){




    return(
        <>
        {/* <section>
        <div className="ai-green-v1">
          <div className="init-ai-section1">
            <div className="abspage14" style={{marginLeft:"350px"}}>Case Studies</div>
            <div className="init-red-bg14 " style={{marginLeft:"190px"}}>
              Real Results, Remarkable Journeys
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={CaseStudys} type="video/mp4" />
          </video>
        </div>
      </section> */}
      <br /><br /><br /><br /><br /><br />
      <Sidecontent />
      <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center" id="topvideo">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold" style={{fontFamily:"league spartan"}} id="toptext">
        Case Studies
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl" style={{fontFamily:"league spartan"}} id="bottomtext">
        Real Results, Remarkable Journeys
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={CaseStudys} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>
    
      {/* <section>
        <h1>
        Curious about how similar businesses have achieved success with our solutions?

Our case studies at SBA Info Solutions share compelling stories of how our clients have overcome obstacles and reached their goals. 

These detailed accounts provide actionable insights into how our solutions can benefit your business, helping you make informed decisions and drive your own success.
        </h1>
      </section> */}

<Casestudiessections />

      <Contactus />
        </>
    )
}


export default Casestudies