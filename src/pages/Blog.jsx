import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Blog() {
  return (
    <div>
      <div className="px-20 mb-10 mt-36 flex justify-between">
        <div className="flex gap-8">
          <NavLink
            index="/projectBlog/blog/allposts"
            className="border-gray-700 border-2 px-4 rounded-full blogLink"
          >
            All Posts
          </NavLink>
          <NavLink
            to="/projectBlog/blog/favorites"
            className="border-gray-700 border-2 px-4 rounded-full blogLink"
          >
            Liked Blogs
          </NavLink>
        </div>
        <NavLink
          to="/projectBlog/blog/addposts"
          className="border-gray-700 border-2 px-4 rounded-full blogLink"
        >
          Add post +
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;
