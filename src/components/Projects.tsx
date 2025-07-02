import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Calendar, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Agritech Nexus",
      description: "A collaborative platform for farmers and agricultural experts to share knowledge, solve crop-related issues, and discuss seasonal practices.",
      image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Firebase", "Node.js", "MongoDB", "Express.js"],
      features: [
        "Interactive query posting system",
        "Threaded replies and discussions",
        "Advanced search and filter capabilities",
        "Responsive design for all devices"
      ],
      github: "https://github.com/Pranay-143612",
      live: "#",
      period: "2024 - 2025",
      role: "Full-Stack Developer"
    },
    {
      title: "SPARK - Autism Recognition Kit",
      description: "A hybrid diagnostic tool combining questionnaire-based analysis with facial expression recognition for early autism detection.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Streamlit"],
      features: [
        "Machine learning-based facial recognition",
        "Questionnaire analysis and openCV system",
        "Real-time interaction and visualization",
        "Streamlit-based user interface"
      ],
      github: "https://github.com/Pranay-143612",
      live: "#",
      period: "2025",
      role: "Developer & ML Lead"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating my skills in full-stack development, 
              machine learning, and user experience design.
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Removed navigation buttons from image */}
                  </motion.div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600 dark:text-gray-300">{project.period}</span>
                      <Users className="w-5 h-5 text-blue-600 ml-4" />
                      <span className="text-gray-600 dark:text-gray-300">{project.role}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                      {/* Removed Live Demo button */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
