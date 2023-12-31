// Footer.tsx
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-8 -ml-4 mt-4" style={{ width: '100vw' }}>
      <div className="container mx-auto text-center" style={{ width: '50vw' }}>

        <div className="flex justify-center space-x-4 md:space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/mostafizur-rahman-35568045" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 rounded-full p-2 hover:bg-indigo-600">
            <Linkedin className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </a>
          <a href="https://github.com/moscuet" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 rounded-full p-2 hover:bg-indigo-600">
            <Github className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </a>
        </div>

        <div className="mb-4 text-sm md:text-base">
        </div>

        <div className="text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Mostafizur Rahman. All Rights Reserved.</p>
          <p>Made with ❤️ in Helsinki</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
