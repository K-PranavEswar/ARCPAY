import React from 'react';

// A simple, clean footer
function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ArcPay. Built for the
          <a 
            href="https://lablab.ai/event/ai-agents-arc-usdc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors mx-1"
          >
            AI Agents on Arc Hackathon
          </a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
