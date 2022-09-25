import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import Chart from "./Chart"


const Current = ({current, forecast:{forecastday}} ) => {
  return (
    <div className='container'>
      <div className="live">
        <h1>{current.feelslike_c}°C</h1>
        <img src={current.condition.icon} alt="" />
      </div>
      <div className="chart">
      {/* <Chart></Chart> */}
      <AreaChart
        width={1800}
        height={200}
        data={forecastday[0].hour}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="temp_c" stroke="#8884d8" fill="rgb(66,170,233)" />
      </AreaChart>
      </div>
      <div className="pres">
        <div>
          <h3>Pressure</h3>
          {current.pressure_mb} hpa
        </div>
        <div>
        <h3>Humidity</h3>
          {current.humidity} %
        </div>
      </div>

      <div className="pres">
        <div>
          <h3>Sunrise</h3>
          {forecastday[0].astro.sunrise}
        </div>
        <div>
        <h3>Sunset</h3>
        {forecastday[0].astro.sunset}
        </div>
      </div>
      
      <Chart></Chart>
      Current
    </div>
  )
}

export default Current
