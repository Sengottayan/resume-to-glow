
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaVrCardboard } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Obstacle detector for blinds",
      description: "A device that helps visually impaired people detect obstacles in their path.",
      icon: <FaCode />,
      date: "Dec 2022",
      location: "KEC Students"
    },
    {
      id: 2,
      title: "Students details management system",
      description: "A system to manage student information and academic records efficiently.",
      icon: <FaDatabase />,
      date: "Dec 2022",
      location: "Sustainability Hackathon"
    },
    {
      id: 3,
      title: "Learning human anatomy using AR",
      description: "An augmented reality application to help students learn human anatomy interactively.",
      icon: <FaVrCardboard />,
      date: "2024",
      location: "Research Project"
    },
    {
      id: 4,
      title: "AI Deep learning for emotion detection and baby monitoring",
      description: "AI-based system that detects emotions and monitors babies for safety and care.",
      icon: <FaRobot />,
      date: "2024",
      location: "Research Project"
    },
    {
      id: 5,
      title: "Emotion detection using YCCB deep learning algorithm",
      description: "Implementation of the YCCB algorithm for accurate emotion detection.",
      icon: <FaRobot />,
      date: "2024",
      location: "Research Project"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-2">Projects</h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey and hackathons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-1 bg-gradient-to-r from-portfolio-blue to-portfolio-lightBlue" />
              <div className="p-6">
                <div className="bg-portfolio-blue text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.location}</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
