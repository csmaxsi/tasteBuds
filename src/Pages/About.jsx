import React from "react";
import img1 from './aboutus.jpg'
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="col-lg-6 d-none d-lg-block"><img src={img1} height="768" width="1366"alt="" className="img-fluid"/></div>
                 
    </div>
  );
};

export default About;
