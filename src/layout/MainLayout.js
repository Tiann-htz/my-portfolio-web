import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const MainLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation Layout */}
          <div className="hidden md:flex ml-26 mt-2 justify-between items-center h-16">
            {/* Desktop Logo - Left Side */}
            <div className="flex items-center">
              <a href="#home" className="cursor-pointer">
                <span className="text-2xl font-bold gradient-text brand-font">Tian</span>
              </a>
            </div>

            {/* Desktop Navigation Items*/}
            <div className="flex items-center mr-22 space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link content-font"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-gold" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground-secondary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Layout */}
          <div className="md:hidden flex justify-between items-center h-16">
            {/* Mobile Logo - Left Side */}
            <div className="flex items-center">
              <a href="#home" className="cursor-pointer">
                <span className="text-2xl font-bold gradient-text brand-font">Tian</span>
              </a>
            </div>

            {/* Mobile Controls - Right Side */}
            <div className="flex items-center space-x-4">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-gold" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground-secondary" />
                )}
              </button>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="theme-toggle"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-menu fixed top-16 right-0 w-64 h-auto shadow-lg">
            {/* Mobile Nav Items - Aligned to the right */}
            <div className="px-6 py-6 space-y-4 flex flex-col items-end">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link content-font text-right"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-3">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold gradient-text brand-font">TIAN</span>
              <p className="mt-1 text-foreground-secondary body-font">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end mb-2 space-x-2">
                <span className="text-md text-foreground-muted body-font">Built with</span>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
                  alt="Next.js"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm text-foreground-muted body-font">&</span>
                <img 
                  src="/Tech-Stack/Tailwind CSS.png" 
                  alt="Tailwind CSS"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="border-t border-border mb-5"></div>
          
          {/* Copyright */}
          <div className="text-center mb-2">
            <p className="text-foreground-secondary body-font">
              © 2024 Tian. All rights reserved.
            </p>
          </div>
          
          {/* Inspirational Message */}
          <div className="text-center">
            <p className="inspirational-quote">
              "With God, all things are possible"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;