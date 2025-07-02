import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Pranay-143612",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/pranay-acharya-devarakonda/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=pranayacharya2004@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 cursor-pointer"
            >
              Pranay Acharya Devarakonda
            </motion.button>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer passionate about creating innovative solutions 
              and building scalable applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ scale: 1.05, x: 5 }}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 mx-auto md:mx-0"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              pranayacharya2004@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              +91 9912405709
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Pranay Acharya Devarakonda. All rights reserved.
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;