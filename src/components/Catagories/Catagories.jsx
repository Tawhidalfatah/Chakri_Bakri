import React, { useEffect, useState } from "react";
import Catagory from "../Catagory/Catagory";

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("/catagories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="my-36">
      <h1 className="text-5xl font-bold">Job Catagory List</h1>
      <p className="default my-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-5">
        {catagories.map((ct, index) => (
          <Catagory key={index} catagory={ct}></Catagory>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
