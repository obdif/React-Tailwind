import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from "../assets/react.svg";

const AuthNavbar = () => {
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0">
      <nav className="py-4 lg:px-14 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <RouterLink to="/" className="text-2xl font-semibold flex items-center space-x-5">
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-brandPrimary">Ulearn</span>
          </RouterLink>

          {/* Auth links */}
          <div className="space-x-22 gap-8 flex items-center">
            <RouterLink to="/login" className="hidden lg:flex items-center font-semibold text-2xl text-brandPrimary hover:text-medium">
              Login
            </RouterLink>
            <RouterLink to="/signup">
              <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-medium">
                Sign Up
              </button>
            </RouterLink>
          </div>



        </div>
      </nav>
    </header>
  );
};

export default AuthNavbar;