import Blog from "../../assets/videos/Blogs.mp4";
import Contactus from "../common/contact";
import Blogsections from "./blogsections";
import "./style.scss"



function Blogs(){






    return(
        <>
        {/* <section>
        <div className="ai-green-v1">
          <div className="init-ai-section1">
            <div className="abspage12" style={{marginLeft:"-15px",fontSize:"60px"}}>Blogs</div>
            <div className="init-red-bg12 " style={{marginLeft:"500px",backgroundColor:"red"}}>
              Illuminating Ideas, Inspiring Minds            
            </div>
          </div>
          <video autoPlay muted loop>
            <source src={Blog} type="video/mp4" />
          </video>
        </div>
      </section> */}
      <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        {/* Large heading */}
        <div className="text-white text-6xl md:text-8xl font-extrabold">
        Blogs
        </div>

        {/* Centered red box with large text */}
        <div className="bg-red-600 text-white font-extrabold px-10 py-4 mt-6 text-5xl md:text-6xl">
        Illuminating Ideas, Inspiring Minds
        </div>
      </div>

      {/* Background video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={Blog} type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </section>
        

      <section>
        <div className="flex justify-center items-center h-screen py-1">
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl px-1">
            Stay ahead in the business landscape with our comprehensive blog, featuring practical tips, industry trends, and in-depth guides tailored for small business owners and aspiring entrepreneurs.
          </p>
        </div>
      </section>

      
      <Blogsections />
      <Contactus />
        </>
    )
}

export default Blogs