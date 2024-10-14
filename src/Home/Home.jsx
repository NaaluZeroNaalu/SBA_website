
import "./styles/home.css"

import inteeligentsolution from "./images/intelligent_solutions.jpg"
import Trusted from "../trusted";
import ai from "../videos/dataai.mp4"
import juggle from "./images/juggle.gif"
import ourmission from "./ourmission.mp4"
import Sectionone from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Displayvideohome from "./Homevideo";



function Home(){

   

    return(
        <>

        <Displayvideohome />


      <Sectionone />

        <br /><br />

        <Section2 />
      <br /><br />

      <Section3 />

    <br /><br />

    <Section4 />
                
            <Section5 />

<br />
  
  <Section6 />

        <br /><br />
        <div className="container">
        <section className="trusted">
            <div className="row">
                <div className="col-lg-6">
                    <h1 style={{fontWeight:"bold"}}>Discover how buisness become more intelligent with SBA</h1>
                </div>
                <div className="col-lg-6">
                    <p style={{fontWeight:"lighter"}}>IT teams and buisness functions of all sizes are leveraging our expertise to create value for themselves and their customers <br /><br /> <a href="#" style={{color:"black",textDecoration:"none",fontWeight:"bold"}} >View  customers stories </a></p>
                    
                </div>
            </div>
            
        <p style={{textAlign:"center",color:"red"}}>Trusted by talented leaders at:</p>

            <Trusted />
        </section>
        </div>
        <br /><br />
        <Section7 />

        <br /><br />
        <section className="resouces">
        <div className="resources-video">
            <div className=""> {/* Corrected class name */}
                <h1>Resources</h1>
            </div>
        </div>
        </section>
        <br /><br />
        <section className="contact_us">
           <div className="inputs">
           <form>
    <div class="container mt-5">
        <h2 class=" mb-4" style={{color:"white"}}>Contact Us</h2>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Full Name" name="fullname" required />
                </div>
                <div class="mb-3">
                    <input type="tel" class="form-control" placeholder="Phone Number" name="phonenumber" required />
                </div>
                <div class="mb-3">
                    <label for="comment" class="form-label">Query</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" required></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email Address" name="email" required />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Company Name" name="companyname" required />
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Support Required on" name="support" required />
                </div>
                <p class="text-light">Write us at: <a href="mailto:sales@sbainfo.in" style={{color:"white",textDecoration:"none"}}>sales@sbainfo.in</a></p>
            </div>
        </div>
        <div class="text-center d-grid">
            <button type="submit" class="btn btn-dark">Submit</button>
        </div>
    </div>
</form>

           </div>
        </section>
        </>
    )
}

export default Home