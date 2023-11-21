import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHeading } from "react-icons/fa6";
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className='flex flex-wrap justify-around items-center text-lg h-20 bg-black text-white'>
      <div className="text-5xl">
        <FaHeading/>
      </div>

      <ul className="flex text-xl">
        <li className="mx-5 text-white hover:text-gray-300">
          <Link to={"/sobre"}>Sobre</Link>
        </li>
        <li className="mx-5 text-white hover:text-gray-300">
          <Link to={"/portfolio"}>Portfólio</Link>
        </li>
        <li className="mx-5 text-white hover:text-gray-300">
          <Link to={"/contacto"}>Contacto</Link>
        </li>
      </ul>

      <ul className="flex">
          <li className='mx-5 text-3xl'>
            <a href="https://github.com/Helio-junior-ADS" target='_blank' rel="noreferrer"><FaGithub /></a>   
          </li>

          <li className='mx-5 text-3xl'>
            <a href="https://www.linkedin.com/in/h%C3%A9lio-j%C3%BAnior-81aa6612a/" target='_blank' rel="noreferrer"><FaLinkedin /></a>   
          </li>
      </ul>



    </nav>
  );
};

export default NavBar;
