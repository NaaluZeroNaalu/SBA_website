import ind1 from "../../assets/images/ind_1.png";
import ind2 from "../../assets/images/ind_2.png";
import ind3 from "../../assets/images/healthcare.png";
import ind4 from "../../assets/images/ind_4.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState, useEffect, React, useRef, createContext, useContext, useReducer } from "react";
import Home1 from "../../assets/videos/wait1.webm";
import Home6 from "../../assets/videos/Home6.mp4";
import Home9 from "../../assets/videos/Home9.mp4";
import Home13 from "../../assets/videos/Home13.mp4";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import com1 from "../../assets/images/partners/company1.png";
import com2 from "../../assets/images/partners/company2.png";
import com3 from "../../assets/images/partners/company3.png";
import com4 from "../../assets/images/partners/company4.png";
import com5 from "../../assets/images/partners/company5.png";
import com6 from "../../assets/images/partners/company6.png";
import com7 from "../../assets/images/partners/company7.png";
import com8 from "../../assets/images/partners/company8.png";
import com9 from "../../assets/images/partners/company9.png";
import com10 from "../../assets/images/company10.jpeg";
import com11 from "../../assets/images/partners/company11.png";
import com12 from "../../assets/images/partners/company12.png";
import com13 from "../../assets/images/partners/company13.png";
import com14 from "../../assets/images/partners/company14.png";
import com15 from "../../assets/images/partners/company15.png";
import com16 from "../../assets/images/partners/company16.png";
import com17 from "../../assets/images/partners/company17.png";
import com18 from "../../assets/images/partners/company18.png";
import com19 from "../../assets/images/partners/company19.png";
import com20 from "../../assets/images/partners/company20.jpeg";
import com21 from "../../assets/images/partners/company21.png";
import com22 from "../../assets/images/partners/company22.png";
import com23 from "../../assets/images/partners/company23.png";
import com24 from "../../assets/images/partners/company24.png";
import com25 from "../../assets/images/partners/company25.png";
import com26 from "../../assets/images/partners/company26.png";
import com27 from "../../assets/images/partners/company27.png";
import com28 from "../../assets/images/partners/company28.jpg";
import com29 from "../../assets/images/partners/company29.jpg";
import com30 from "../../assets/images/partners/company30.jpeg";
import com31 from "../../assets/images/partners/company31.jpeg";
import com32 from "../../assets/images/partners/company32.png";
import com33 from "../../assets/images/partners/company33.png";
import com34 from "../../assets/images/partners/company34.png";
import com35 from "../../assets/images/partners/company35.png";
import com36 from "../../assets/images/partners/company36.png";
import com37 from "../../assets/images/partners/company37.jpg";
import com38 from "../../assets/images/partners/company38.png";
import com39 from "../../assets/images/partners/company39.png";
import com40 from "../../assets/images/partners/company40.jpg";
import com41 from "../../assets/images/partners/company41.png";
import com42 from "../../assets/images/partners/company42.png";
import redhat from "../../assets/images/trustedpartners/redhat.png"
import ibm from "../../assets/images/trustedpartners/ibm.png"
import { FaCheck } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import emailjs from 'emailjs-com';
import Certifications from "../common/certifications";
import LazyLoad from 'react-lazyload';
import Sidecontent from "../sidecontact/side";



