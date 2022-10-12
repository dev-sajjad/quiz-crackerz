import React from "react";
import { useLoaderData } from 'react-router-dom'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data;
    
    return (
      <div style={{ width: "100%", height: 300 }}>
        <h2 className="text-center mt-5 mb-4 text-md md:text-3xl bg-slate-400 rounded-md p-2 w-5/12 mx-auto">
          LineChart Analysis of Quizzes
        </h2>

        <ResponsiveContainer>
          <LineChart
            className="w-4/12 md:w-8/12 mx-auto "
            width={400}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 50,
              left: 30,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistics;