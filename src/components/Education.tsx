import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Ace Engineering College",
      location: "Hyderabad, Telangana",
      period: "2022 - 2026",
      grade: "CGPA: 9.38 / 10",
      description: "Pursuing comprehensive education in computer science with focus on software development, algorithms, and emerging technologies.",
      highlights: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems (OS)",
        "Artificial Intelligence & Machine Learning"
      ]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-l text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey has been marked by consistent excellence and a passion for learning, 
              providing me with a strong foundation in computer science and engineering.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block"></div>
                  
                  <div className="md:ml-20">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          <Award className="w-4 h-4" />
                          {edu.grade}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {edu.institution}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Highlights:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <span
                              key={highlightIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-lg opacity-90 mb-6">
                Maintaining a consistent track record of academic excellence with a current CGPA of 9.38/10, 
                demonstrating dedication to learning and mastery of complex technical concepts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">9.38</div>
                  <div className="text-sm opacity-80">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10/10</div>
                  <div className="text-sm opacity-80">SSC Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">96.4%</div>
                  <div className="text-sm opacity-80">Intermediate Score</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;