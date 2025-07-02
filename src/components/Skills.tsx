import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C"],
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Redux", "HTML & CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Linux/Unix", "TensorFlow", "OpenCV"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const [current, setCurrent] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % skillCategories.length);
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? skillCategories.length - 1 : prev - 1
    );
  };

  const toggleAutoScroll = () => {
    setAutoScroll((prev) => !prev);
  };

  useEffect(() => {
    if (autoScroll) {
      intervalRef.current = setInterval(handleNext, 5000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoScroll]);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across various technologies.
            </p>
          </motion.div>

          {/* Carousel + Buttons */}
          <div className="flex flex-col items-center justify-center mb-24 gap-4">
            {/* Slider Content */}
            <div className="w-full flex items-center justify-center min-h-[200px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-transparent p-6 rounded-xl text-center min-w-[300px] max-w-[400px]"
                >
                  <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
                    {skillCategories[current].title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skillCategories[current].skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <button
                onClick={handlePrev}
                className="p-2 bg-transparent text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 rounded-full hover:scale-110 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={toggleAutoScroll}
                className="px-5 py-2 text-gray-400 rounded-full transition"
              >
                {autoScroll ? "||" : "▶"}
              </button>

              <button
                onClick={handleNext}
                className="p-2 bg-transparent text-gray-700 dark:text-gray-200 border border-gray-400 dark:border-gray-600 rounded-full hover:scale-110 transition"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Always Learning Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 mb-6">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of software development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Gen AI", "TypeScript", "Docker", "AWS", "GraphQL", "React Native"].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
