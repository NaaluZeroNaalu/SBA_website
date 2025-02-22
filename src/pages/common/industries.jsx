import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/healthcare.png";
import ind4 from "../../assets/images/ind_4.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState, React } from "react";

function Industriesweserve() {
  const industries = [
    {
      title: "Manufacturing",
      img: ind1,
      description: "AI forecasts equipment failures, minimizing downtime by 43%, automates supply chains, and enhances quality control by identifying defects instantly.",
    },
    {
      title: "BFSI",
      img: ind2,
      description: "AI streamlines 90% of customer inquiries, enhancing efficiency and cutting costs while detecting fraud in real-time.",
    },
    {
      title: "Healthcare",
      img: ind3,
      description: "AI speeds up drug discovery and reduces research expenses, improves diagnostics through image analysis, and supports patient care with virtual assistants.",
    },
    {
      title: "IT/ITES",
      img: ind4,
      description: "AI decreases IT support tickets by 70%, automates monitoring and resolution, and generates 60% of code, accelerating development.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <section className="py-5 bg-light" id="industriesweserve">
        <h1 className="display-4 text-center mb-4" style={{ fontWeight: "bold" }} id="inds">
          Industries We Serve
        </h1>
<br /><br />
        <div className="container">
          <div className="row justify-content-between" >
            {industries.map((industry, index) => (
              <div
              id="industriescontent"
                key={index}
                className={`col-12 col-md-3 mb-4 position-relative`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  window.location.href = "/industries"; 
                }}
                style={{
                  transform: index % 2 === 0 ? 'translateY(20px)' : 'translateY(-20px)', 
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <div className="card overflow-hidden">
                  <img src={industry.img} className="card-img-top" alt={industry.title} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title text-white">{industry.title}</h5>
                  </div>
                  <div
                    className={`card-body text-white opacity-${hoveredIndex === index ? '100' : '0'} position-absolute top-0 left-0 right-0 bottom-0 d-flex flex-column justify-content-center align-items-center transition-opacity duration-300`}
                    style={{
                      backgroundColor: "#3f649a",
                      fontFamily: "league spartan",
                    }}
                  >
                    <h5 className="card-title">{industry.title}</h5>
                    <p style={{ textAlign: "center", fontFamily: "league spartan" }}>
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <br />
          </div>
        </div>
      </section>
    </>
  );
}

export default Industriesweserve