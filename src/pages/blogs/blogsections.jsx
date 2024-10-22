import one from "../../assets/images/blogs/one.jpeg"
import two from "../../assets/images/blogs/two.jpeg"
import three from "../../assets/images/blogs/three.jpeg"
import four from "../../assets/images/blogs/four.jpeg"
import five from "../../assets/images/blogs/five.png"
import six from "../../assets/images/blogs/six.png"

function Blogsections(){


    const blogPosts = [
        {
          title: "Here's why a generative model alone is never good enough",
          author: "Venkatesh A",
          date: "17-02-2024",
          image:one,
          description: "Artificial intelligence has made progress in recent years, and one of the most important advancements is generative AI. Generative AI offers immense potential for innovation and efficiency, spanning diverse fields.",
          link: "/Blogs/Here's-why-A-Generative-Model-Alone-Is-Never-Good-Enough" // Add a link for navigation
        },
        {
          title: "How to pick the right Generative AI Studio for your Enterprise?",
          author: "Venkatesh A",
          date: "04-02-2024",
          image:two,
          description: "The advent of Gemini marks Google DeepMind's foray into the realm of next-generation AI models, aiming to surpass the capabilities of OpenAI's ChatGPT.",
          link: "/Blogs/How-to-pick-the-right-Generative-AI-Studio-for-your-Enterprise?"
        },
        {
          title: "How can Large Language Models grow your productivity by 5X",
          author: "Venkatesh A",
          date: "16-01-2024",
          image:three,
          description: "Unlocking the secrets of Large Language Models (LLMs) could hold the key in ensuring Elon Musk-like productivity in 2024.",
          link:"/Blogs/How-can-Large-Language-Models-grow-your-productivity-by-5X"
        },
        {
          title: "Truths About Generative AI Every IT Leader Must Know",
          author: "Venkatesh A",
          date: "19-10-2023",
          image:four,
          description: "As with any subset of artificial intelligence, Generative AI has rapidly evolved in recent years, offering incredible potential and applications across various industries.",
          link: "/Blogs/Truths-About-Generative-AI-Every-IT-Leader-Must-Know" // Add a link for navigation
        },
        {
          title: "Software-defined approach – Defining the Future",
          author: "Venkatesh A",
          date: "12-06-2023",
          image:five,
          description: "In today's digital era, selecting the perfect email service provider is crucial for businesses of all sizes. A reliable and efficient email service plays a vital role in communication, collaboration, and maintaining a professional image.",
          link: "/Blogs/Software-defined-approach–Defining-the-Future" // Add a link for navigation
        },
        {
          title: "Cyber Security Drivers of the BFSI Sector in India",
          author: "Venkatesh A",
          date: "16-04-2023",
          image:six,
          description: "Businesses of all sizes are facing pressure to optimize IT and address digital transformation.",
          link: "/Blogs/Cyber-Security-Drivers-of-the-BFSI-Sector-in-India" // Add a link for navigation
        },
        
      ];
    


    return(
        <>

<section>
        <div className="min-h-screen bg-gray-100 py-10 px-5">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10 text-black-600" style={{ fontFamily: "League Spartan" }}>
              Blog Posts
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  {/* Blog Image */}
                  <div className="w-full h-64 overflow-hidden mb-4" >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Blog Title */}
                  <a href={post.link} style={{textDecoration:"none"}}>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{fontFamily:"league spartans"}}>{post.title}</h2>
                  </a>

                  {/* Blog Description */}
                  <p className="text-lg text-gray-700 mb-6" style={{fontFamily:"league spartans"}}>{post.description}</p>
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

export default Blogsections