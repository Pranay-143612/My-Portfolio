import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "IT Essentials",
      issuer: "Cisco",
      date: "2024",
      description: "Comprehensive certification covering computer hardware, software, networking, and troubleshooting fundamentals.",
      skills: ["Hardware Troubleshooting", "Network Fundamentals", "Operating Systems", "Security Basics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Computer Networks",
      issuer: "Cisco",
      date: "2024",
      description: "Advanced certification in networking concepts, protocols, and network infrastructure design and management.",
      skills: ["Network Protocols", "Routing & Switching", "Network Security", "Infrastructure Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programming Essentials in Python",
      issuer: "Cisco",
      date: "2023",
      description: "Fundamental Python programming certification covering syntax, data structures, and programming best practices.",
      skills: ["Python Syntax", "Data Structures", "Object-Oriented Programming", "Problem Solving"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Data Analytics",
      issuer: "Accenture",
      date: "2023",
      description: "Professional certification in data analytics, covering data processing, visualization, and business intelligence.",
      skills: ["Data Processing", "Statistical Analysis", "Data Visualization", "Business Intelligence"],
      color: "from-purple-500 to-pink-500"
    }
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in various technologies and demonstrate 
              my commitment to continuous learning and skill development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color}`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mt-1">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{cert.issuer}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
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

export default Certifications;