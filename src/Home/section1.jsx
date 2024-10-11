import jump from "./images/jump.gif"
import { FaCheck } from 'react-icons/fa'; // Import the tick icon


function Sectionone(){

    return(
        <>
        <div className="row">
            <div className="col-lg-6">
                <br /><br />
                <div>
                      <h1 style={{fontSize:"50px",fontWeight:"bold",fontFamily: 'League Spartan'}}>Enable people and <img src={jump} alt="" style={{width:"150px",height:"150px",position:"absolute",top:"700px"}}/>
                        <br />organizations to achieve extraordinary outcomes, effortlessly.</h1>
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
        
        </>
    )
}

export default Sectionone