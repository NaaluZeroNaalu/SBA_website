import bi from "./images/bi.svg"
import "./styles/section5.css"


function Section7(){

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={bi} alt="" />
                </div>
                <div className="col">
                    <h1>Telecom/BPO KPO</h1>
                    <h3>Enhancing Call Center Efficiency</h3>
                    <ul>
                        <li>Speech Transcription: Accurate voice-to-text transcription.</li>
                        <li>Voice Agent - Speech Synthesis: AI-powered voice synthesis.</li>
                        <li>Agent Assist: Real-time assistance for boosted productivity and morale.</li>
                        <li>Sentiment and Call Center Analytics: Insights for continuous improvement.</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section7