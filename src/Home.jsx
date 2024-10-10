import ai from "./videos/dataai.mp4"
import "./styles/home.css"
import { FaCheck } from 'react-icons/fa'; // Import the tick icon
import inteeligentsolution from "./images/intelligent_solutions.jpg"
import { FaInfinity } from "react-icons/fa6";
import { FaRobot, FaHandsHelping  } from "react-icons/fa";
import run from "./images/run.gif"
import { useEffect, useState } from "react";
import Trusted from "./trusted";
import resources from "./videos/resources.mp4"

function Home(){

    const [customerCount, setCustomerCount] = useState(0);
    const [yearsCount, setYearsCount] = useState(0);

    useEffect(() => {
        // Animate customer count
        const customerInterval = setInterval(() => {
            if (customerCount < 300) {
                setCustomerCount(prev => prev + 1);
            } else {
                clearInterval(customerInterval);
            }
        }, 10); // Adjust the speed of the counting

        // Animate years count
        const yearsInterval = setInterval(() => {
            if (yearsCount < 30) {
                setYearsCount(prev => prev + 1);
            } else {
                clearInterval(yearsInterval);
            }
        }, 100); // Adjust the speed of the counting

        return () => {
            clearInterval(customerInterval);
            clearInterval(yearsInterval);
        };
    }, [customerCount, yearsCount]);


    return(
        <>

       <div className="video-container">
            <video autoPlay loop muted>
                <source src={ai} type='video/mp4' />
            </video>

            <div className="overlay-text"> {/* Corrected class name */}
                <h1>Automate the mundane elevate human potentital</h1>
            </div>
        </div>

        <br /><br />



      <div className="">
      <div className="row">
            <div className="col-lg-6">
                <br /><br />
                <div>
                      <h1 style={{fontSize:"50px",fontWeight:"bold",fontFamily: 'League Spartan'}}>Enable people and <br />organizations to achieve extraordinary outcomes, effortlessly.</h1>
                </div>
            </div>
            <div className="col-lg-6">
                <div  className="section1">
                    <p></p>
                   <h3> For data driven enterprises looking to create a exceptional customer and employee experience</h3>
                </div>
                <h1>SBA provides modular and sutainable AI solutions that are</h1>
                <div>
                <ol style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                    border: '2px solid red',
                    borderRadius: '50%', // Make it round
                    width: '30px', // Set width and height for consistent size
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px', // Space between icon and text
                    backgroundColor:"red"
                }}>
                    <FaCheck style={{ color: 'white', fontSize: '18px' }} />
                </div>
                <span style={{fontWeight:"bold"}}>Easy</span>&nbsp;to adopt
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                  border: '2px solid red',
                  borderRadius: '50%', // Make it round
                  width: '30px', // Set width and height for consistent size
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px', // Space between icon and text
                  backgroundColor:"red"
                }}>
                    <FaCheck style={{ color: 'white', fontSize: '18px' }} />
                </div>
                <span style={{fontWeight:"bold"}}>Trusted</span>, governed, secure and ethical
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                    border: '2px solid red',
                    borderRadius: '50%', // Make it round
                    width: '30px', // Set width and height for consistent size
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px', // Space between icon and text
                    backgroundColor:"red"
                }}>
                    <FaCheck style={{ color: 'white', fontSize: '18px' }} />
                </div>
                <span style={{fontWeight:"bold"}}>Focused </span>&nbsp; on augmenting human intelligence, not replacing it
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                   border: '2px solid red',
                   borderRadius: '50%', // Make it round
                   width: '30px', // Set width and height for consistent size
                   height: '30px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   marginRight: '10px', // Space between icon and text
                   backgroundColor:"red"
                }}>
                    <FaCheck style={{ color: 'white', fontSize: '18px' }} />
                </div>
                <span style={{fontWeight:"bold"}}>Trained</span>&nbsp; on your quality enterprise data
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{
                  border: '2px solid red',
                  borderRadius: '50%', // Make it round
                  width: '30px', // Set width and height for consistent size
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '10px', // Space between icon and text
                  backgroundColor:"red"
                }}>
                    <FaCheck style={{ color: 'white', fontSize: '18px' }} />
                </div>
                <span style={{fontWeight:"bold"}}>Transformative</span>&nbsp; - By helping you gain a truly competitive edge over the market
            </li>
        </ol>
                </div>
            </div>
        </div>

        <br /><br />

        <section className="intelligent_solutions">
            <h1 style={{ textAlign: "left", color: "white",fontFamily: 'League Spartan',fontWeight:"bold"}}>Intelligent Solutions</h1>
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

      </div>

      <br /><br />
        <section className="about_services">
            <div className="row">
                <div className="col-lg-3">
                    <img src={run} alt="" />
                </div>
                <div className="col-lg-9">
                    <h3 style={{color:"red"}}>For core applications and domains of banking, insurance, and institutions</h3>
                    <h4 style={{fontFamily:"glacial indifference"}}>We drastically simplify buisness and IT operations building <span>digital systems powered by AI, automation and hybrid cloud infrastructure</span></h4>
                    <div className="services">
                        <div>
                            <h3 style={{color:"white",textAlign:"center"}}>BFSI</h3>
                        </div>
                        <div>
                            <h3 style={{color:"white",textAlign:"center"}}>Manufacturing</h3>
                        </div>
                        <div>
                            <h3 style={{color:"white",textAlign:"center"}}>Media</h3>
                        </div>
                        <div>
                            <h3 style={{color:"white",textAlign:"center"}}>IT/ITES</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <section className="juggle">
                <div className="row">
                    <div className="col-lg-6" style={{textAlign:"center"}}>
                        <h2 style={{fontWeight:"bold"}}>In the modern workplace, <span style={{color:"red"}}>repetitive tasks like data entry and information retrival</span>  hinder employees form engaging in strategic and creative aspects of thier roles</h2>
                    </div>
                    <div className="col-lg-6">
                    <img src={run} alt="" />
                    </div>
                </div>
            </section>
        </section>

        <section className="problem">

            <h1 style={{fontWeight:"bold"}}>The problem is not that computers will begin to think like men, It's that men will begin to think like computers</h1>
        </section>
<br /><br />
   <section>
   <div className="our_mission">
            <h1 style={{fontWeight:"bold"}}>Our mission</h1>
            <h3 style={{color:"red",fontWeight:"bold"}}>At our core, we believe in empowering human potential through the <br /> responsible use of artificial intelligence and data-driven technologies.</h3>
            <p >Ethically developed technologied can enhance human creativity, decision-making, and product experiences.</p>
        </div>
   </section>

        <br /><br />
        <div className="container">
        <section className="trusted">
            <div className="row">
                <div className="col-lg-6">
                    <h1 style={{fontWeight:"bold"}}>Discover how buisness become more intelligent with SBA</h1>
                </div>
                <div className="col-lg-6">
                    <p>IT teams and buisness functions of all sizes are leveraging our expertise to create value for themselves and their customers</p>
                    <a href="#">View  customers stories </a>
                </div>
            </div>

            <p style={{textAlign:"center",color:"red"}}>Trusted by talented leaders at:</p>

            <Trusted />
        </section>
        </div>
        <br /><br />
        <h1 style={{textAlign:"center"}}>Our partner ecosystem</h1>
        <p style={{textAlign:"center"}}>Empowering our success through the collective strength and expertise of our partner network</p>
        <br /><br />
        <h1 style={{textAlign:"center",fontWeight:"bold"}}>Why work with us?</h1>
        <section className="work">
            <div className="numbers">
                <div>
                    <h1>{customerCount}+</h1>
                    <p>customers</p>
                </div>
                <div>
                    <h1>{yearsCount}+</h1>
                    <p>years in market</p>
                </div>
                <div>
                    <h1>Best</h1>
                    <p>predictive support</p>
                </div>
                <div>
                    <h1>ISO</h1>
                    <p>process rigor & certifications</p>
                </div>
            </div>
        </section>

        <br /><br />
        <section className="resouces">
        <div className="video-container">
            <video autoPlay loop muted>
                <source src={ai} type='video/mp4' />
            </video>

            <div className="overlay-text"> {/* Corrected class name */}
                <h1>Eliminate the Mundane</h1>
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
        <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>

           </div>
        </section>
        </>
    )
}

export default Home