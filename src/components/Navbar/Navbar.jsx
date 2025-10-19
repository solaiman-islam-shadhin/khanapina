import React, { useState } from 'react'
import { Theme } from '../themes/Theme'
import { NavLink } from 'react-router';

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const links = <>
    <NavLink className="text-primary hover:text-accent link-hover">Home</NavLink>
    <NavLink className="text-primary hover:text-accent link-hover">All Foods</NavLink>
    <NavLink className="text-primary hover:text-accent link-hover">Gallery</NavLink>
  </>
  return (
    <div className="container mx-auto navbar bg-transparent mt-4 font-play">

      {/* Mobile menu */}
      <div className="dropdown lg:hidden z-20 bg-base-100">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {links}
        </ul>
      </div>

      <div className="navbar-start">
        <a className="font-mina text-2xl font-bold text-primary">খানাপিনা</a>
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
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://via.placeholder.com/40" alt="Profile" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Profile</a></li>
                <li><a onClick={() => setIsLoggedIn(false)}>Logout</a></li>
              </ul>
            </div>
          ) : (
            <a href="/login" className="btn btn-primary">Login</a>
          )}
        </div>
      </div>


    </div>
  )
}
