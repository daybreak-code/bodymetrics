import { Link } from 'react-router-dom';
import { 
  Ruler, HeartPulse, LineChart, 
  Lock, Menu, X
} from 'lucide-react';
import { useState } from 'react';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
            <span className="font-semibold text-lg tracking-tight">BodyMetrics</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-neutral-600 hover:text-primary-600 text-sm font-medium">Home</a>
            <a href="#features" className="text-neutral-600 hover:text-primary-600 text-sm font-medium">Features</a>
            <a href="#pricing" className="text-neutral-600 hover:text-primary-600 text-sm font-medium">Pricing</a>
            <a href="#support" className="text-neutral-600 hover:text-primary-600 text-sm font-medium">Support</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Sign Up
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            <a href="#home" className="py-2 text-neutral-600 font-medium">Home</a>
            <a href="#features" className="py-2 text-neutral-600 font-medium">Features</a>
            <a href="#pricing" className="py-2 text-neutral-600 font-medium">Pricing</a>
            <a href="#support" className="py-2 text-neutral-600 font-medium">Support</a>
            <hr className="my-2 border-neutral-200" />
            <div className="flex flex-col space-y-2 mt-2">
              <Link to="/login" className="btn-secondary text-center">
                Login
              </Link>
              <Link to="/register" className="btn-primary text-center">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                Track Your Health, Manage Your Life
              </h1>
              <p className="mt-6 text-lg text-neutral-700 max-w-xl">
                BodyMetrics is your all-in-one solution for monitoring body measurements and managing health conditions. Stay informed, track progress, and take control.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="btn-primary text-center py-3 px-8">
                  Get Started
                </Link>
                <a href="#features" className="btn-secondary text-center py-3 px-8">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl transform -rotate-2"></div>
                <img 
                  src="https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Health tracking visualization" 
                  className="relative z-10 rounded-xl shadow-apple-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              BodyMetrics offers a comprehensive suite of tools to help you stay on top of your health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-5">
                <Ruler size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precise Body Measurements</h3>
              <p className="text-neutral-600">
                Easily record and track measurements for different body parts, ensuring accuracy and progress monitoring.
              </p>
            </div>
            
            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-5">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Disease Management</h3>
              <p className="text-neutral-600">
                Manage chronic conditions with medication reminders, symptom tracking, and doctor appointment scheduling.
              </p>
            </div>
            
            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-5">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Insights</h3>
              <p className="text-neutral-600">
                Receive tailored recommendations and insights based on your health data, empowering you to make informed decisions.
              </p>
            </div>
            
            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-5">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy Protection</h3>
              <p className="text-neutral-600">
                Keep sensitive health information secure with password protection and privacy mode options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-neutral-100 border-t border-neutral-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-neutral-500 text-sm">© 2024 BodyMetrics. All rights reserved.</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm">Terms of Service</a>
              <a href="#" className="text-neutral-500 hover:text-primary-600 text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;