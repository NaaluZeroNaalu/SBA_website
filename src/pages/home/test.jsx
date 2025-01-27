import { useState } from "react";
import logo from '../header/logo.jpg';
import "./style.scss"




function Test(){

    const [isOpen, setIsOpen] = useState(false); // For toggling the dropdown

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
        <>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">MyWebsite</div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          
          <div className="relative">
            <button
              className="text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              More
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
                <a href="#contact" className="block px-4 py-2">Contact</a>
                <a href="#blog" className="block px-4 py-2">Blog</a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-500 p-4 space-y-4">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#services" className="text-white">Services</a>
          <div className="relative">
            <button
              className="text-white"
              onClick={toggleMenu}
            >
              More
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
                <a href="#contact" className="block px-4 py-2">Contact</a>
                <a href="#blog" className="block px-4 py-2">Blog</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
        
        </>
    )
}

export default Test;