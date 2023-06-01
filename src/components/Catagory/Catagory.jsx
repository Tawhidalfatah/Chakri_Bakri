import React from "react";

const Catagory = ({ catagory }) => {
  const { Category_name, Category_logo, Jobs_available } = catagory;
  return (
    <div className="w-80 h-64 rounded-lg background flex flex-col justify-center items-center">
      <div className="flex justify-center mb-5">
        <img src={Category_logo} alt="" />
      </div>
      <p className="text-xl font-semibold">{Category_name}</p>
      <p className="default">{Jobs_available} Jobs available</p>
    </div>
  );
};

export default Catagory;
