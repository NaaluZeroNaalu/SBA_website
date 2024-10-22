
import "./side.scss"
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

function Sidecontent(){

    return(

        <>
          <div className="sticky-buttons">
            <a href="tel:+91 9500262708" className="sticky-button call-button">
                <FaPhone /> Call Us
            </a>
            <a href="https://wa.me/9500262708" className="sticky-button whatsapp-button" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
            </a>
        </div>
        </>
    )
}

export default Sidecontent