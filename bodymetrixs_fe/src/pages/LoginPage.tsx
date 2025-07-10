import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // 登录成功后，同步用户数据到业务表
      if (data.user) {
        try {
          const response = await fetch('http://localhost:3000/api/auth/sync-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: data.user.email,
              name: data.user.user_metadata?.name || data.user.email?.split('@')[0] || 'User',
              userId: data.user.id,
            }),
          });

          if (!response.ok) {
            console.error('User sync failed:', await response.text());
            // 即使同步失败，仍然允许用户登录
          }
        } catch (syncError) {
          console.error('User sync error:', syncError);
          // 继续登录流程
        }
      }

      navigate('/dashboard');
    } catch (err: unknown) {
      setError((err as Error).message || 'An unexpected error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'github' | 'google') => {
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin + '/dashboard',
        },
      });

      if (error) {
        setError(error.message);
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'An unexpected error occurred during OAuth login');
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
          <h2 className="text-2xl font-bold text-center mb-6">Welcome to BodyMetrics</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-danger/10 text-danger rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
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
            
            <div className="mb-6">
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
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          
          <p className="mt-4 text-center text-neutral-600 text-sm">
            Don't have an account?
          </p>
          
          <Link to="/register" className="block text-center mt-2 w-full py-3 rounded-lg border border-neutral-300 text-neutral-800 font-medium hover:bg-neutral-100 transition-colors">
            Register
          </Link>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => handleOAuthLogin('github')}
              disabled={loading}
              className="w-full flex items-center justify-center btn-outline py-3 border border-neutral-300 text-neutral-800 font-medium rounded-lg hover:bg-neutral-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <img src="/github-icon.svg" alt="GitHub" className="h-5 w-5 mr-2" /> 
              {loading ? 'Signing in with GitHub...' : 'Sign in with GitHub'}
            </button>
            <button
              type="button"
              onClick={() => handleOAuthLogin('google')}
              disabled={loading}
              className="w-full flex items-center justify-center btn-outline py-3 border border-neutral-300 text-neutral-800 font-medium rounded-lg hover:bg-neutral-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" /> 
              {loading ? 'Signing in with Google...' : 'Sign in with Google'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;