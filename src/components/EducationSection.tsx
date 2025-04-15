
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc Computer Technology - Computer systems and design",
      institution: "Kongu Engineering college",
      period: "2021 - 2024"
    },
    {
      id: 2,
      degree: "HSC (Higher Secondary School)",
      institution: "Kongu velalar matriculation higher secondary school",
      period: "2020 - 2021"
    },
    {
      id: 3,
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Kongu velalar matriculation higher secondary school",
      period: "2018 - 2019"
    }
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-2">Education</h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-portfolio-blue p-6 text-white flex justify-center items-center">
                  <FaGraduationCap size={50} />
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-portfolio-blue font-semibold mb-2">{item.institution}</p>
                  <p className="text-gray-600">{item.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
