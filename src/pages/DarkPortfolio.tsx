
import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Github, Linkedin, ExternalLink, Download, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const DarkPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Sengottayan S</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#education" className="text-gray-300 hover:text-white transition">Education</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
              <a href="#certificates" className="text-gray-300 hover:text-white transition">Certificates</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white transition">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition">About</a>
              <a href="#education" className="block px-3 py-2 text-gray-300 hover:text-white transition">Education</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white transition">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white transition">Projects</a>
              <a href="#certificates" className="block px-3 py-2 text-gray-300 hover:text-white transition">Certificates</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hi, I'm <span className="text-blue-400">Sengottayan S</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                App & Web Developer looking for a job with MCA degree, to use my skills, gain experience in my job and implement new technology for the development of the company.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contact Me
                </a>
                <a href="#" className="flex items-center border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                  <Download size={20} className="mr-2" />
                  Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/855259fe-e703-4614-90e3-fbfb129c127a.png" 
                alt="Sengottayan S" 
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg ring-2 ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Personal Info</h3>
                <div className="space-y-4 text-gray-300">
                  <p><span className="font-medium text-blue-400">Father's Name:</span> Mehanasundhari S</p>
                  <p><span className="font-medium text-blue-400">Blood Group:</span> O</p>
                  <p><span className="font-medium text-blue-400">Languages:</span> Tamil, English</p>
                  <p><span className="font-medium text-blue-400">Email:</span> sengosamsonathan@gmail.com</p>
                  <p><span className="font-medium text-blue-400">Phone:</span> 7010946232</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Area of Interest</h3>
                <p className="text-gray-300 mb-4">
                  I am an aspiring developer with proficiency in both app and web development.
                  With a strong foundation in programming languages like C, Java, Python, and Dart,
                  I've participated in various hackathons and coding competitions.
                </p>
                <p className="text-gray-300">
                  I'm passionate about creating innovative solutions and continuously expanding my 
                  technical knowledge in App Development, Web Development, and Game Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">BSc Computer Technology - Computer systems and design</h3>
              </div>
              <p className="text-gray-300">Kongu Engineering college</p>
              <p className="text-gray-400">2021 - 2024</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">HSC (Higher Secondary School)</h3>
              </div>
              <p className="text-gray-300">Kongu velalar matriculation higher secondary school</p>
              <p className="text-gray-400">2020 - 2021</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">SSLC (Secondary School Leaving Certificate)</h3>
              </div>
              <p className="text-gray-300">Kongu velalar matriculation higher secondary school</p>
              <p className="text-gray-400">2018 - 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Core Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Code size={32} className="text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-medium">App Development</h4>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Code size={32} className="text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-medium">Web Development</h4>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Code size={32} className="text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-medium">Game Development</h4>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Code size={32} className="text-blue-400 mx-auto mb-4" />
                  <h4 className="text-white font-medium">Problem Solving</h4>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Programming Languages</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">C</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Java</span>
                    <span className="text-blue-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Dart</span>
                    <span className="text-blue-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Python</span>
                    <span className="text-blue-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Go Lang</span>
                    <span className="text-blue-400">65%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <div className="bg-blue-900 p-4">
                <Briefcase size={32} className="text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Obstacle detector for blinds</h3>
                <p className="text-gray-300 mb-4">
                  A device that helps visually impaired people detect obstacles in their path.
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>KEC Students</span>
                  <span>Dec 2022</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <div className="bg-blue-900 p-4">
                <Briefcase size={32} className="text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Students details management system</h3>
                <p className="text-gray-300 mb-4">
                  A system to manage student information and academic records efficiently.
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Sustainability Hackathon</span>
                  <span>Dec 2022</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <div className="bg-blue-900 p-4">
                <Briefcase size={32} className="text-blue-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Learning human anatomy using AR</h3>
                <p className="text-gray-300 mb-4">
                  An augmented reality application to help students learn human anatomy interactively.
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Research Project</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Certificates & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Certificates</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg shadow p-4 border border-gray-700">
                  <div className="flex items-center">
                    <Award className="text-yellow-500 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Project presented at National level event</h4>
                      <p className="text-sm text-gray-400">BITV: PRAYUKIT23 • Feb 2023</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg shadow p-4 border border-gray-700">
                  <div className="flex items-center">
                    <Award className="text-yellow-500 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-medium">Visual code hackathon</h4>
                      <p className="text-sm text-gray-400">Visual Code • Nov 2022</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg shadow p-4 border border-gray-700">
                  <div className="flex items-center">
                    <Award className="text-yellow-500 mr-3" size={20} />
                    <div>
                      <h4 className="text-white font-medium">KEC Ideathon 2k22</h4>
                      <p className="text-sm text-gray-400">KEC • Sep 2022</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-medium text-white">Best Academic Award for the year 2022</h4>
                  </div>
                  <p className="text-gray-400">Kongu Engineering College</p>
                </div>
                <div className="bg-gray-900 rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-yellow-500 mr-2" />
                    <h4 className="font-medium text-white">First prize in obstacle detector for blinds project</h4>
                  </div>
                  <p className="text-gray-400">Kongu Engineering College</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Cocurricular Activities</h3>
              <div className="relative border-l-2 border-blue-500 ml-4 pl-6 space-y-10">
                <div className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="font-medium text-white text-lg">Go Lang</h4>
                  <p className="text-gray-400">Sep 2022</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="font-medium text-white text-lg">Pointers in c</h4>
                  <p className="text-gray-400">Jun 2022</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="font-medium text-white text-lg">Participated in sustainability hackathon in thinkObator</h4>
                  <p className="text-gray-400">Dec 2022</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="font-medium text-white text-lg">Participated in Visual code hackathon</h4>
                  <p className="text-gray-400">Nov 2022</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h4 className="font-medium text-white text-lg">AR/VR course</h4>
                  <p className="text-gray-400">Sep 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center text-gray-300">
                  <div className="bg-blue-900 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p>7010946232</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="bg-blue-900 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p>sengosamsonathan@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="bg-blue-900 p-3 rounded-full mr-4">
                    <ExternalLink size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Address</h4>
                    <p>2/156 near water tank, vankadai, perundurai, erode 638052</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4 bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2025 Sengottayan S. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkPortfolio;
