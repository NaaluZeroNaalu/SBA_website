
import "./side.scss"
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function Sidecontent(){

    return(

        <>
         {/* Contact Buttons Section 
         
         fixed mt-4 right-0 flex flex-col  z-20
         */}
      <div className="fixed top-40 flex flex-col right-0 mt-4 z-30" style={{}}>
        <a href="tel:+91 9500262708" target="_blank" className=" text-white no-underline flex items-center px-4 py-3 ">
          <FaPhoneAlt className="" style={{color:"blue"}} />
        </a>
        <a href="https://wa.me/919500262708" target="_blank" className=" text-white no-underline flex items-center px-4 py-3 ">
          <FaWhatsapp className="" style={{color:"green"}} />
        </a>
      </div>
        </>
    )
}

export default Sidecontent