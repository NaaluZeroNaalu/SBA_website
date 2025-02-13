
import sadeesh from "./sadeesh.png"
import kandhan from "./kandhan.jpg"
import venkatesh from "./venkatesh.jpg"
import viswa from "./viswanathan.jpg"

function Leadership(){

    return(
        <>
        <br /><br /><br />
        
<div class="container py-5">
    <h2 class="text-center mb-4">Leadership Team</h2>
    <div class="row g-4">
      
        {/* <div class="col-md-4">
            <div class="card shadow-sm border-0 rounded-3">
                <img src="https://www.sbainfo.in/images/team/venkatesh.jpg" class="card-img-top" alt="Venkatesh" style={{height:"250px",objectFit:"cover"}}/>
                <div class="card-body">
                    <h5 class="card-title">Venkatesh A</h5>
                    <p class="card-text text-muted">Specialist in Generative AI and Data Technologies</p>
                    <p class="card-text">
                        Venkatesh works with global change makers IBM to specialize in implementing generative AI, LLMs, and cutting-edge data technologies to address complex business problems. A certified expert on WatsonX, he's passionate about exploring uncharted territories to find innovative solutions.
                    </p>
                    <p><strong>Contributors:</strong> 
                        <a href="https://www.linkedin.com/in/divya-s-15a947245/" target="_blank">Divya S</a>, 
                        <a href="https://www.linkedin.com/in/reshma-rao-8011798/" target="_blank">Reshma Rao</a>
                    </p>
                </div>
            </div>
        </div> */}

       
        <div class="col-md-4">
            <div class="card shadow-sm border-0 rounded-3">
                <img src={venkatesh} class="card-img-top" alt="Venkatesh" style={{height:"250px",objectFit:"cover"}} />
                <div class="card-body">
                    <a href="https://www.linkedin.com/in/venkatesh95/">
                    
                    <h5 class="card-title">Venkatesh A</h5>
                    </a>
                    <p class="card-text text-muted">Generative AI Expert</p>
                    <p class="card-text">
                        Venkatesh works with global change makers IBM to specialize in implementing generative AI, LLMs, and cutting-edge data technologies to address complex business problems. A certified expert on WatsonX, he's passionate about exploring uncharted territories to find innovative solutions.
                    </p>
                </div>
            </div>
        </div>

      
        <div class="col-md-4">
            <div class="card shadow-sm border-0 rounded-3">
                <img src={kandhan} class="card-img-top" alt="Kanthanathan" style={{height:"250px",objectFit:"cover"}} />
                <div class="card-body">
                    <a href="https://www.linkedin.com/in/kanthanathan/">
                    <h5 class="card-title">Kanthanathan S</h5>
                    </a>
                    <p class="card-text text-muted">Technology Strategist & Transformation Leader</p>
                    <p class="card-text">
                        Kanthanathan is an experienced thought leader and technologist with over 20 years in the IT Industry. He is associated with SBA since its inception and is responsible for technology acquisitions and propelling the business transformation of SBA from a system integrator to a technology services firm.
                    </p>
                </div>
            </div>
        </div>

      
        <div class="col-md-4">
            <div class="card shadow-sm border-0 rounded-3">
                <img src={sadeesh} class="card-img-top" alt="Sadeeshkumar G" style={{height:"250px",objectFit:"cover"}} />
                <div class="card-body">
                    <a href="https://www.linkedin.com/in/sadeesh-kumar-gopalan-a6a60217/">
                    <h5 class="card-title">Sadeeshkumar G</h5>
                    </a>
                    <p class="card-text text-muted">Manager, Service and Delivery</p>
                    <p class="card-text">
                        Sadeesh is the Manager, Service and Delivery, at SBA Info solutions and has been with the organization for more than 15+ years. Having started his career as a trainee Engineer at SBA, he later realized his growth from a Trainee Engineer to Manager - Service Delivery.
                    </p>
                </div>
            </div>
        </div>

      
        <div class="col-md-4">
            <div class="card shadow-sm border-0 rounded-3">
                <img src={viswa} class="card-img-top" alt="Viswanathan" style={{height:"250px",objectFit:"cover"}} />
                <div class="card-body">
                    <a href="https://www.linkedin.com/in/viswanathan-narayanan-3a328146/">
                    
                    <h5 class="card-title">Viswanathan N</h5>
                    </a>
                    <p class="card-text text-muted">Head of Service and Delivery</p>
                    <p class="card-text">
                        Viswa is the head of Service and delivery and is responsible for managing and growing the practice and delivery functions at SBA. With over 20+ years of experience as an IT technical, service delivery & solution architect, Viswa’s primary focus is creating a good customer experience.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default Leadership;