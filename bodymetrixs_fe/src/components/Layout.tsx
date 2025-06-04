import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Ruler, Activity, Settings, LogOut,
  HeartPulse, Bell, Menu, X
} from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../stores/authStore';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const links = [
    { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/measurements', icon: <Ruler size={20} />, label: 'Measurements' },
    { to: '/disease-management', icon: <HeartPulse size={20} />, label: 'Disease Management' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-primary-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
            </span>
            <Link to="/dashboard" className="font-semibold text-lg tracking-tight">
              BodyMetrics
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-600'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-neutral-600 hover:text-primary-600">
              <Bell size={20} />
            </button>
            {user && (
              <div className="relative flex items-center">
                <img
                  src={user.avatar || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <button
                  onClick={handleLogout}
                  className="ml-2 text-neutral-400 hover:text-danger transition-colors"
                  title="Log Out"
                >
                  <LogOut size={20} />
                </button>
              </div>
            )}
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-600'
                    : 'text-neutral-600'
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <button 
              onClick={handleLogout}
              className="flex items-center py-2 text-sm font-medium text-danger mt-4"
            >
              <LogOut size={20} className="mr-3" />
              Log Out
            </button>
          </nav>
        </div>
      )}
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-10">
        <div className="flex justify-around">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex flex-col items-center py-3 ${
                location.pathname === link.to
                  ? 'text-primary-600'
                  : 'text-neutral-600'
              }`}
            >
              {link.icon}
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;