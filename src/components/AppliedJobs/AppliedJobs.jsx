import React from "react";
import "./AppliedJobs.css";
import { useNavigate } from "react-router-dom";

const AppliedJobs = ({ job }) => {
  const navigate = useNavigate();
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    id,
  } = job;
  return (
    <div className="applied-card border rounded-md flex items-center justify-between px-2">
      <div className="flex items-center gap-5 ml-5">
        <img src={company_logo} alt="" />
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-2xl font-bold">{job_title}</h4>
          <h4 className="text-2xl">{company_name}</h4>
          <div className="flex py-5 gap-2">
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

export default AppliedJobs;
