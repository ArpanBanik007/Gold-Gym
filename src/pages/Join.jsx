import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Join() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-primary/30 selection:text-primary-dark">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
          <Dumbbell className="w-10 h-10" />
          <span className="font-heading font-bold text-3xl text-white tracking-wider uppercase">
            GOLD<span className="text-primary">'S</span>
          </span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-heading font-extrabold text-white uppercase tracking-wider">
          Join the Elite
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Or{' '}
          <Link to="/" className="font-medium text-primary hover:text-primary-dark transition-colors">
            return to home page
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-900 py-8 px-4 shadow-xl border border-gray-800 rounded-2xl sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-800 rounded-lg shadow-sm placeholder-gray-500 bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-800 rounded-lg shadow-sm placeholder-gray-500 bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-800 rounded bg-gray-950"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary-dark transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full uppercase tracking-widest font-bold">
                Create Account
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-800 rounded-lg shadow-sm bg-gray-950 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <span className="sr-only">Sign in with Google</span>
                  Google
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-800 rounded-lg shadow-sm bg-gray-950 text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <span className="sr-only">Sign in with Apple</span>
                  Apple
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
