import one from "../../assets/images/casestudies/one.png"
import two from "../../assets/images/casestudies/two.jpeg"
import three from "../../assets/images/casestudies/three.jpeg"
import four from "../../assets/images/casestudies/four.png"
import five from "../../assets/images/casestudies/five.png"
import six from "../../assets/images/casestudies/six.png"
import "./style.scss"

function Casestudiessections(){

    const caseStudies = [
        {
          title: "Leading Healthcare Services Provider Trusts SBA Info for their Security and Compliance Requirements",
          description: "With multi-location and multi-device access requirements to support business need, our customer is driven by security needs of their highly regulated healthcare industry.",
          image:one,
          link: "/Casestudies/Leading-Healthcare-Services-Provider-Trusts-SBA-Info-for-their-Security-and-Compliance-Requirements", // Replace with actual link
        },
        {
          title: "A Leading Non-Banking Financial Company Trusts SBA Info to Protect and Manage their End Point",
          description: "Our client's headquarters and branches are positioned across different states of India to meet their business objective. As the demand for remote workforce capabilities increased day by day, our customer wanted to protect employees' devices.",
          image:two,
          link: "/Casestudies/A-Leading-Non-Banking-Financial-Company-Trusts-SBA-Info-to-Protect-and Manage-their-End-Point", // Replace with actual link
        },
        {
          title: "Leading Multinational Infrastructure Organization Trusts SBA Info for Fast and Reliable Data Recovery & Backup",
          description: "By having multiple domains, managing their AD and LDAP was the client’s raising issue. Hence, our client wanted an extended team to tackle the concern.",
          image:three,
          link: "/Casestudies/Leading-Multinational-Infrastructure-Organization-Trusts-SBA-Info-for-Fast-and-Reliable-Data-Recovery&Backup", // Replace with actual link
        },
        {
          title: "Securing Medical Data and Improving Incident Response: SBA Helps Leading Health tech company implement IBM Qradar",
          description: "Our customer deals with a huge amount of structured/unstructured data, they need to adhere to regulations and guidelines of various industries.",
          image:four,
          link: "/Casestudies/Securing-Medical-Data-and-Improving-Incident-Response:-SBA-Helps-Leading-Health-tech-company-implement-IBM-Qradar", // Replace with actual link
        },
        {
          title: "Efficient Data Management and Enhanced Security: Leading TN Bank's Success with SBA & IBM FS7300",
          description: "Our client wanted to improve data management and protection while accessing high-priority and frequently needed data sets.",
          image:five,
          link: "/Casestudies/Efficient-Data-Management-and-Enhanced-Security:Leading-TN-Bank's-Success-with-SBA&IBM-FS7300", // Replace with actual link
        },
        {
          title: "Boosting Performance and Security: Chennai based Bank's Successful Migration to AIX with IBM Power 9",
          description: "Our customer’s existing high-performance cluster was not supporting their growing demands, and they wanted to deploy a supercomputer of 700TF.",
          image:six,
          link: "/Casestudies/Boosting-Performance-and-Security:Chennai-based-Bank's-Successful-Migration-to-AIX-with-IBM-Power-9", // Replace with actual link
        },
      ];
    return(

        <>
        <section>
  <div className="min-h-screen bg-gray-100 py-10 px-5">
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10 text-black-600" style={{ fontFamily: "league Spartan" }}>
        Case Studies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {caseStudies.map((post, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            {/* Blog Image */}
            <div className="w-full h-48 md:h-64 overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Title */}
            <a href={post.link} style={{ textDecoration: "none" }}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4" style={{fontFamily:"league spartan"}} id="casestudiestitle">{post.title}</h2>
            </a>

            {/* Blog Description */}
            <p className="text-base md:text-lg text-gray-700 mb-6" style={{fontFamily:"league spartan"}}>{post.description}</p>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center">
        <p className="text-gray-500">
          SBA Info Solutions Pvt. Ltd. - Empowering businesses with innovative IT solutions.
        </p>
      </footer>
    </div>
  </div>
</section>
        </>
    )
}

export default Casestudiessections