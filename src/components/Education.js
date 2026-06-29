import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Basavakalyan Engineering College, VTU',
      location: 'Basavakalyan, Karnataka',
      period: 'Expected June 2026',
      score: '8.04 CGPA',
      icon: '🎓',
    },
    {
      degree: 'Pre-University Certificate (2nd PUC – Science)',
      institution: 'Ram and Raj P.U. College, Humnabad',
      location: 'Humnabad, Karnataka',
      period: 'April 2022',
      score: '76.54%',
      icon: '📚',
    },
    {
      degree: 'SSLC (10th Standard)',
      institution: 'Ram and Raj High School, Humnabad',
      location: 'Humnabad, Karnataka',
      period: 'April 2020',
      score: '92.64%',
      icon: '🏫',
    },
  ];

  return (
    <section id="education" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
            My <span className="text-accent">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-secondary rounded-lg p-6 md:p-8 border border-secondary hover:border-accent transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl bg-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-accent font-medium mt-1">{edu.institution}</p>
                      <p className="text-textSecondary text-sm">{edu.location}</p>
                      <p className="text-textSecondary text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-primary border border-accent/30 rounded-lg px-6 py-3 text-center group-hover:border-accent transition-colors">
                      <p className="text-2xl font-bold text-accent">{edu.score}</p>
                      <p className="text-textSecondary text-xs uppercase tracking-wider">Score</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-6 text-center">
              <span className="text-accent">Certifications</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Oracle Certified Generative AI Professional', issuer: 'Oracle MyLearn', icon: '🏆' },
                { name: 'Generative AI', issuer: 'Infosys Springboard', icon: '🤖' },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-secondary rounded-lg p-5 border border-secondary hover:border-accent transition-all duration-300 flex items-center gap-4"
                >
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h4 className="text-textPrimary font-bold">{cert.name}</h4>
                    <p className="text-textSecondary text-sm">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;