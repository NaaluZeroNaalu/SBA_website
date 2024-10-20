import "./style.scss"
import CaseStudys from "../../assets/videos/CaseStudy.mp4";
import Contactus from "../common/contact";


function Casestudies(){


  const caseStudies = [
    {
      title: "Leading Healthcare Services Provider Trusts SBA Info for their Security and Compliance Requirements",
      description: "With multi-location and multi-device access requirements to support business need, our customer is driven by security needs of their highly regulated healthcare industry.",
      link: "https://ww1.sbainfo.in/case-study/1/leading-healthcare-services-provider-trusts-sba-info-for-their-security-and-compliance-requirements", // Replace with actual link
    },
    {
      title: "A Leading Non-Banking Financial Company Trusts SBA Info to Protect and Manage their End Point",
      description: "Our client's headquarters and branches are positioned across different states of India to meet their business objective. As the demand for remote workforce capabilities increased day by day, our customer wanted to protect employees' devices.",
      link: "https://ww1.sbainfo.in/case-study/2/a-leading-non-banking-financial-company-trustssba-info-to-protect-and-manage-their-end-point", // Replace with actual link
    },
    {
      title: "Leading Multinational Infrastructure Organization Trusts SBA Info for Fast and Reliable Data Recovery & Backup",
      description: "By having multiple domains, managing their AD and LDAP was the client’s raising issue. Hence, our client wanted an extended team to tackle the concern.",
      link: "https://ww1.sbainfo.in/case-study/3/multinational-bpo-eases-data-portability-and-compliance-adherence-with-cost-effective-mailing-solution", // Replace with actual link
    },
    {
      title: "Securing Medical Data and Improving Incident Response: SBA Helps Leading Health tech company implement IBM Qradar",
      description: "Our customer deals with a huge amount of structured/unstructured data, they need to adhere to regulations and guidelines of various industries.",
      link: "https://ww1.sbainfo.in/case-study/4/sba-info-supports-leading-global-analytics-provider-with-arcons-privileged-access-management-pam-solution", // Replace with actual link
    },
    {
      title: "Efficient Data Management and Enhanced Security: Leading TN Bank's Success with SBA & IBM FS7300",
      description: "Our client wanted to improve data management and protection while accessing high-priority and frequently needed data sets.",
      link: "https://ww1.sbainfo.in/case-study/5/leading-multinational-infrastructure-organization-trusts-sba-info-for-fast-and-reliable-data-recovery-backup", // Replace with actual link
    },
    {
      title: "Boosting Performance and Security: Chennai based Bank's Successful Migration to AIX with IBM Power 9",
      description: "Our customer’s existing high-performance cluster was not supporting their growing demands, and they wanted to deploy a supercomputer of 700TF.",
      link: "https://ww1.sbainfo.in/case-study/6/sba-info-supports-a-leading-higher-education-research-institute-with-the-implementation-of-high-performing-supercomputers", // Replace with actual link
    },
  ];

    return(
        <>
        {/* <section>
        <div className="ai-green-v1">
          <div className="init-ai-section1">
            <div className="abspage14" style={{marginLeft:"350px"}}>Case Studies</div>
            <div className="init-red-bg14 " style={{marginLeft:"190px"}}>
              Real Results, Remarkable Journeys
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={CaseStudys} type="video/mp4" />
          </video>
        </div>
      </section> */}
      <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold">
        Case Studies
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl">
        Real Results, Remarkable Journeys
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={CaseStudys} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>

      {/* <section>
        <h1>
        Curious about how similar businesses have achieved success with our solutions?

Our case studies at SBA Info Solutions share compelling stories of how our clients have overcome obstacles and reached their goals. 

These detailed accounts provide actionable insights into how our solutions can benefit your business, helping you make informed decisions and drive your own success.
        </h1>
      </section> */}

      <section>
        <div className="min-h-screen bg-gray-100 py-10 px-5">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Case Studies</h1>

            {/* Flexbox for two boxes in one line */}
            <div className="flex flex-wrap justify-between gap-10">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full sm:w-[48%]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{study.title}</h2>
                  {/* <p className="text-gray-700 mb-4">{study.description}</p> */}
                  <a
                    href={study.link} // Link to individual case study
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security measure
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full font-semibold shadow-md transition-transform duration-200 hover:bg-blue-700 hover:shadow-lg"
                  style={{textDecoration:"none"}}
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>

            <footer className="mt-10 text-center">
              <p className="text-gray-500">SBA Info Solutions Pvt. Ltd. - Elevating your IT services with comprehensive solutions.</p>
            </footer>
          </div>
        </div>
      </section>

      <Contactus />
        </>
    )
}


export default Casestudies