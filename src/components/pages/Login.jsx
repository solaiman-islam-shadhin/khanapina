import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { Link } from 'react-router'
import AuthContext from '../../context/AuthContext';
import {  toast, ToastContainer } from 'react-toastify';


export const Login = () => {

  const { SignIn, setUser, googleLogin, Toast } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);

        navigate('/');
        Toast();
        form.reset();

      })
      .catch((error) => {
        toast.error(error.message);
      });

  }


  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        navigate('/');
      Toast();
      })
      .catch((error) => {
        toast.error(error.message);
      })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 flex items-center justify-center p-2 sm:p-4">
      <ToastContainer />

      <div className="card w-full max-w-sm  md:max-w-md bg-base-100 shadow-2xl">
        <div className="card-body p-4 sm:p-6">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-mina text-primary mb-2">খানাপিনা</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-play text-base-content">Welcome Back</h2>
            <p className="text-xs sm:text-sm md:text-base text-base-content opacity-70 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="form-control">
              <label className="label mb-1 sm:mb-2">
                <span className="label-text font-play text-sm sm:text-base">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered input-sm sm:input-md w-full focus:border-none focus:input-primary "
                required
              />

            </div>

            <div className="form-control">
              <label className="label mb-1 sm:mb-2">
                <span className="label-text font-play text-sm sm:text-base">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered input-sm sm:input-md w-full focus:border-none focus:input-primary"
                required
              />


            </div>

            <button type="submit" className="btn btn-primary btn-sm sm:btn-md w-full font-play text-sm sm:text-base md:text-lg">
              Sign In
            </button>
          </form>

          <div className="divider">OR</div>

          <button onClick={handleGoogle} className="btn btn-outline btn-sm sm:btn-md w-full font-play text-xs sm:text-sm md:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <div className="text-center mt-3 sm:mt-4 md:mt-6">
            <p className="text-xs sm:text-sm md:text-base text-base-content opacity-70 font-play">
              Don't have an account?{' '}
              <Link to="/register" className="link link-primary font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}