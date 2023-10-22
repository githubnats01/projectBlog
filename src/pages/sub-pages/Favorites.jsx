import React, { useState } from "react";
import postsData from "../../posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faHeart as regularHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  const [posts, setPosts] = useState(postsData);

  return (
    <div>
      <ol className="cards-container px-32">
        {posts.map((post) =>
          post.isLiked ? (
            <li
              key={post.id}
              className="cards rounded-3xl hover:scale-105 hover:shadow-xl"
            >
              <div>
                <div className="relative">
                  <img
                    src={`https://picsum.photos/200?${Math.random()}`}
                    className="w-full h-48 object-cover rounded-t-3xl "
                  />
                </div>

                <div className="p-4">
                  <h1 className="line-clamp-1 text-lg font-bold">
                    {post.title}
                  </h1>
                  <p className="line-clamp-2 text-sm text-justify mb-3">
                    {post.text}
                  </p>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between mt-2 items-center">
                    <div className="flex text-xxs gap-1">
                      <p>{post.date}</p>.<p>{post.author}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="flex text-xxs gap-1 items-center">
                        <button>
                          <FontAwesomeIcon
                            icon={faComment}
                            className="text-xs hover:text-blue-600"
                          />
                        </button>
                        {post.comments.length}
                      </div>
                      <div className="flex text-xxs gap-1 items-center">
                        <button onClick={() => liked(post.id)}>
                          <FontAwesomeIcon
                            icon={
                              post.liked || post.isLiked
                                ? solidHeart
                                : regularHeart
                            }
                            className="text-xs hover:text-blue-600"
                          />
                        </button>
                        {post.likes >= 1000
                          ? (() => {
                              const roundedNum = (post.likes / 1000).toFixed(1);
                              return `${roundedNum}k`;
                            })()
                          : post.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ) : null
        )}
      </ol>
    </div>
  );
}

export default Favorites;
