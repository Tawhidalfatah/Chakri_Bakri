import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const navigate = useNavigate();
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;
  return (
    <div className="border rounded-md p-5">
      <img className="mx-auto py-5" src={company_logo} alt="" />
      <div className="py-5">
        <h2 className="text-2xl font-semibold">{job_title}</h2>
        <p className="text-xl default">{company_name}</p>
      </div>
      <div className="flex justify-center gap-3 py-3">
        <p className="w-24 border border-indigo-600 text-indigo-600 rounded-md">
          {remote_or_onsite}
        </p>
        <p className="w-24 border border-indigo-600 text-indigo-600 rounded-md">
          {fulltime_or_parttime}
        </p>
      </div>
      <div className="flex justify-center gap-5 py-3">
        <div className="flex justify-center">
          <img
            src="https://tawhidalfatah.github.io/career-images/frame-4.png"
            alt=""
          />
          <p className="text-xl">{location}</p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://tawhidalfatah.github.io/career-images/frame.png"
            alt=""
          />
          <p className="text-xl">{salary}</p>
        </div>
      </div>

      <button
        onClick={() => navigate(`/job/${id}`)}
        className="btn-primary my-3"
      >
        View Details
      </button>
    </div>
  );
};

export default FeaturedJob;
