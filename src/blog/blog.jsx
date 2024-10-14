
import vid from "./dataai.mp4"
import "./blog.css"
import Displayvideo from "./video"

function Blog(){

    return(

        <>
        <Displayvideo />

        <div className="stay">
       <p> Stay ahead in the business landscape with our comprehensive blog, featuring practical tips, industry trends, and in-depth guides tailored <br /> for small business owners and aspiring entrepreneurs.</p>
        </div>

        <h1 style={{textAlign:"center",color:"blue"}}>Blog Post</h1>

        <div className="post1 container">
            <h3>Here's why a generative model alone is never good enough</h3>
            <p style={{fontWeight:"lighter"}}>By Venkatesh A on 17-02-2024</p>
            <p>Artificial intelligence has made progress in recent years, and one of the most important advancements is generative AI. Generative AI offers immense potential for innovation and efficiency, spanning diverse fields.</p>
            <button className="btn btn-primary" style={{borderRadius:"20px"}}>Read More</button>
        </div>
        <div className="post2 container mt-5">
            <h3>How to pick the right Generative AI Studio for your Enterprise?</h3>
            <p>By Venkatesh A on 04-02-2024</p>
            <p>The advent of Gemini marks Google DeepMind's foray into the realm of next-generation AI models, aiming to surpass the capabilities of OpenAI's ChatGPT.</p>
            <button className="btn btn-primary" style={{borderRadius:"20px"}}>Read More</button>

        </div>
        <div className="post3 container mt-5">

            <h3>How can Large Language Models grow your productivity by 5X</h3>
            <p>By Venkatesh A on 16-01-2024</p>
            <p>Unlocking the secrets of Large Language Models (LLMs) could hold the key in ensuring Elon Musk-like productivity in 2024.</p>
            <button className="btn btn-primary" style={{borderRadius:"20px"}}>Read More</button>
        </div>
        <div className="post4 container mt-5">

            <h3>Truths About Generative AI Every IT Leader Must Know</h3>
            <p>By Venkatesh A on 19-10-2023</p>
            <p>As with any subset of artificial intelligence, Generative AI has rapidly evolved in recent years, offering incredible potential and applications across various industries.</p>
            <button className="btn btn-primary" style={{borderRadius:"20px"}}>Read More</button>
        </div>
        <div className="post5 container mt-5">
            <h3>8 Secrets to Choosing the Perfect Email Service Provider: A Certified Guide</h3>
            <p>By Venkatesh A on 12-06-2023</p>
            <p>In today's digital era, selecting the perfect email service provider is crucial for businesses of all sizes. A reliable and efficient email service plays a vital role in communication, collaboration, and maintaining a professional image.</p>
            <button className="btn btn-primary" style={{borderRadius:"20px"}}>Read More</button>

        </div>
        <br />
        <p style={{textAlign:"center",fontWeight:"lighter"}}>SBA Info Solutions Pvt. Ltd. - Empowering businesses with innovative IT solutions.</p>
        <br />
        </>
    )
}

export default Blog