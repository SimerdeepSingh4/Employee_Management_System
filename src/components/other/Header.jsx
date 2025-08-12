import React from "react";

const Header = ({ name = "Simerdeep", role = "Employee", onLogout }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-700">
      {/* Greeting */}
      <div>
        <h1 className="text-sm sm:text-base text-gray-400">Hello,</h1>
        <h2 className="text-xl sm:text-3xl font-semibold text-white flex items-center gap-2">
          {name} 
          <span className="animate-wave">👋</span>
        </h2>
        {/* <p className="text-xs sm:text-sm text-gray-500">{role}</p> */}
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="bg-red-600 text-white px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-all duration-200"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
