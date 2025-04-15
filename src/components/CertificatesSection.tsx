
import { motion } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal } from 'react-icons/fa';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Project presented at National level event",
      organization: "BITV: PRAYUKIT23",
      date: "Feb 2023",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 2,
      title: "Visual code hackathon",
      organization: "Visual Code",
      date: "Nov 2022",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 3,
      title: "KEC Ideathon 2k22",
      organization: "KEC",
      date: "Sep 2022",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 4,
      title: "Sustainability Hackathon",
      organization: "Sustainability Initiative",
      date: "Dec 2022",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 5,
      title: "Innovate India Coding championship",
      organization: "Innovate India",
      date: "Jul 2022",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 6,
      title: "Code bits",
      organization: "Code Organization",
      date: "May 2022",
      icon: <FaAward className="text-yellow-500" />
    },
    {
      id: 7,
      title: "Best academic award at 2022",
      organization: "Kongu Engineering College",
      date: "2022",
      icon: <FaTrophy className="text-yellow-500" />
    },
    {
      id: 8,
      title: "Project presented in international level conference",
      organization: "International Conference",
      date: "Feb 2024",
      icon: <FaAward className="text-yellow-500" />
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Academic Award for the year 2022",
      organization: "Kongu Engineering College",
      icon: <FaTrophy className="text-2xl text-yellow-500" />
    },
    {
      id: 2,
      title: "First prize in obstacle detector for blinds project",
      organization: "Kongu Engineering College",
      icon: <FaMedal className="text-2xl text-yellow-500" />
    },
    {
      id: 3,
      title: "First prize in AR Human Anatomy",
      organization: "Kongu Engineering College",
      icon: <FaMedal className="text-2xl text-yellow-500" />
    }
  ];

  const cocurricular = [
    {
      id: 1,
      activity: "Go Lang",
      date: "Sep 2022"
    },
    {
      id: 2,
      activity: "Pointers in c",
      date: "Jun 2022"
    },
    {
      id: 3,
      activity: "Participated in sustainability hackathon in thinkObator",
      date: "Dec 2022"
    },
    {
      id: 4,
      activity: "Participated in Visual code hackathon",
      date: "Nov 2022"
    },
    {
      id: 5,
      activity: "AR/VR course",
      date: "Sep 2023"
    }
  ];

  return (
    <section id="certificates" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-2">Certificates & Achievements</h2>
          <div className="w-20 h-1.5 bg-portfolio-blue mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Certificates</h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white rounded-lg shadow p-4"
                >
                  <div className="mr-4 text-2xl">{cert.icon}</div>
                  <div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.organization} • {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-center mt-12">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow p-5 border-l-4 border-portfolio-blue"
                >
                  <div className="flex items-center mb-2">
                    {achievement.icon}
                    <h4 className="font-bold ml-2 text-portfolio-blue">{achievement.title}</h4>
                  </div>
                  <p className="text-gray-600">{achievement.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Cocurricular Activities</h3>
            <div className="relative border-l-2 border-portfolio-blue ml-4 pl-6 space-y-10">
              {cocurricular.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 w-4 h-4 bg-portfolio-blue rounded-full" />
                  <h4 className="font-semibold text-lg">{activity.activity}</h4>
                  <p className="text-gray-600">{activity.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
