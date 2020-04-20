import React from "react";
import Post from "./Post";
import SearchForm from "./SearchForm";

const Posts = (props) => {
  return (
    <div>
      <h1 className="text-center text-danger">Posts</h1>
      <SearchForm />
      <p>
        <i>Total posts fetched: XX</i>
      </p>
      <Post />
    </div>
  );
};

export default Posts;
