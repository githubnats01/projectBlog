import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../index.css";

function RootLayout() {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "rgb(220, 241, 13)" : "white",
      borderBottom: isActive ? "3px solid rgb(246, 228, 67)" : "none",
    };
  };
  return (
    <div>
      <header
        className="fixed w-screen top-0 flex justify-between mb-20 items-center bg-192140 py-5 px-8 text-sm text-white"
        style={{ zIndex: 9999 }}
      >
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="flex gap-14 items-center">
          <NavLink
            to="/projectBlog/blog"
            className="linkHover"
            activeClassName={activeLink}
          >
            Blog
          </NavLink>
          <NavLink
            to="/projectBlog"
            className="linkHover"
            exact
            activeClassName={activeLink}
          >
            About us
          </NavLink>
          <NavLink
            to="/projectBlog/reviews"
            className="linkHover"
            activeClassName={activeLink}
          >
            Reviews
          </NavLink>
          <div className="flex gap-6 items-center">
            <NavLink
              to="/projectBlog/signup"
              className="linkHover"
              activeClassName={activeLink}
            >
              Sign up
            </NavLink>
            <NavLink
              to="/projectBlog/login"
              className="border rounded-full py-1 px-3 linkHover"
              activeClassName={activeLink}
            >
              Log in
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
