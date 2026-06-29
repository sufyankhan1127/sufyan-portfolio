import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Spring MVC', 'REST APIs', 'Maven', 'Hibernate (JPA)', 'JDBC', 'JSP', 'Servlets'],
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Render', 'Vercel', 'Jupyter Notebook'],
    },
    {
      title: 'Concepts',
      skills: ['OOP', 'Singleton Design Pattern', 'MVC Architecture', 'CRUD', 'REST API Integration', 'Cloud Deployment'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
            Technical <span className="text-accent">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-secondary rounded-lg p-6 border border-secondary hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <h3 className="text-xl font-bold text-accent mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary text-textSecondary px-3 py-1 rounded-full text-sm border border-secondary hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;