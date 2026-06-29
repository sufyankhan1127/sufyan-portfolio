import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { number: '6+', label: 'Months Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '2', label: 'Internships' },
  ];

  return (
    <section id="about" className="py-24 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">
              Who I <span className="text-accent">Am</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-textSecondary text-lg leading-relaxed mb-6"
              >
                I'm a dedicated <span className="text-textPrimary font-medium">Java Full Stack Developer</span> with
                practical experience building end-to-end web applications. Through my internships at
                <span className="text-accent"> IBM SkillsBuild</span> and <span className="text-accent">TAP Academy</span>,
                I've developed strong skills in both backend architecture and frontend design.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-textSecondary text-lg leading-relaxed mb-6"
              >
                My expertise spans <span className="text-textPrimary font-medium">Spring Boot</span>,
                <span className="text-textPrimary font-medium"> React.js</span>, and database management with
                MySQL and PostgreSQL. I'm passionate about writing clean, efficient code and creating
                seamless user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-textSecondary text-lg leading-relaxed mb-8"
              >
                Currently seeking opportunities to contribute to innovative projects and grow as a
                full-stack developer in a collaborative, production-focused environment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex gap-4 flex-wrap"
              >
                <a href="#projects" className="bg-accent hover:bg-accentHover text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
                  See My Projects
                </a>
                <a href="#contact" className="border-2 border-textSecondary text-textSecondary hover:border-accent hover:text-accent font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="bg-primary rounded-2xl p-8 border border-secondary hover:border-accent transition-all duration-300 group text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div className="text-textSecondary text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;