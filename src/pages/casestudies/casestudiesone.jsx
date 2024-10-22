
import casestudiesone from "../../assets/images/casestudies/one.png"
import Casestudiessections from "./casestudiessections"

function Casestudiesone(){

    return(
        <>
        <section className="relative w-full h-screen">
    {/* Background image */}
    <img 
        src={casestudiesone} // replace this with your image path
        alt="Blog Background" 
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text content on white background */}
    <div className="absolute bottom-0 left-20 bg-white text-black p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-10">
        {/* Subtitle */}
       
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Leading Healthcare Services Provider Trusts SBA Info for their Security and Compliance Requirements
        </h1>
        
    </div>
</section>
<section className="min-h-screen bg-gray-100 py-10 px-5">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" style={{ fontFamily: "League Spartan" }}>
      Leading Healthcare Services Provider Trusts SBA Info for their Security and Compliance Requirements
    </h1>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Client</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our customer is a leading healthcare provider dedicated to creating relevant and affordable technology solutions aimed at improving clinical outcomes. They empower healthcare professionals operating in rural areas to deliver better medical facilities and diagnostics while maintaining affordability. With a team of over 200 experienced professionals and a leadership board boasting over 17 years of experience, they are committed to enhancing India’s healthcare landscape.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Business Need</h2>
      <p className="text-lg text-gray-700 mb-4">
        With multi-location and multi-device access requirements to support business operations, our client faced significant security challenges inherent in the highly regulated healthcare industry. The allocation of manpower to manage security and compliance needs was a major concern due to a shortage of skilled resources. To effectively address security threats posed by business applications hosted across various domains while maintaining operational efficiency and compliance, they sought a centralized IT dashboard for enhanced visibility and easier maintenance. To meet these needs, they were in search of a trusted technology partner.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
      <p className="text-lg text-gray-700 mb-4">
        After thoroughly assessing the client’s security requirements, SBA Info recommended best-in-class solutions with an optimal product mix and provided exceptional on-demand support services. With strong domain expertise and an understanding of healthcare industry-specific compliance requirements, we delivered a cost-effective solution tailored to address their security and compliance challenges.
      </p>
      <h3 className="text-xl font-semibold mb-4">Specifications of the Solution</h3>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>Desktop Central Enterprise Solution offered as a SaaS Model with a single technician license (Managed Engine).</li>
        <li>Endpoint DLP as a SaaS Model: Trend Micro’s Apex 1.</li>
        <li>Application access and outbound internet security for mobile and remote users (Prisma Access).</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">About SBA Info Solutions Pvt. Ltd.</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info Solutions, commonly known as SBA, provides a comprehensive range of reliable IT services and security solutions across data center, cloud, and information security practices. We serve various sectors including BFSI, Manufacturing, Infrastructure, IT & ITES, and institutional businesses, ensuring that our clients' security and operational needs are met with excellence.
      </p>
    </div>
  </div>
</section>

<Casestudiessections />

        </>
    )
}

export default Casestudiesone