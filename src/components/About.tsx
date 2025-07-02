import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Zap } from 'lucide-react';
import pic from './pic.png';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in React.js, Node.js, Express.js, and MongoDB with hands-on project experience."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Integration",
      description: "Experience with real-time APIs, WebSockets, and database management systems."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Applied ML models using TensorFlow, OpenCV, and Scikit-learn for real-world applications."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Strong algorithmic skills with experience in hackathons and competitive programming."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-l text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a motivated Software Development Engineer with a strong foundation in full-stack web development, artificial intelligence, machine learning
              and a passion for building scalable, user-centric applications. Currently pursuing my Bachelor's in
              Computer Science Engineering with a CGPA of 9.38/10.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  My journey in software development began with a curiosity about how technology can solve
                  real-world problems. This led me to explore various domains from web development to
                  machine learning, always with a focus on creating meaningful impact.
                </p>
                <p>
                  I've had the opportunity to work on diverse projects, from developing collaborative
                  platforms for farmers to creating diagnostic tools for autism detection. Each project
                  has taught me valuable lessons about user experience, scalability, and the importance
                  of clean, maintainable code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, participating in
                  hackathons, or contributing to open-source projects. I believe in continuous learning
                  and staying updated with the latest industry trends.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <img
                src={pic}
                alt="Developer Journey"
                className="w-full max-w-md rounded-xl shadow-xl object-cover"
              />
            </motion.div>
          </div>


          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              What I Bring to the Table
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;