import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 font-medium px-6 shadow-md bg-white">

      {/* Logo */}
      <img
        src={assets.logo}
        className="w-full cursor-pointer transition-transform duration-200 hover:scale-105"
        alt="logo"
      />

      {/* Navigation */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-800">
        {['HOME', 'CUSTOMIZE', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
          <li key={item} className="flex items-center gap-1 group cursor-pointer select-none">
            <p className="group-hover:text-purple-700 transition-colors duration-300">{item}</p>
            <hr className="w-6 h-[2px] bg-purple-700 hidden group-hover:block transition-all duration-500" />
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">

        {/* Search Icon */}
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="search"
          draggable={false}
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-6 cursor-pointer"
            alt="profile"
            draggable={false}
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 top-full mt-2 py-3 px-5 bg-gray-200 text-gray-700 rounded shadow-xl transition-all duration-500 z-10">
            <p className="cursor-pointer hover:text-black transition-colors duration-300 select-none">My Profile</p>
            <p className="cursor-pointer hover:text-black transition-colors duration-300 select-none">Orders</p>
            <p className="cursor-pointer hover:text-black transition-colors duration-300 select-none">Logout</p>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <img
            src={assets.cart_icon}
            className="w-7 min-w-7 hover:scale-110 transition-transform duration-300"
            alt="cart"
            draggable={false}
          />
          <p className="absolute right-[-6px] top-[-6px] w-5 h-5 flex items-center justify-center bg-purple-700 text-white rounded-full text-xs select-none">
            3
          </p>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
