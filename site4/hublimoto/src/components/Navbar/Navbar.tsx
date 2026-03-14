import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

import logo from "../../assets/logos/yamaha_logo-black.webp";

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Dealers", path: "/dealers" },
    { name: "Service", path: "/service" },
    { name: "Parts", path: "/parts" },
    { name: "Events", path: "/events" },
  ];

  return (

    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">

      <div className="flex items-center justify-between h-[72px] px-6 lg:px-14 text-white">

        {/* Logo */}
        <Link to="/">
          <img src={logo} className="h-[38px]" />
        </Link>

        {/* Center Section */}
        <div className="hidden lg:flex items-center gap-10">

          {/* Nav Menu */}
          <ul className="flex gap-8 text-sm tracking-wide">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-red-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

          {/* Search Bar */}
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-[260px]">

            <FiSearch className="text-gray-300 mr-2" />

            <input
              type="text"
              placeholder="Search bikes..."
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-full"
            />

          </div>

        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-xl">

          <FiUser className="cursor-pointer hover:text-red-500 transition" />

          <FiShoppingCart className="cursor-pointer hover:text-red-500 transition" />

          {/* Mobile Menu */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="lg:hidden bg-black text-white px-6 py-6">

          <ul className="flex flex-col gap-6 text-lg">

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-red-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      )}

    </header>
  );
}

export default Navbar;