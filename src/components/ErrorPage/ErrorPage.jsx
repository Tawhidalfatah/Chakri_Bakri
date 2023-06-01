import React from "react";
import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../../assets/error.json";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center w-3/12  mx-auto">
      <Lottie animationData={error404} loop={true}></Lottie>
      <div className="text-center">
        <h1 className="text-5xl text-red-600">
          {error.status}: {error.statusText}
        </h1>
        <p className="text-2xl my-5 italic">{error.data}</p>
      </div>
      <a href="/" className="btn-primary flex justify-center items-center">
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
