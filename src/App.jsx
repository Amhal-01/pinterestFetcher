import React, { useState, useEffect } from "react";
import { Header, Footer, Posts } from "./components/";
import { fetchPosts } from "./api/";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-12">
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
