import Header from "./components/Header/Header";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      About company
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default About;
