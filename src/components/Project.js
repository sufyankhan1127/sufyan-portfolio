import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'UrbanEats – Food Delivery App',
      tech: 'Java, JDBC, JSP, Servlets, MySQL',
      image: '/urbaneats.png',
      liveLink: null,
      points: [
        'Built a multi-user food delivery platform with restaurant listings, dynamic menus, cart, and order history.',
        'Implemented individual authenticated user accounts for secure access.',
        'Developed backend using JDBC for SQL operations and JSP with Servlets for server-side rendering.',
      ],
    },
    {
      title: 'EBS Tracker – Expenses, Budget & Savings',
      tech: 'Spring Boot, Spring MVC, Hibernate (JPA), PostgreSQL, REST APIs, Render',
      image: '/ebstracker.png',
      liveLink: 'https://expense-budget-savings-tracker.onrender.com/',
      points: [
        'Built a personal finance application with expense tracking, budget planning, and savings modules.',
        'Leveraged Singleton design pattern via Spring IoC container for resource efficiency.',
        'Designed and exposed RESTful APIs via Spring MVC; deployed live on Render.',
      ],
    },
    {
      title: 'Recipe Assistant Web Application',
      tech: 'JavaScript, Spoonacular API, HTML/CSS',
      image: null,
      liveLink: null,
      points: [
        'Integrated Spoonacular API for dynamic meal planning and nutrition insights.',
        'Built search filters with dynamic UI for enhanced user experience.',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
            Featured <span className="text-accent">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-primary rounded-lg overflow-hidden border border-secondary hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group flex flex-col"
              >
                <div className="h-48 bg-primary overflow-hidden">
                  {project.image ? (
                    <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                      <span className="text-6xl">🍳</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm mb-4 font-medium">{project.tech}</p>
                  <ul className="space-y-2 flex-1">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-textSecondary text-sm flex items-start">
                        <span className="text-accent mr-2 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-secondary">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-accent hover:bg-accentHover text-primary text-center font-bold py-2 px-4 rounded transition-colors duration-300 text-sm">
                        🚀 Live Demo
                      </a>
                    )}
                    {!project.liveLink && <span className="text-textSecondary text-sm italic">Coming Soon</span>}
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

export default Projects;