function Test(){

//leadership team
  const [items, Getitems] = useState([])
  const [product, Getproduct] = useState("")
  
   return(
    <>
    <div class="blog-author">
    <div class="p-3">
        <div class="row p-0 m-0">
            <div class="col-3 col-lg-2">
                <img class="author_image" src="https://www.sbainfo.in/images/team/venkatesh.jpg" alt="Venkatesh" />
            </div>
            <div class="col-9 col-lg-10 ps-3 author_name">
                <div>Written by</div>
                <div class="author-name">Venkatesh A</div>
                <div class="mt-2 gist-author">
                    Venkatesh works with global change makers IBM to specialize in implementing generative AI, LLMs, and cutting-edge data technologies to address complex business problems. A certified
                    expert on watsonx, He's passionate about exploring uncharted territories to find innovate solutions. By leveraging the technical intricacies of AI, he's responsible for driving data-driven strategies
                    and creating tangible value for India's CXO's and IT teams"
                </div>
                <div class="mt-1 gist-author">
                    Contributors: <a href="https://www.linkedin.com/in/divya-s-15a947245/" target="_blank">Divya S</a>, <a href="https://www.linkedin.com/in/reshma-rao-8011798/" target="_blank">Reshma Rao</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="blog-author">
    <div class="p-3">
        <div class="row p-0 m-0">
            <div class="col-3 col-lg-2">
                <img class="author_image" src="https://www.sbainfo.in/images/team/venkatesh.jpg" alt="Venkatesh" />
            </div>
            <div class="col-9 col-lg-10 ps-3 author_name">
                <div>Written by</div>
                <div class="author-name">Venkatesh A</div>
                <div class="mt-2 gist-author">
                    Venkatesh works with global change makers IBM to specialize in implementing generative AI, LLMs, and cutting-edge data technologies to address complex business problems. A certified
                    expert on watsonx, He's passionate about exploring uncharted territories to find innovate solutions. By leveraging the technical intricacies of AI, he's responsible for driving data-driven strategies
                    and creating tangible value for India's CXO's and IT teams"
                </div>
            </div>
        </div>
    </div>
</div>

<div class="blog-author">
    <div class="p-3">
        <div class="row p-0 m-0">
            <div class="col-3 col-lg-2">
                <img class="author_image" src="https://www.sbainfo.in/images/team/kanthan.jpg" alt="Kanthanathan" />
            </div>
            <div class="col-9 col-lg-10 ps-3 author_name">
                <div>Written by</div>
                <div class="author-name">Kanthanathan S</div>
                <div class="mt-2 gist-author">
                    Kanthanathan is an experienced thought leader and technologist with over 20 years in the IT Industry, he is associated with SBA since its inception and is responsible for technology acquisitions and propelling the business transformation of SBA from a system integrator to a technology services firm.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="blog-author">
    <div class="p-3">
        <div class="row p-0 m-0">
            <div class="col-3 col-lg-2">
                <img class="author_image" src="https://www.sbainfo.in/images/team/sadeesh-g.jpg" alt="Sadeeshkumar G" />
            </div>
            <div class="col-9 col-lg-10 ps-3 author_name">
                <div>Written by</div>
                <div class="author-name">Sadeeshkumar G</div>
                <div class="mt-2 gist-author">
                    Sadeesh is the Manager, Service and Delivery, at SBA Info solutions and has been the organization for more than 15+ years. Having started his career as a trainee Engineer at SBA, he could later realize his growth from a Trainee Engineer to Manager - Service Delivery. Besides handling projects on Datacenters and consulting on the network & Security requirements, Sadeesh currently Leads the Service Team and Guides them inhouse & at Customer sites and is a certified professional.
                </div>
            </div>
        </div>
    </div>
</div>

<div class="blog-author">
    <div class="p-3">
        <div class="row p-0 m-0">
            <div class="col-3 col-lg-2">
                <img class="author_image" src="https://www.sbainfo.in/images/team/viswanathan.jpg" alt="Viswanathan" />
            </div>
            <div class="col-9 col-lg-10 ps-3 author_name">
                <div>Written by</div>
                <div class="author-name">Viswanathan N</div>
                <div class="mt-2 gist-author">
                    Viswa is the head of Service and delivery and is responsible for Managing and growing the practice and delivery functions at SBA. With over 20+ years of experience as IT technical, service delivery & solution architect, Viswa’s primary focus is creating a good customer experience by increasing their perceived value in terms of products or services availed from SBA.
                </div>
            </div>
        </div>
    </div>
</div>

<br />
<h1>CRUD</h1>



<h1>ITEMS</h1>

<input type="text" onInput={(e)=>{
  Getproduct(e.target.value)
}} />
<button className="btn btn-dark" onClick={()=>{

  Getitems(a => [...a,product])
}}>ADD</button>
<table className="table">
<tr>
  <th>ITEM</th>
  <th>ACTION</th>
</tr>
{
  items.length == 0 ? (
    <>
    <tr>
      <td><h3>EMPTY</h3></td>
      <td><h3>Add an item</h3></td>
    </tr>
    </>
  ):(
    <>
    {
      items.map((val,i)=>(
        <>
    <tr>
      <td><h5>{val}</h5></td>
      <td><button className="btn btn-danger" onClick={()=>{

      }}>DELETE</button></td>
    </tr>
        </>
      ))
    }
    </>
  )
}
</table>
    </>
   )

}

export default Test;