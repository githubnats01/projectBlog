import { useState } from "react";
import postsData from "./posts.json";
import "./App.css";
import { PostsList } from "./components/PostsList";
import { PostImage } from "./components/PostImage";
import Blog from "./pages/Blog";
import {
  BrowserRouter,
  Route,
  Router,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import RootLayout from "./pages/root-layout/RootLayout";
import Allposts from "./pages/sub-pages/Allposts";
import Favorites from "./pages/sub-pages/Favorites";
import Addposts from "./pages/sub-pages/Addposts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/projectBlog/" element={<RootLayout />}>
      <Route path="/projectBlog/" element={<About />} />
      <Route path="/projectBlog/blog" element={<Blog />}>
        <Route index="/projectBlog/blog/allposts" element={<Allposts />} />
        <Route path="/projectBlog/blog/favorites" element={<Favorites />} />
        <Route path="/projectBlog/blog/addposts" element={<Addposts />} />
      </Route>

      <Route path="/projectBlog/reviews" element={<Reviews />} />
      <Route path="/projectBlog/signup" element={<SignUp />} />
      <Route path="/projectBlog/login" element={<LogIn />} />
    </Route>
  )
);

function App() {
  const [posts, setPosts] = useState(postsData);

  const handleImageSuccess = (imageUrl) => {
    console.log(imageUrl);
  };

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
