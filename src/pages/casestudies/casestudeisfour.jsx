
import casestudiesfour from "../../assets/images/casestudies/four.png"
import Casestudiessections from "./casestudiessections"


function Casestudiesfour(){

    return(
        <>
<section className="relative w-full h-screen">
    {/* Background image */}
    <img 
        src={casestudiesfour} // replace this with your image path
        alt="Blog Background" 
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text content on white background */}
    <div className="absolute bottom-0 left-20 bg-white text-black p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-10">
        {/* Subtitle */}
       
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{fontFamily:"league spartans"}}>
        Securing Medical Data and Improving Incident Response: SBA Helps Leading Health tech company implement IBM Qradar
        </h1>
       
    </div>
</section>

<section className="min-h-screen bg-gray-100 py-10 px-5">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" style={{ fontFamily: "league Spartans" }}>
      Securing Medical Data and Improving Incident Response: SBA Helps Leading Health Tech Company Implement IBM QRadar
    </h1>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10" id="details">
      <h2 className="text-2xl font-semibold mb-4">The Client</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our client is a leading health tech company focused on providing innovative solutions to enhance patient care and streamline healthcare processes. With a commitment to data security and regulatory compliance, they handle sensitive medical data and require robust security measures to protect patient information and maintain trust within the healthcare ecosystem.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Business Need</h2>
      <p className="text-lg text-gray-700 mb-4">
        In an era where cyber threats are increasingly sophisticated, the health tech company faced significant challenges in securing sensitive medical data. They needed a solution to enhance their incident response capabilities, monitor network security in real-time, and ensure compliance with healthcare regulations. The organization sought a trusted partner to implement a comprehensive security information and event management (SIEM) solution to address these needs.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info collaborated closely with the client to design and deploy IBM QRadar, a powerful SIEM platform that provides real-time visibility into security incidents and vulnerabilities. This implementation aimed to strengthen the organization’s security posture and improve incident response times.
      </p>
      <h3 className="text-xl font-semibold mb-4">Key Features of the Solution</h3>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Real-time monitoring and analysis of security events across the network.</li>
        <li>Automated incident detection and alerting to enable swift response to potential threats.</li>
        <li>Comprehensive reporting and analytics to meet regulatory compliance requirements.</li>
        <li>Integration with existing security tools for a holistic approach to data protection.</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">About SBA Info Solutions Pvt. Ltd.</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info Solutions, known as SBA, specializes in delivering IT services and security solutions tailored to the needs of various industries, including healthcare. With a focus on innovation and customer satisfaction, we empower organizations to enhance their security frameworks and ensure the protection of critical data.
      </p>
    </div>
  </div>
</section>

<Casestudiessections />

        </>
    )
}

export default Casestudiesfour