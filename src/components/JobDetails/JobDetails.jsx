import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import "./JobDetails.css";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  let { id } = useParams();
  const data = useLoaderData();
  const [value, setValue] = useState({});
  useEffect(() => {
    setValue(data.find((dt) => dt.id === parseInt(id)));
  }, []);
  const {
    job_description,
    job_responsibility,
    salary,
    location,
    educational_requirements,
    experiences,
    contact_information,
    job_title,
  } = value;

  return (
    <div>
      <div className="background h-64 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Job Details</h1>
      </div>
      <div className="flex justify-evenly items-center mt-28">
        <div className="w-2/4">
          <p className="py-2">
            <span className="font-bold">Job Description:</span>
            <br />
            {job_description}
          </p>
          <p className="py-2">
            <span className="font-bold">Job Responsibility:</span>
            <br />
            {job_responsibility}
          </p>
          <p className="py-2">
            <span className="font-bold">Educational Requirements:</span>
            <br />
            {educational_requirements}
          </p>
          <p className="py-2">
            <span className="font-bold">Experiences:</span>
            <br />
            {experiences}
          </p>
        </div>
        <div>
          <div className="w-96 h-96 rounded-md back flex flex-col items-center">
            <h3 className="text-xl font-bold pt-3">Job Details</h3>
            <div className="divider"></div>
            <div className="flex py-2 items-center">
              <img
                src="https://tawhidalfatah.github.io/career-images/frame.png"
                alt=""
              />
              <h3>
                <span className="font-bold">Salary: </span>
                {salary}
              </h3>
            </div>
            <div className="flex py-2 items-center">
              <img
                src="https://tawhidalfatah.github.io/career-images/frame-1.png"
                alt=""
              />
              <h3>
                <span className="font-bold">Job Title : </span>
                {job_title}
              </h3>
            </div>
            <h4 className="pt-3 text-xl font-bold">Contact Information</h4>
            <div className="divider"></div>
            <div className="flex py-2 items-center">
              <img
                src="https://tawhidalfatah.github.io/career-images/frame-2.png"
                alt=""
              />
              <h3>
                <span className="font-bold">Phone : </span>
                {contact_information?.phone}
              </h3>
            </div>
            <div className="flex py-2 items-center">
              <img
                src="https://tawhidalfatah.github.io/career-images/frame-3.png"
                alt=""
              />
              <h3>
                <span className="font-bold">Email : </span>
                {contact_information?.email}
              </h3>
            </div>
            <div className="flex py-2 items-center">
              <img
                src="https://tawhidalfatah.github.io/career-images/frame-4.png"
                alt=""
              />
              <h3>
                <span className="font-bold">Address : </span>
                {location}
              </h3>
            </div>
          </div>
          <button
            onClick={() => addToDb(value.id)}
            className="btn-primary my-4"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
