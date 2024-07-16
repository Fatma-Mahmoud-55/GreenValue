import { useState } from 'react';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <nav className="bg-main_color fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-8" alt=" Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-[#4A7B31] bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">دخول</button>
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-main_color">
                <li>
                  <a href="#" className="block py-2 px-3 text-white bg-[#25421e] rounded md:bg-transparent md:text-[#25421e] md:p-0" aria-current="page">الرئيسية</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-white bg-[#25421e] rounded md:bg-transparent md:text-[#25421e] md:p-0" aria-current="page">من نحن</a>
                </li>

                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#25421e] md:p-0">الخدمات</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#25421e] md:p-0">المنتجات</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#25421e] md:p-0">المرصد</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
