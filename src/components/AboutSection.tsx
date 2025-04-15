
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-2">About Me</h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-blue">Personal Information</h3>
            <p className="text-gray-700 mb-6">
              I am an aspiring developer with proficiency in both app and web development. 
              With a strong foundation in programming languages like C, Java, Python, and Dart, 
              I've participated in various hackathons and coding competitions. I'm passionate about 
              creating innovative solutions and continuously expanding my technical knowledge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-medium">Father's Name:</p>
                <p className="text-gray-600">Mehanasundhari S</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-medium">Blood Group:</p>
                <p className="text-gray-600">O</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-medium">Languages:</p>
                <p className="text-gray-600">Tamil, English</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-medium">Area of Interest:</p>
                <p className="text-gray-600">App Development, Web Development, Game Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-blue">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-portfolio-blue text-white p-4 rounded-full mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">7010946232</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-portfolio-blue text-white p-4 rounded-full mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">sengosamsonathan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-portfolio-blue text-white p-4 rounded-full mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    2/156 near water tank, vankadai, perundurai, erode 638052
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
