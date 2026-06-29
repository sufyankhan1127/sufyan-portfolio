import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Applied AI Intern',
      company: 'IBM SkillsBuild (via CSRBox)',
      period: 'Dec 2025 – Jan 2026',
      location: 'Remote',
      points: [
        'Built a Health Service Agent automating patient-doctor appointment scheduling using Python and Relay agents.',
        'Integrated Google Forms for patient input; implemented slot-matching logic against doctor availability in Excel.',
        'Deployed on Render and Supabase, reducing manual scheduling effort and improving hospital workflow.',
      ],
    },
    {
      title: 'Java Full Stack Developer Intern',
      company: 'TAP Academy',
      period: 'Jan 2026 – June 2026',
      location: 'Offline',
      points: [
        'Developed full-stack applications using Core Java, Spring Boot, and React.js under structured mentorship.',
        'Built RESTful APIs with Spring MVC and implemented Hibernate ORM for MySQL database operations.',
        'Designed React.js frontends with reusable components, React Hooks, and REST API integration.',
        'Applied AI-assisted development workflows using modern tooling alongside Java Full Stack.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
            Work <span className="text-accent">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="bg-primary rounded-lg p-6 md:p-8 border border-secondary hover:border-accent transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-textPrimary">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-textSecondary text-sm">{exp.period}</p>
                      <p className="text-textSecondary text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-textSecondary flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;