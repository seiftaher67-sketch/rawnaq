import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "العبايات", href: "/abayas" },
    { name: "الطرح", href: "/tarhas" },
    { name: "النقابات", href: "/niqabs" },
    { name: "العروض", href: "/offers" },
  ];

  return (
    <nav className="bg-gray-200 fixed top-1 left-5 right-5 z-50 border-b border-gray-300 shadow-sm rounded-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src="/images/logo.png" alt="Rawnag Logo" className="h-10" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-[#0F0F0F]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`transition-colors font-calibri font-bold text-2xl leading-none tracking-normal text-center ${
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
          {!user ? (
            <Link to="/login">
              <FiUser className="cursor-pointer transition" />
            </Link>
          ) : (
            <div className="relative">
              <button
                className="p-3 rounded-full bg-gray-100 hover:bg-red-700 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FiUser className="text-2xl" />
              </button>

              {/* Profile Menu */}
              {menuOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-black border border-gray-200 shadow-lg rounded-xl py-3 text-right">
                  
                 {/*<p className="px-4 mb-2 text-white">مرحباً، {user.name}</p>} 
                 */} <Link
                    to="/edit-data"
                    className="text-white block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    تعديل البيانات
                  </Link>

                  <Link
                    to="/order-history"
                    className="text-white block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    سجل الطلبات
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-right px-4 py-2 hover:bg-gray-600 text-red-600"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>
          )}
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

              <ul className="space-y-6 text-[#0F0F0F]">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`transition-colors font-calibri font-bold text-2xl leading-none tracking-normal text-center ${
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
                {!user ? (
                  <Link to="/login">
                    <FiUser />
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <FiUser className="text-2xl" />
                    </button>
      
                    {/* Profile Menu */}
                    {menuOpen && (
                      <div className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 shadow-lg rounded-xl py-3 text-right">
                        
                        <p className="px-4 mb-2 text-gray-700">مرحباً، {user.name}</p>
      
                        <Link
                          to="/edit-data"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setMenuOpen(false)}
                        >
                          تعديل البيانات
                        </Link>
      
                        <Link
                          to="/order-history"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => setMenuOpen(false)}
                        >
                          سجل الطلبات
                        </Link>
      
                        <button
                          onClick={() => {
                            logout();
                            setMenuOpen(false);
                          }}
                          className="block w-full text-right px-4 py-2 hover:bg-gray-100 text-red-600"
                        >
                          تسجيل الخروج
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
