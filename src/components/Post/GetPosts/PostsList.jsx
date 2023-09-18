import React from "react";
import { PostCard } from "../../UI/PostCard.jsx/PostCard";

export const PostsList = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} user={props.userId}/>
      ))}
    </ul>
  );
};
