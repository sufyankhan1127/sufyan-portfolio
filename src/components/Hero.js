import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent text-lg mb-4 font-medium tracking-wide uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-textPrimary mb-4 leading-tight"
            >
              Mohd Sufyan <span className="text-accent">Khan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-textSecondary mb-8 font-light"
            >
              Java Full Stack Developer & AI Integration Specialist
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-textSecondary max-w-xl mb-10 text-lg leading-relaxed"
            >
              I design and build scalable web applications with robust Spring Boot backends
              and modern React.js frontends. Experienced in RESTful APIs, database management,
              and AI-powered development workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center md:justify-start gap-4 mb-10 flex-wrap"
            >
              <a
                href="#projects"
                className="bg-accent hover:bg-accentHover text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center md:justify-start gap-6"
            >
              <a
                href="https://github.com/sufyankhan1127"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary text-textSecondary hover:text-accent hover:border-accent flex items-center justify-center rounded-lg border border-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-bold text-sm">GH</span>
              </a>
              <a
                href="https://linkedin.com/in/mohd-sufyan-khan-1127sk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary text-textSecondary hover:text-accent hover:border-accent flex items-center justify-center rounded-lg border border-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-bold text-sm">in</span>
              </a>
              <a
                href="mailto:sufyankhan.01127@gmail.com"
                className="w-12 h-12 bg-secondary text-textSecondary hover:text-accent hover:border-accent flex items-center justify-center rounded-lg border border-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-bold text-sm">@</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl shadow-accent/20">
                <img src="/profile.png" alt="Mohd Sufyan Khan" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-secondary border border-accent px-6 py-3 rounded-full shadow-xl"
              >
                <span className="text-accent font-bold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for Work
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 text-center"
        >
          <a href="#about" className="text-textSecondary hover:text-accent transition-colors inline-block animate-bounce">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;