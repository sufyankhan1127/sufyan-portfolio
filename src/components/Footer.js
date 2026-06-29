import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-textSecondary text-sm">© 2026 Mohd Sufyan Khan. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-textSecondary hover:text-accent text-sm transition-colors">Home</a>
            <a href="#about" className="text-textSecondary hover:text-accent text-sm transition-colors">About</a>
            <a href="#projects" className="text-textSecondary hover:text-accent text-sm transition-colors">Projects</a>
            <a href="#contact" className="text-textSecondary hover:text-accent text-sm transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-textSecondary text-xs">Built with React.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;