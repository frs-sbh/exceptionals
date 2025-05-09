import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { doSignout } from "../../features/auth/services/auth";

const Header = () => {
  const { currentUser } = useAuth();

  const handleSignout = async () => {
    await doSignout();
  };

  return (
    <>
      <header className="flex flex-row items-center justify-between w-full h-full px-20 py-5 bg-sky-800 text-white">
        <div className="flex flex-row items-center justify-start w-1/2">
          <a href="/">
            <h1 className="text-[3rem] font-bold font-funnel-display">
              Exceptionals
            </h1>
          </a>
        </div>
        <nav className="flex flex-row items-center justify-end w-1/2">
          <ul className="flex flex-row items-center justify-between space-x-10 font-work-sans text-lg">
            {currentUser ? (
              <li>
                <p>Welcome, {currentUser.username}</p>
              </li>
            ) : null}
            <li>
              <a href="/dashboard" className="hover:text-gray-200 transition-colors">Dashboard</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-200 transition-colors">Log In</a>
            </li>
            <li>
              <a href="/register" className="px-4 py-2 bg-white text-sky-800 rounded-md hover:bg-gray-100 font-medium transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg">Sign Up</a>
            </li>
            {currentUser ? (
              <button onClick={handleSignout} className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100">Logout</button>
            ) : null}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
