import r from "./images/resource3.jpg"

function Section1(){

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Why Choose Us?</h1>
                    <p>
                    SBA has 60+ partnerships with top OEMs, specializing in Next-Gen Information Security, Cloud Services, and Data Center Modernization.

Our expertise spans BFSI, manufacturing, IT/ITES, with solutions architecture and consulting capabilities enhancing our AI Innovation Center and Managed security services.
                    </p>
                </div>
                <div className="col ms-5">
                    <img src={r} alt="" style={{width:"600px"}} />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col me -5">
                    <img src={r} alt="" style={{width:"600px"}} />
                  
                </div>
                <div className="col">
                    <h1>Integrated Solutions</h1>
                    <ul>
                        <li>Observability, data management, analytics, and AI in one platform</li>
                        <li>Industry-specific solutions for BFSI, media, manufacturing, and IT</li>
                    </ul>
                    <h1>Commitment to Excellence</h1>
                    <ul>
                        <li>Data governance, security, and compliance ensured</li>
                        <li>Responsible AI practices implemented</li>
                    </ul>
                </div>
            </div>

        </div>

        <br />
        </>
    )
}

export default Section1;