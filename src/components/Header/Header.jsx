import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-around items-center pt-12 background">
      <Link to="/">
        <h1 className="text-5xl font-extrabold italic active">ChakriBakri</h1>
      </Link>
      <div className="hidden md:flex justify-center gap-10">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Statistics
        </NavLink>
        <NavLink
          to="/applied_jobs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
      </div>
      <button className="btn-primary hidden md:block">Start Applying</button>
    </nav>
  );
};

export default Header;
