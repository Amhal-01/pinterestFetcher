import React from "react";

const Post = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div className="card">
            <img src="" className="card-img-top" alt="ig_image" />
            <div className="card-body">
              <h4 className="card-title">User</h4>
              <h6 className="card-text">Hashtags</h6>
              <p className="card-text">Here Descriptions.</p>
              <button className="btn btn-danger">
                Add to Pinterest
              </button>
            </div>
          </div>
        </div>
        <div className="col-2">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Post;
