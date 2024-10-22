import rt_arrow from "../../assets/images/rt_arrow_bl.svg";
import red_hat from "../../assets/images/red_hat.svg";
import bg from "../../assets/images/powred_bfimg.png";

function Watsons(){

    return(
        <>
      <section className="pt-0 md:pt-5 w-full">
        <div className="w-full mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a href="https://www.ibm.com/products/watsonx-ai" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <p className="flex items-end justify-center h-3/5 text-2xl text-black">
                  watson<span className="text-blue-600">x</span>.ai
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://www.ibm.com/products/watsonx-data" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg})` }} 
              >
                <p className="flex items-end justify-center h-3/5 text-2xl text-black">
                  watson<span className="text-blue-600">x</span>.data
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://www.ibm.com/products/watsonx-governance" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div
                className="h-60 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg})` }} 
              >
                <p className="flex items-end justify-center h-3/5 text-2xl text-black">
                  watson<span className="text-blue-600">x</span>.governance
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>

            <a href="https://www.redhat.com/en/technologies/all-products" target="_blank" style={{textDecoration:"none",fontWeight:"bold"}}>
              <div className="h-60 bg-gray-100 rounded-lg">
                <p className="flex items-end justify-center h-3/5 text-2xl font-black">
                  <img src={red_hat} alt="Red Hat" />
                </p>
                <div className="flex justify-end px-3 mt-5">
                  <img src={rt_arrow} loading="lazy" alt="arrow" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

        </>
    )
}

export default Watsons