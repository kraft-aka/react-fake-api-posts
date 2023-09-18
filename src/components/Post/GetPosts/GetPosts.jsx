import React, { useState, useEffect } from "react";
import { PostsList } from "./PostsList";

export const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const url = "https://jsonplaceholder.typicode.com/posts";

  const sendRequest = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setPosts(data);
      console.log(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
    setError(null)
  };

  useEffect(() => {
    sendRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);


  return (
    <div>
      <PostsList posts={posts} id={id} title={title} body={body} user={userId}/>
    </div>
  );
};
