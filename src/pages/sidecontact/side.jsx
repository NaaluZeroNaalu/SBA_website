
import "./side.scss"
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function Sidecontent(){

    return(

        <>
         {/* Contact Buttons Section 
         
         fixed mt-4 right-0 flex flex-col  z-20
         */}
      <div className="fixed top-30 flex flex-col right-0 mt-4 z-30" style={{}}>
        <a href="tel:+91 9500262708" target="_blank" className="bg-blue-500 text-white no-underline flex items-center px-4 py-3 ">
          <FaPhoneAlt className="" />
        </a>
        <a href="https://wa.me/919500262708"  target="_blank" className="bg-green-500 text-white no-underline flex items-center px-4 py-3 ">
          <FaWhatsapp className="" />
        </a>
      </div>
        </>
    )
}

export default Sidecontent