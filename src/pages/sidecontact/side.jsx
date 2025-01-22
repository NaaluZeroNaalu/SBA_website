
import "./side.scss"
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function Sidecontent(){

    return(

        <>
         {/* Contact Buttons Section */}
      <div className="fixed mt-4 right-4 flex flex-col gap-2 z-50">
        <a href="tel:+91 9500262708" target="_blank" className="bg-blue-500 text-white no-underline flex items-center px-4 py-3 " style={{borderRadius:"5px"}}>
          <FaPhoneAlt className="mr-2" />
        </a>
        <a href="https://wa.me/919500262708" target="_blank" className="bg-green-500 text-white no-underline flex items-center px-4 py-3 " style={{borderRadius:"5px"}}>
          <FaWhatsapp className="mr-2" />
        </a>
      </div>
        </>
    )
}

export default Sidecontent