import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops! It's a dead end!</h1>
        <Link to="/cocktails">
          <button className="btn btn-primary">go back</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
