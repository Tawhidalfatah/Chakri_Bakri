import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "A-1",
    mark: 60,
  },
  {
    name: "A-2",
    mark: 59,
  },
  {
    name: "A-3",
    mark: 60,
  },
  {
    name: "A-4",
    mark: 60,
  },
  {
    name: "A-5",
    mark: 60,
  },
  {
    name: "A-6",
    mark: 49,
  },
  {
    name: "A-7",
    mark: 60,
  },
  {
    name: "A-8",
    mark: 60,
  },
];

const Statistics = () => {
  return (
    <div>
      <div className="background h-64 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Statistics</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-5 gap-5">
        <div>
          <h1 className="text-3xl font-bold">Assignment Analytics</h1>
          <p className="font-semibold">Average Assignment Mark: 58.50</p>
        </div>
        <AreaChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
