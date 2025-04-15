
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-r from-portfolio-darkBlue to-portfolio-blue text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Sengottayan S</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">App & Web Developer</h2>
            <p className="text-lg mb-8 text-gray-200 max-w-lg">
              Looking for a job with MCA degree, to use my skills, gain experience in my job and implement new technology for the development of the company.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white text-portfolio-blue font-semibold rounded-full hover:bg-gray-200 transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-portfolio-blue transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/855259fe-e703-4614-90e3-fbfb129c127a.png" 
                alt="Sengottayan S" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
