
import casestudiestwo from "../../assets/images/casestudies/two.jpeg"
import Casestudiessections from "./casestudiessections"

function Casestudiestwo(){


    return(
        <>
        <section className="relative w-full h-screen">
    {/* Background image */}
    <img 
        src={casestudiestwo} // replace this with your image path
        alt="Blog Background" 
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text content on white background */}
    <div className="absolute bottom-0 left-20 bg-white text-black p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-10">
        {/* Subtitle */}
       
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        A Leading Non-Banking Financial Company Trusts SBA Info to Protect and Manage their Endpoints
        </h1>
     
    </div>
</section>
<section className="min-h-screen bg-gray-100 py-10 px-5">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" style={{ fontFamily: "League Spartan" }}>
      A Leading Non-Banking Financial Company Trusts SBA Info to Protect and Manage their Endpoints
    </h1>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Client</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our client is a leading non-banking financial company (NBFC) committed to providing innovative financial solutions. With a focus on customer-centric services, they empower individuals and businesses to achieve their financial goals. Their extensive portfolio includes personal loans, business financing, and investment products, supported by a dedicated team of experts in the financial sector.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Business Need</h2>
      <p className="text-lg text-gray-700 mb-4">
        As a non-banking financial institution, our client handles sensitive customer information and financial data, making endpoint security a top priority. With a distributed workforce accessing systems remotely, they faced challenges in managing and securing endpoints across multiple locations. The need for a robust solution to protect against cyber threats while ensuring compliance with industry regulations became paramount. They sought a reliable technology partner to enhance their endpoint security measures.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
      <p className="text-lg text-gray-700 mb-4">
        After assessing the client's unique requirements, SBA Info implemented a comprehensive endpoint security solution tailored to their needs. Our approach involved leveraging advanced technologies and best practices to ensure maximum protection and management of their endpoints.
      </p>
      <h3 className="text-xl font-semibold mb-4">Specifications of the Solution</h3>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Deployment of an advanced Endpoint Detection and Response (EDR) solution to monitor and protect against threats.</li>
        <li>Implementation of Data Loss Prevention (DLP) measures to secure sensitive financial data.</li>
        <li>Integration of mobile device management (MDM) to ensure secure access for remote users.</li>
        <li>Regular security assessments and updates to maintain compliance with industry standards.</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">About SBA Info Solutions Pvt. Ltd.</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info Solutions, widely known as SBA, is a trusted provider of IT services and security solutions tailored for various industries, including BFSI, Manufacturing, and IT & ITES. We specialize in delivering comprehensive data center, cloud, and information security practices to ensure our clients can operate securely and efficiently in today's digital landscape.
      </p>
    </div>
  </div>
</section>

<Casestudiessections />

        </>
    )
}

export default Casestudiestwo