import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-4">
          &copy; {currentYear} Saptarshi Mukherjee. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <a
            href="https://github.com/Sappymukherjee214"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saptarshi-mukherjee-096191263"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/MukherjeeXii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
