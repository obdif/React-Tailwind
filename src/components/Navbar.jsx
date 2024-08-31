import React, { useEffect, useState } from 'react'
import logo from "../assets/react.svg";
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //  Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    // 
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Project", path: "project" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
        // {link: "Project", path: "project"},
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""}`}>
  <div className="flex justify-between items-center text-base gap-8">
    <a href="" className="text-2xl font-semibold flex items-center space-x-5">
      <img src={logo} alt="" className="w-10 inline-block items-center" />
      <span className="text-brandPrimary">Ulearn</span>
    </a>

    {/* Nav items for Large screen */}
    <ul className="md:flex space-x-12 hidden ">
      {navItems.map(({ link, path }) => (
        <Link
          to={path}
          spy={true}
          smooth={true}
          offset={-100}
          key={path}
          className="block text-base black hover:text-medium transition-all duration-300 first:font-medium cursor-pointer  "
        >
          {link}
        </Link>
      ))}
    </ul>

    {/* btn for large device */}
    <div className="space-x-22 hidden gap-8 lg:flex items-center">
      <a href="/" className="hidden lg:flex items-center font-semibold text-2xl text-brandPrimary hover:text-medium">
        Login
      </a>
      <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-medium">
        Sign Up
      </button>
    </div>

    {/* Menu Btn for Mobile Devices */}
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="focus:outline-none focus:text-grey-500 text-neutralDGrey"
      >
        {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>
    </div>
  </div>

  {/* Nav Items for Mobile Device */}
  <div
    className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
      isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
    }`}
  >
    {navItems.map(({ link, path }) => (
      <Link
        to={path}
        spy={true}
        smooth={true}
        offset={-100}
        key={path}
        className="block text-base text-white hover:yellow first:font-medium"
      >
        {link}
      </Link>
    ))}
  </div>
</nav>

        </header>
    )
}

export default Navbar
