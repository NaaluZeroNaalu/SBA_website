
import casestudiesthree from "../../assets/images/casestudies/three.jpeg"
import Casestudiessections from "./casestudiessections"

function Casestudiesthree(){


    return(
        <>
<section className="relative w-full h-screen">
    {/* Background image */}
    <img 
        src={casestudiesthree} // replace this with your image path
        alt="Blog Background" 
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text content on white background */}
    <div className="absolute bottom-0 left-20 bg-white text-black p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-10">
        {/* Subtitle */}
       
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{fontFamily:"league spartans"}}>
        Leading Multinational Infrastructure Organization Trusts SBA Info for Fast and Reliable Data Recovery & Backup
        </h1>
    </div>
</section>
<section className="min-h-screen bg-gray-100 py-10 px-5" id="details">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" style={{ fontFamily: "League Spartans" }}>
      Leading Multinational Infrastructure Organization Trusts SBA Info for Fast and Reliable Data Recovery & Backup
    </h1>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Client</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our client is a leading multinational infrastructure organization dedicated to developing and managing large-scale projects across various sectors, including transportation, energy, and utilities. With a strong commitment to sustainability and innovation, they operate in multiple countries, leveraging advanced technologies to enhance operational efficiency and deliver exceptional value to their stakeholders.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Business Need</h2>
      <p className="text-lg text-gray-700 mb-4">
        As a global leader in infrastructure, our client manages vast amounts of critical data across various projects. Ensuring the integrity and availability of this data is essential for their operations. The organization faced challenges related to data loss risks, long recovery times, and the need for robust backup solutions. They sought a trusted partner to implement a fast and reliable data recovery and backup solution to safeguard their valuable information and ensure business continuity.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info worked closely with the client to design and implement a comprehensive data recovery and backup strategy tailored to their specific needs. Our solution focused on enhancing data protection, minimizing downtime, and ensuring quick recovery in the event of data loss.
      </p>
      <h3 className="text-xl font-semibold mb-4">Specifications of the Solution</h3>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Deployment of a scalable cloud-based backup solution for real-time data protection.</li>
        <li>Implementation of automated backup schedules to ensure data is consistently backed up without manual intervention.</li>
        <li>Integration of disaster recovery as a service (DRaaS) to enable rapid recovery of critical systems and data.</li>
        <li>Regular testing of backup and recovery processes to ensure reliability and effectiveness.</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">About SBA Info Solutions Pvt. Ltd.</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info Solutions, known as SBA, is a leading provider of IT services and security solutions, specializing in data center, cloud, and information security practices for diverse industries, including BFSI, Manufacturing, and Infrastructure. Our mission is to empower organizations with innovative solutions that enhance data integrity, security, and operational efficiency.
      </p>
    </div>
  </div>
</section>


<Casestudiessections />
        </>
    )
}

export default Casestudiesthree