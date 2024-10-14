import bi from "./images/bi.svg"
import "./styles/section4.css"

function Section4(){

    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col">
                    <img src={bi} alt="" />
                </div>
                <div className="col">
                    <h1>Media</h1>
                    <p>We offer AI-driven services for the media industry:</p>
                    <ul>
                        <li>Content Creation: AI-generated content</li>
                        <li>Summarization: Condensing complex information</li>
                        <li>Entity Extraction: Identifying key entities</li>
                        <li>Classification: Organizing data for better insights.</li>
                        <li>Efficiency Gains: Boosting productivity, reducing costs</li>
                    </ul>
                    <p>Our solutions help media organizations achieve more with less</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section4