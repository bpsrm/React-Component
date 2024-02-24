import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <Link to="/" className="text-[24px] font-bold">
        <span className="text-violet-main">BANX</span>DEV
      </Link>
      <button
        className="md:hidden focus:outline-none transition-all delay-100 ease-in-out"
        onClick={toggleMenu}
      >
        {showMenu ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars-staggered"></i>
        )}
      </button>

      <nav className="hidden md:flex md:items-center">
        <ul className="flex main-link">
          <li className="link">
            <Link to="/" className="hover:text-violet-main">
              Home
            </Link>
          </li>
          <li>
            <Dropdown name="Component" />
          </li>
        </ul>
      </nav>
      {showMenu && (
        <nav className="fixed inset-y-0 left-0 z-50 w-[70%] shadow-md bg-white text-black md:text-white md:hidden">
          <ul className="p-4 main-link">
            <li className="link">
              <Link to="/" className="block py-2 px-4 hover:text-violet-main">
                Home
              </Link>
            </li>

            <Dropdown name="Component" className="w-full" />
          </ul>
        </nav>
      )}
    </header>
  );
}