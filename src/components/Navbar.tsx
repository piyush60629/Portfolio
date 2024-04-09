const Navbar = () => {
    return (
      <nav className="bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-white text-2xl font-bold">My Portfolio</a>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:flex items-center">
              <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2">Projects</a>
              <a href="#education" className="text-gray-300 hover:text-white px-3 py-2">Education</a>
              <a href="#technical-skills" className="text-gray-300 hover:text-white px-3 py-2">Technical Skills</a>
            </div>
  
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;