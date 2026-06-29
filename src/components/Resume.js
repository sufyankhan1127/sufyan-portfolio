import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
            My <span className="text-accent">Resume</span>
          </h2>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button onClick={() => setShowPreview(!showPreview)} className="bg-accent hover:bg-accentHover text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              {showPreview ? 'Hide Preview' : 'View Resume'}
            </button>
            <a href="/resume.pdf" download="Mohd_Sufyan_Khan_Resume.pdf" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Download Resume
            </a>
          </div>

          {showPreview && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
              <div className="bg-secondary rounded-lg p-4 border border-secondary">
                <iframe src="/resume.pdf" title="Resume Preview" className="w-full h-[800px] rounded-lg" />
              </div>
            </motion.div>
          )}

          <div className="max-w-2xl mx-auto mt-8 bg-secondary rounded-lg p-6 border border-secondary">
            <h3 className="text-xl font-bold text-textPrimary mb-4">Quick Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-textSecondary">
              <div>
                <p className="mb-2"><span className="text-accent font-medium">Name:</span> Mohd Sufyan Khan</p>
                <p className="mb-2"><span className="text-accent font-medium">Role:</span> Java Full Stack Developer</p>
                <p className="mb-2"><span className="text-accent font-medium">Location:</span> Humnabad, Karnataka</p>
              </div>
              <div>
                <p className="mb-2"><span className="text-accent font-medium">Education:</span> B.E. CSE, VTU</p>
                <p className="mb-2"><span className="text-accent font-medium">Certification:</span> Oracle Generative AI Professional</p>
                <p className="mb-2"><span className="text-accent font-medium">Experience:</span> 6+ Months</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;