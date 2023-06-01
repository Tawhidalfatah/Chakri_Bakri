import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Featured = () => {
  const [toggle, setToggle] = useState(true);

  const featuredJobsData = useLoaderData();

  //   console.log(jobsData.splice(0, 4));

  return (
    <div className="my-36 flex flex-col  items-center">
      <h1 className="text-5xl font-bold">Featured Jobs</h1>
      <p className="default my-5">
        Explore thousands of job opportunities with our selected section of big
        shark companies. Apply Now!!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4">
        {toggle
          ? featuredJobsData
              .slice(0, 4)
              .map((job) => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
          : featuredJobsData.map((job) => (
              <FeaturedJob key={job.id} job={job}></FeaturedJob>
            ))}
      </div>
      <br />
      <button
        onClick={() => setToggle(false)}
        className={`btn-primary ${toggle ? "" : "hidden"}`}
      >
        Show All
      </button>
    </div>
  );
};

export default Featured;
