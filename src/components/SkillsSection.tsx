
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaGamepad, FaPuzzlePiece } from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      name: "App Development",
      icon: <FaLaptopCode className="text-4xl mb-4 text-portfolio-blue" />
    },
    {
      id: 2,
      name: "Web Development",
      icon: <FaCode className="text-4xl mb-4 text-portfolio-blue" />
    },
    {
      id: 3,
      name: "Game Development",
      icon: <FaGamepad className="text-4xl mb-4 text-portfolio-blue" />
    },
    {
      id: 4,
      name: "Problem Solving",
      icon: <FaPuzzlePiece className="text-4xl mb-4 text-portfolio-blue" />
    }
  ];

  const languages = [
    { id: 1, name: "C", level: 85 },
    { id: 2, name: "Java", level: 80 },
    { id: 3, name: "Dart", level: 75 },
    { id: 4, name: "Python", level: 70 },
    { id: 5, name: "Go Lang", level: 65 }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-2">Skills & Languages</h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Core Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  {skill.icon}
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Programming Languages</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-500">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div 
                      className="bg-portfolio-blue h-2.5 rounded-full" 
                      style={{ width: `${lang.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
