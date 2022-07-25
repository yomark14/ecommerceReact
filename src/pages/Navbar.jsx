import React from "react";
import {Link} from "react-router-dom";
import "../css/navbar.css";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="productos">
            <a
              className="letter text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-600"
            >
              THE ECONOMY WEBSTORE
            </a>
            </Link>
            <button
              
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <input type="search" />

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              <li className="nav-item">
              <Link to="productos">
                <a
                  className="letter px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Productos</span>
                </a>
                </Link>
              </li>
              
              
              <li className="nav-item">
                <a
                  className="letter px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-600 hover:opacity-75"
                  
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">LOGIN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}