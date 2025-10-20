import React, { useContext } from 'react'
import { Theme } from '../themes/Theme'
import { Link, NavLink } from 'react-router';
import AuthContext from '../../context/AuthContext';

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user)
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('Logged out successfully');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const links = <>
    <NavLink to='/'  className={({isActive}) => isActive?"text-accent text-md md:text-lg  link":"text-primary text-md md:text-lg  hover:text-accent hover:link"}>Home</NavLink>
    <NavLink to='all-food' className={({isActive}) => isActive?"text-accent text-md md:text-lg  link":"text-primary text-md md:text-lg  hover:text-accent hover:link"}>All Foods</NavLink>
    <NavLink to='/gallery' className={({isActive}) => isActive?"text-accent text-md md:text-lg  link":"text-primary text-md md:text-lg  hover:text-accent hover:link"}>Gallery</NavLink>
  </>
  return (
    <div className="container mx-auto navbar bg-transparent mt-4 mb-2 font-play ">

      {/* Mobile menu */}
      <div className="dropdown lg:hidden z-20 ">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200  rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {links}
        </ul>
      </div>

      <div className="navbar-start flex items-center">
        <a className="font-mina text-2xl md:text-3xl font-bold text-primary ">খানাপিনা</a>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-10">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-2 ">
        <div>
          <Theme />
        </div>

        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL || "https://via.placeholder.com/40"} alt={user.displayName || "User"} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-20 mt-3 w-44 md:w-52 p-2 shadow">
                <li><NavLink to="/my-foods" className={({isActive}) => isActive?"text-accent text-sm md:text-md  link":"text-primary text-sm md:text-md  hover:text-accent hover:link"} >My Foods</NavLink></li>
                <li><NavLink to="/add-food" className={({isActive}) => isActive?"text-accent text-sm md:text-md  link":"text-primary text-sm md:text-md  hover:text-accent hover:link"}>Add Food</NavLink></li>
                <li><NavLink to="/my-orders" className={({isActive}) => isActive?"text-accent text-sm md:text-md  link":"text-primary text-sm md:text-md  hover:text-accent hover:link"}>My Orders</NavLink></li>
                <li><NavLink onClick={handleLogout} className='text-sm md:text-md'>Logout</NavLink></li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-primary">Login</NavLink>
          )}
        </div>
      </div>


    </div>
  )
}
