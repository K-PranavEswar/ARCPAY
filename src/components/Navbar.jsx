import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { ShieldCheck, Menu } from 'lucide-react'; // Added Menu for mobile

function Navbar() {
  // Add state for mobile menu if needed
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50"> {/* Added sticky top */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2"> {/* Changed to Link */}
            <ShieldCheck className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">
              Arc<span className="text-cyan-400">Pay</span>
            </span>
          </Link>

          {/* Right-side Navigation Links & Auth Buttons */}
          <div className="hidden md:flex items-center gap-6"> {/* Increased gap */}
            {/* Main Nav Links */}
            <Link to="/rules" className="text-gray-300 hover:text-white transition-colors text-sm font-medium"> {/* Changed to Link */}
              Rules
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium"> {/* Changed to Link */}
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium"> {/* Added Contact Us */}
              Contact Us
            </Link>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-600 mx-2"></div> {/* Added vertical separator */}

            {/* Auth Buttons */}
            <Link to="/login" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"> {/* Changed to Link */}
              Login
            </Link>
            <Link to="/signup" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors font-semibold"> {/* Changed to Link */}
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
               <Menu className="w-6 h-6" /> {/* Use Lucide icon */}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

