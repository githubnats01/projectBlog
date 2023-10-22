import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../index.css";

function RootLayout() {
  return (
    <div>
      <header
        className="fixed w-screen top-0 flex justify-between mb-20 items-center bg-192140 py-5 px-8 text-sm text-white"
        style={{ zIndex: 9999 }}
      >
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="flex gap-14 items-center">
          <NavLink to="blog" className="linkHover">
            Blog
          </NavLink>
          <NavLink to="/" className="linkHover">
            About us
          </NavLink>
          <NavLink to="reviews" className="linkHover">
            Reviews
          </NavLink>
          <div className="flex gap-6 items-center">
            <NavLink to="signup" className="linkHover">
              Sign up
            </NavLink>
            <NavLink
              to="login"
              className="border rounded-full py-1 px-3 linkHover"
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
