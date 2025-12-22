import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiEdit2,
  FiPackage,
  FiLogOut,
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
    <nav className="bg-gray-200 fixed top-1 left-1/2 -translate-x-1/2 z-50 border-b border-gray-300 rounded-full max-w-6xl w-full mx-auto" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)' }}>
      <div className="container mx-auto px-6 lg:px-12 py-3 lg:py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src="/images/logo.png" alt="Rawnag Logo" className="h-10" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[#0F0F0F]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`transition-colors font-calibri font-bold text-lg lg:text-xl leading-none tracking-normal text-center ${location.pathname === link.href
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
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-xl lg:text-2xl text-[#0F0F0F]">
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
                <div className="absolute left-0 mt-3 w-56 bg-gradient-to-br from-gray-900 to-black border border-red-500/30 shadow-2xl rounded-2xl py-2 text-right overflow-hidden">

                  <Link
                    to="/edit-data"
                    className="text-white flex items-center justify-start gap-3 px-4 py-2.5 hover:bg-red-600/20 transition-all duration-200 border-b border-gray-700/50 group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FiEdit2 className="text-white group-hover:text-red-400 transition-colors" />
                    <span className="text-sm font-medium font-calibri">تعديل البيانات</span>
                  </Link>

                  <Link
                    to="/order-history"
                    className="text-white flex items-center justify-start gap-3 px-4 py-2.5 hover:bg-red-600/20 transition-all duration-200 border-b border-gray-700/50 group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FiPackage className="text-white group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm font-medium">سجل الطلبات</span>
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-right px-4 py-2.5 hover:bg-red-600/30 transition-all duration-200 group flex items-center justify-start gap-3"
                  >
                    <FiLogOut className="text-red-500 group-hover:text-red-400 transition-colors" />
                    <span className="text-sm font-medium text-red-500 group-hover:text-red-400 font-calibri">تسجيل الخروج</span>
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
                      className={`transition-colors font-calibri font-bold text-2xl leading-none tracking-normal text-center ${location.pathname === link.href
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
                      <div className="absolute left-0 mt-3 w-56 bg-gradient-to-br from-gray-900 to-black border border-red-500/30 shadow-2xl rounded-2xl py-2 text-right overflow-hidden">

                        <p className="px-4 py-2.5 text-sm font-semibold bg-red-600/10 border-b border-gray-700/50 text-red-500">
                          مرحباً، {user.name}
                        </p>

                        <Link
                          to="/edit-data"
                          className="text-gray-100 flex items-center justify-between px-4 py-2.5 hover:bg-red-600/20 transition-all duration-200 border-b border-gray-700/50 group"
                          onClick={() => setMenuOpen(false)}
                        >
                          <FiEdit2 className="text-red-500 group-hover:text-red-400 transition-colors" />
                          <span className="text-sm font-medium font-calibri">تعديل البيانات</span>
                        </Link>

                        <Link
                          to="/order-history"
                          className="text-gray-100 flex items-center justify-between px-4 py-2.5 hover:bg-red-600/20 transition-all duration-200 border-b border-gray-700/50 group"
                          onClick={() => setMenuOpen(false)}
                        >
                          <FiPackage className="text-blue-500 group-hover:text-blue-400 transition-colors" />
                          <span className="text-sm font-medium">سجل الطلبات</span>
                        </Link>

                        <button
                          onClick={() => {
                            logout();
                            setMenuOpen(false);
                          }}
                          className="w-full text-right px-4 py-2.5 hover:bg-red-600/30 transition-all duration-200 group flex items-center justify-between"
                        >
                          <FiLogOut className="text-red-500 group-hover:text-red-400 transition-colors" />
                          <span className="text-sm font-medium text-red-500 group-hover:text-red-400 font-calibri">تسجيل الخروج</span>
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
