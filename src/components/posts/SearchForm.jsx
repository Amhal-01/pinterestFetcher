import React from "react";

const SearchForm = (props) => {
  return (
    <div className="container">
      <form className="form-inline">
        <div className="input-group col-9">
          <div className="input-group-prepend">
            <span className="input-group-text">#</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="IG Hashtag example #Instagood"
          />
        </div>
        <div className="input-group col-3">
          <button type="submit" className="btn btn-danger">
            Look for posts
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
