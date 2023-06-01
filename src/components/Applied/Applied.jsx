import React, { useState } from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJobs from "../AppliedJobs/AppliedJobs";

const Applied = () => {
  const jobs = useLoaderData();

  let appliedJobs = [];

  const localJobs = getShoppingCart();

  for (const id in localJobs) {
    const foundJob = jobs.find((job) => job.id === parseInt(id));
    if (foundJob) {
      appliedJobs.push(foundJob);
    }
  }
  const [selectedJobs, setSelectedJobs] = useState(appliedJobs);
  function handleRemote() {
    setSelectedJobs(
      appliedJobs.filter((job) => job.remote_or_onsite == "Remote")
    );
  }
  function handleOnsite() {
    setSelectedJobs(
      appliedJobs.filter((job) => job.remote_or_onsite == "Onsite")
    );
  }

  return (
    <div>
      <div className="background h-64 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Applied Jobs</h1>
      </div>

      <div className="dropdown dropdown-hover my-5">
        <label tabIndex={0} className="btn m-1 btn-primary">
          Filter By
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
        >
          <li>
            <button onClick={handleRemote}>Remote</button>
          </li>
          <li>
            <button onClick={handleOnsite}>Onsite</button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-4">
        {selectedJobs.map((job) => (
          <AppliedJobs key={job.id} job={job}></AppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default Applied;
