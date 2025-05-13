import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Briefcase as BriefcaseBusiness, UserRound, Menu, X, Search } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDashboardClick = () => {
    if (userRole) {
      navigate(`/${userRole}`);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <BriefcaseBusiness size={28} className="text-blue-700" />
          <span className="text-xl font-bold text-gray-900">HireHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">Find Jobs</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={handleDashboardClick}
              >
                Dashboard
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button 
                variant="primary" 
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/jobs" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">Find Jobs</Link>
            <Link to="/about" className="py-2 text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            
            {isAuthenticated ? (
              <>
                <Button 
                  variant="outline" 
                  onClick={handleDashboardClick}
                  className="w-full"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={handleLogout}
                  className="w-full"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={handleLoginClick}
                  className="w-full"
                >
                  Login
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleRegisterClick}
                  className="w-full"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;