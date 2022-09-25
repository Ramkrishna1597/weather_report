// import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "",
    uv: -4,
    pv: 2400,
    amt: 2400
  },
  {
    name: "6 am",
    uv: 0,
    pv: 1398,
    amt: 2210
  },
  {
    name: "",
    uv: 2,
    pv: 9800,
    amt: 2290
  },
  {
    name: "",
    uv: 4,
    pv: 3908,
    amt: 2000
  },
  {
    name: "",
    uv: 6,
    pv: 4800,
    amt: 2181
  },
  {
    name: "",
    uv: 8,
    pv: 3800,
    amt: 2500
  },
  {
    name: "2 PM",
    uv: 10,
    pv: 4300,
    amt: 2100
  }
  ,
  {
    name: "",
    uv: 8,
    pv: 4300,
    amt: 2100
  },
  {
    name: "",
    uv: 6,
    pv: 4300,
    amt: 2100
  },
  {
    name: "",
    uv: 4,
    pv: 4300,
    amt: 2100
  },
  {
    name: "",
    uv: 2,
    pv: 4300,
    amt: 2100
  },
  {
    name: "7:13pm",
    uv: 0,
    pv: 4300,
    amt: 2100
  },
  {
    name: "8pm",
    uv: -4,
    pv: 4300,
    amt: 2100
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default function App() {
  return (
    <AreaChart
      width={350}
      height={100}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="rgb(254,237,200)" stopOpacity={1} />
          <stop offset={off} stopColor="gray" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#000"
        fill="url(#splitColor)"
      />
    </AreaChart>
  );
}
