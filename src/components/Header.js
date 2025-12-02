import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "العبايات", href: "/abayas" },
    { name: "الطرح", href: "/tarhas" },
    { name: "النقابات", href: "/niqabs" },
    { name: "العروض", href: "/offers" },
  ];

  return (
    <nav className="bg-gray-200 fixed top-5 left-5 right-5 z-50 border-b border-gray-300 shadow-sm rounded-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src="/images/logo.png" alt="Rawnag Logo" className="h-10" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium text-[#0F0F0F]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`transition-colors ${
                  location.pathname === link.href
                    ? "text-[#A73533] active:text-[#8B2A2A]"
                    : "active:text-[#333333]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-6 text-2xl text-[#0F0F0F]">
          <Link to="/favorites">
            <FiHeart className="cursor-pointer transition" />
          </Link>
          <Link to="/cart">
            <FiShoppingCart className="cursor-pointer transition" />
          </Link>
          <Link to="/login">
            <FiUser className="cursor-pointer transition" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-3xl text-[#0F0F0F]" onClick={() => setOpen(true)}>
          <FiMenu />
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden">
            <div className="absolute right-0 top-0 w-3/4 h-full bg-white p-6 shadow-lg">

              <button
                className="text-3xl mb-6 text-[#0F0F0F]"
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>

              <ul className="space-y-6 text-xl font-medium text-[#0F0F0F]">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`transition-colors ${
                        location.pathname === link.href
                          ? "text-[#A73533] active:text-[#8B2A2A]"
                          : "active:text-[#333333]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-6 text-3xl mt-10 text-[#0F0F0F]">
                <Link to="/favorites">
                  <FiHeart />
                </Link>
                <Link to="/cart">
                  <FiShoppingCart />
                </Link>
                <Link to="/login">
                  <FiUser />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
