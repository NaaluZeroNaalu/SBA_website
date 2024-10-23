
import blogone from "../../assets/images/blogs/one.png"
import Contactus from "../common/contact"
import Blogsections from "./blogsections"

function Blogone(){

    return(
        <>


<section className="relative w-full h-screen">
    {/* Background image */}
    <img 
        src={blogone} // replace this with your image path
        alt="Blog Background" 
        className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Text content on white background */}
    {/* <div className="absolute bottom-0 left-20 bg-white text-black p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 z-10">
       
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Here's why a generative model alone is never good enough
        </h1>
        
    </div> */}
</section>
<section className="min-h-screen bg-gray-100 py-10 px-5">
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800" style={{ fontFamily:"league spartan"}}>
    Here's why a generative model alone is never good enough
    </h1>
  </div>

  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10" >
  <p className="text-sm md:text-lg text-gray-700 mb-4">
            Artificial intelligence has made progress in recent years, and one of the most important advancements is generative AI. Generative AI offers immense potential for innovation and efficiency, spanning diverse fields. It can make it easier to interpret and understand existing content and automatically create new content.
        </p>
        <p className="text-sm md:text-lg text-gray-700 mb-4" >
        Yet, its deployment mandates a nuanced approach,
         addressing ethical concerns and potential biases.
        Generative AI models, including those trained on large internet datasets, 
        can produce outputs that may be inaccurate, biased, or inappropriate.
        </p>
</div>

  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
  <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4" >Drawbacks of Generative AI</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
            <li><strong>Ethical and Biased Outputs:</strong> Generative models can inadvertently generate biased or politically incorrect content.</li>
            <li><strong>Computational Requirements:</strong> Advanced generative AI models demand substantial computational power, leading to higher costs.</li>
            <li><strong>Security and Privacy Concerns:</strong> There are potential risks associated with using generative AI for malicious purposes.</li>
            <li><strong>Model Explainability and Repeatability:</strong> It's difficult to understand how these models generate outputs.</li>
            <li><strong>Scalability and Integration Challenges:</strong> Incorporating generative AI into business processes can be complex.</li>
        </ul>

</div>

  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
  <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">What is Fine-Tuning in Generative AI?</h2>
        <p className="text-sm md:text-lg text-gray-700 mb-4">
            Fine-tuning customizes pre-trained models for specific tasks or behaviors, allowing us to leverage general knowledge for specific applications.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
  <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white shadow-md rounded" style={{ fontFamily:"league spartan"}}>
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                        <th className="py-3 px-4">Aspect</th>
                        <th className="py-3 px-4">Pre-Training</th>
                        <th className="py-3 px-4">Fine-Tuning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="py-3 px-4">Data</td>
                        <td className="py-3 px-4">Large, general corpus</td>
                        <td className="py-3 px-4">Smaller, domain-specific dataset</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-3 px-4">Objective</td>
                        <td className="py-3 px-4">Understand general language patterns</td>
                        <td className="py-3 px-4">Specialize in a specific task/domain</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-3 px-4">Training</td>
                        <td className="py-3 px-4">From scratch or from an existing base</td>
                        <td className="py-3 px-4">Further training of a pre-trained model</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-3 px-4">Outcome</td>
                        <td className="py-3 px-4">General-purpose language understanding</td>
                        <td className="py-3 px-4">Task/domain-specific performance</td>
                    </tr>
                </tbody>
            </table>
        </div>



</div>


</div>

 
<div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-10">
 
 <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">The Future of Business with Generative AI</h2>
       <p className="text-sm md:text-lg text-gray-700 mb-4">
           With fine-tuning, Generative AI presents a wide array of opportunities and benefits for businesses seeking to transform their operations and drive innovation.
       </p>

       {/* Consumer Perspective */}
       <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Consumers’ POV: Distrust</h2>
       <p className="text-sm md:text-lg text-gray-700 mb-4">
           As the generative AI hype grows, consumers express concerns about data security risks and unethical use. The importance of transparency and human oversight is paramount.
       </p>

       {/* AI Governance Section */}
       <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Why is AI Governance Needed?</h2>
       <ul className="list-disc list-inside mb-4 text-gray-600" >
           <li>Respecting ethical and moral considerations.</li>
           <li>Complying with legal and regulatory requirements.</li>
           <li>Managing risks effectively.</li>
           <li>Maintaining trust through transparency.</li>
       </ul>



</div>


</section>


    <Blogsections />


<Contactus />

        </>
    )
}

export default Blogone