import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import AuthContext from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const Register = () => {
  const { createuser, setUser, googleLogin, Toast, Toast2 } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);

  const validatePassword = (pass) => {
    const errors = [];
    if (pass.length < 6) errors.push('At least 6 characters');
    if (!/[A-Z]/.test(pass)) errors.push('One uppercase letter');
    if (!/[a-z]/.test(pass)) errors.push('One lowercase letter');
    if (!/[0-9]/.test(pass)) errors.push('One number');
    return errors;
  };

  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    setPasswordErrors(validatePassword(pass));
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (passwordErrors.length > 0) {
      toast.error('Please fix password requirements');
      return;
    }
    
    setLoading(true)
    const formdata = new FormData(e.target)
    const { email, password, ...rest } = Object.fromEntries(formdata.entries());

    const userInfo = {
      email,
      ...rest
    }

    createuser(email, password)
      .then((userCredential) => {
        axios.post('https://restaurant-management-server-side-five.vercel.app/userinfo', userInfo)
          .then((response) => {
            const user = userCredential.user;
            setUser(user);
            Toast2();
            navigate('/');
          })
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false)
      })
  }


  const handleGoogle = () => {
    setGoogleLoading(true)
    googleLogin()
      .then(() => {
        navigate('/');
        Toast();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setGoogleLoading(false)
      })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-mina text-primary mb-2">খানাপিনা</h1>
            <h2 className="text-2xl font-play text-base-content">Create Account</h2>
            <p className="text-base-content opacity-70 mt-2">Join our food community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label   mb-2">
                <span className="label-text font-play">Name</span>
              </label>
              <input
                type="text"
                name="name"

                placeholder="Enter your full name"
                className="input input-bordered focus:border-none w-full focus:input-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label  mb-2">
                <span className="label-text font-play">Email</span>
              </label>
              <input
                type="email"
                name="email"

                placeholder="Enter your email"
                className="input input-bordered focus:border-none w-full focus:input-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text font-play">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"

                placeholder="Enter your photo URL"
                className="input input-bordered focus:border-none w-full focus:input-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text font-play ">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Create a password"
                className={`input input-bordered focus:border-none w-full ${passwordErrors.length > 0 ? 'input-error' : 'focus:input-primary'}`}
                required
              />
              
              {/* Password Requirements */}
              <div className="mt-2 space-y-1">
                {['At least 6 characters', 'One uppercase letter', 'One lowercase letter', 'One number'].map((req, index) => {
                  const isValid = !passwordErrors.includes(req);
                  return (
                    <div key={index} className={`flex items-center text-sm ${isValid ? 'text-success' : 'text-error'}`}>
                      <svg className={`w-4 h-4 mr-2 ${isValid ? 'text-success' : 'text-error'}`} fill="currentColor" viewBox="0 0 20 20">
                        {isValid ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        )}
                      </svg>
                      {req}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full font-play text-lg"
              disabled={loading || passwordErrors.length > 0}
            >
              {loading ? <LoadingSpinner size="sm" text="" /> : 'Create Account'}
            </button>
          </form>

          <div className="divider">OR</div>

          <button onClick={handleGoogle} className="btn btn-outline w-full font-play" disabled={googleLoading}>
            {googleLoading ? (
              <LoadingSpinner size="sm" text="" />
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </>
            )}
          </button>

          <div className="text-center mt-6">
            <p className="text-base-content opacity-70 font-play">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}