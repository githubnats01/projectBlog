import React from "react";
import { PostImage } from "../../components/PostImage";
import { NavLink } from "react-router-dom";

function Addposts() {
  return (
    <div className="flex p-4 gap-40 justify-center">
      <div className="w-4/12">
        <NavLink
          to="/projectBlog/blog"
          className="text-blue-600 flex ml-24 mb-12"
        >
          ← Blog
        </NavLink>
        <h1 className="flex ml-24 text-3xl font-bold mb-6">New post</h1>
        <form action="">
          <div className="flex flex-col w-12/12 ml-24 gap-6">
            <div className="flex flex-col gap-2">
              <label className="flex">Add title*</label>
              <textarea
                rows="4"
                cols="50"
                className="border-gray-400 border-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="flex">Add text*</label>
              <textarea
                rows="7"
                cols="50"
                className="border-gray-400 border-2 rounded-lg"
              />
            </div>
          </div>
          <button className="mt-6 border-2 border-gray-400 rounded-full px-4 bg-192140 text-white text-sm flex ml-24">
            Post
          </button>
        </form>
      </div>
      <div className="mt-36">
        <PostImage />
      </div>
    </div>
  );
}

export default Addposts;
