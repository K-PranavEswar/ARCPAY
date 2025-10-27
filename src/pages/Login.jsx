import React, { useState } from 'react';
import { ShieldCheck, LogIn, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx'; 

/**
 * @param {object} props
 * @param {function} props.onLogin 
 */
function Login({ onLogin }) {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    console.log('Login submitted with:', { email, password });
    onLogin(); 
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 animate-fade-in">
      <Card className="max-w-4xl w-full shadow-2xl shadow-cyan-500/10 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700">
            <Link to="/"><ShieldCheck className="h-16 w-16 text-cyan-400 mb-6" /></Link>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-lg">
              Manage your autonomous AI financial agent, all in one place.
            </p>
            <p className="text-gray-500 text-sm mt-12">
              Powered by Arc, Circle (USDC), & ElevenLabs
            </p>
          </div>
          <Card.Body className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-white mb-6">
              Sign in to ArcPay
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                  placeholder="••••••••"
                />
              </div>
              
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
              <div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full justify-center py-3 text-base"
                >
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-850 px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" className="w-full justify-center py-3">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button variant="secondary" className="w-full justify-center py-3">
                  <Chrome className="mr-2 h-5 w-5" />
                  Google
                </Button>
              </div>
            </form>
            <p className="text-center text-sm text-gray-400 mt-8">
              Don't have an account?{' '}
              <Link 
                to="/signup"
                className="font-medium text-cyan-400 hover:text-cyan-300"
              >
                Sign Up
              </Link>
            </p>
          </Card.Body>

        </div>
      </Card>
    </div>
  );
}

export default Login;

