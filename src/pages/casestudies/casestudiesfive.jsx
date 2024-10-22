
import casestudiesfive from "../../assets/images/casestudies/five.png"
import Casestudiessections from "./casestudiessections"

function Casestudiesfive(){

    return(
        <>
        <section className="relative w-full h-screen">
    {/* Background image */}
    <img 
        src={casestudiesfive} // replace this with your image path
        alt="Blog Background" 
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text content on white background */}
    <div className="absolute bottom-0 left-20 bg-white text-black p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-10">
        {/* Subtitle */}
       
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{fontFamily:"league spartans"}}>
        Efficient Data Management and Enhanced Security: Leading TN Bank's Success with SBA & IBM FS7300
        </h1>
        
    </div>
</section>

<section className="min-h-screen bg-gray-100 py-10 px-5" id="details">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" style={{ fontFamily: "League Spartans" }}>
      Efficient Data Management and Enhanced Security: Leading TN Bank's Success with SBA & IBM FS7300
    </h1>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Client</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our client is a leading bank in Tamil Nadu, dedicated to providing a range of financial services to its customers. With a focus on innovation and customer satisfaction, the bank continuously seeks ways to enhance its data management and security practices to protect sensitive financial information.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Business Need</h2>
      <p className="text-lg text-gray-700 mb-4">
        The bank faced significant challenges related to data management, security, and compliance. As the volume of data grew, so did the need for a reliable and efficient data storage solution. The bank required a system that not only managed data effectively but also provided robust security measures to protect against potential threats and breaches.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info partnered with the bank to implement the IBM FS7300, a cutting-edge storage solution designed to enhance data management and security. This implementation enabled the bank to optimize its data storage capabilities while ensuring compliance with industry regulations.
      </p>
      <h3 className="text-xl font-semibold mb-4">Key Features of the Solution</h3>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        <li>High-performance storage with advanced data protection features.</li>
        <li>Scalable architecture to accommodate growing data needs.</li>
        <li>Enhanced security protocols to safeguard sensitive financial data.</li>
        <li>Seamless integration with existing IT infrastructure for improved efficiency.</li>
      </ul>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
      <h2 className="text-2xl font-semibold mb-4">About SBA Info Solutions Pvt. Ltd.</h2>
      <p className="text-lg text-gray-700 mb-4">
        SBA Info Solutions, also known as SBA, is committed to delivering comprehensive IT services and security solutions tailored to the needs of the banking and finance sector. Our expertise helps organizations enhance their data management practices while ensuring robust security measures are in place.
      </p>
    </div>
  </div>
</section>


<Casestudiessections />
        </>
    )
}

export default Casestudiesfive