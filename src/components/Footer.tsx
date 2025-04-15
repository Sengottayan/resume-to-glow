
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-blue text-white py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Sengottayan S</h3>
            <p className="mt-2 text-sm">App & Web Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-6 pt-6 text-center">
          <p className="text-sm">© {currentYear} Sengottayan S. All rights reserved.</p>
          <p className="text-xs mt-2">Made with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
