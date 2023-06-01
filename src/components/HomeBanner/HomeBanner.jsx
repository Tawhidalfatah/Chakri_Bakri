import React from "react";
import Lottie from "lottie-react";
import jobHunting from "../../assets/job-hunting.json";

const HomeBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center pt-10 background">
      <div className="text-left">
        <h1 className="text-7xl font-bold leading-tight">
          One Step
          <br />
          Closer To Your
          <br />
          <span className="active">Dream Job</span>
        </h1>
        <p className="default leading-7 my-7">
          Explore thousands of job opportunities with all the
          <br /> information you need. Its your future. Come find it. Manage all
          <br /> your job application from start to finish.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="w-4/12">
        <Lottie animationData={jobHunting} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default HomeBanner;
