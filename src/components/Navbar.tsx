
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-portfolio-blue">
          Sengottayan S
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            Home
          </Link>
          <a href="#about" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            About
          </a>
          <a href="#education" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            Education
          </a>
          <a href="#skills" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            Projects
          </a>
          <a href="#certificates" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            Certificates
          </a>
          <a href="#contact" className="text-gray-700 hover:text-portfolio-blue transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-portfolio-blue">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              Home
            </Link>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              About
            </a>
            <a 
              href="#education" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              Education
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              Projects
            </a>
            <a 
              href="#certificates" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              Certificates
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-portfolio-blue transition duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
