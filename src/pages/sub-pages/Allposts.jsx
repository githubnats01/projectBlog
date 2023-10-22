import React, { useState } from "react";
import postsData from "../../posts.json";
import { PostsList } from "../../components/PostsList";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function Allposts() {
  const [posts, setPosts] = useState(postsData);
  const [isLike, setIsLike] = useState(false);

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleLiked = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, liked: !post.liked };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <div>
      <PostsList
        posts={posts}
        deleteBlog={handleDelete}
        liked={handleLiked}
        solidHeart={solidHeart}
        regularHeart={regularHeart}
      />
    </div>
  );
}

export default Allposts;
