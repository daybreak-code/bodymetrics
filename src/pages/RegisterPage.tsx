import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      const success = await register(name, email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Registration failed');
      }
    } catch (err) {
      setError('An error occurred during registration');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link to="/" className="flex items-center text-primary-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mr-2">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
            <span className="text-2xl font-bold">BodyMetrics</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-apple-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-danger/10 text-danger rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <p className="mt-4 text-center text-neutral-600 text-sm">
            Already have an account?
          </p>
          
          <Link to="/login" className="block text-center mt-2 w-full py-3 rounded-lg border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-100 transition-colors">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;