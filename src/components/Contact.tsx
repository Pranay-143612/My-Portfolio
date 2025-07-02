import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "pranayacharya2004@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=pranayacharya2004@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9912405709",
      link: "tel:+919912405709"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Pranay-143612",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pranay-acharya-devarakonda/",
      color: "hover:text-blue-600"
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-l text-gray-600 dark:text-gray-300">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat 
              about technology. Feel free to reach out!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold flex justify-left text-gray-900 dark:text-white">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Me
            </h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
