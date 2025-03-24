import React from "react";
import { Sun,Moon } from "lucide-react";
import { Link } from "react-router-dom";
import useTheme from "../context/theme";


const Header = () => {
    
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    
    <header className="fixed w-full bg-white text-black dark:bg-gray-800 dark:text-white">
      <nav className="border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="#" className="flex items-center">
            <img src="./images/logo.svg" className="h-6 mr-3 sm:h-9" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Landwind
            </span>
          </Link>

          <div class="flex items-center lg:order-2">
            {/* Toggle Button */}
        
              <button onClick={toggleDarkMode} className={`relative w-32 h-14 flex items-center px-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-900 shadow-xl hover:cursor-pointer transition-all duration-300`}>
                <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
                    darkMode ? "translate-x-16" : "translate-x-0"}`}>
                    
                    {darkMode ? (
                    <Moon size={28} className="text-blue-700" />
                    ) : (
                    <Sun size={28} className="text-yellow-500" />
                  )}
                </div>
                <div className="flex w-full justify-between items-center px-5 text-white font-semibold">
                  <Sun size={24} />
                  <Moon size={24} />
                </div>
              </button>
                {/* hamburger menu */}
              <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
          <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                      <Link to=""  
                      onClick={(e) => e.preventDefault()}  
                      class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0" aria-current="page">Home</Link>
                  </li>

                  <li>
                      <Link to=""  onClick={(e) => e.preventDefault()}  class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
                  </li>
                  <li>
                      <Link to="" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                  </li>
                  <li>
                      <Link to="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                  </li>
                  <li>
                      <Link to="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                  </li>
                  <li>
                      <Link to="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 