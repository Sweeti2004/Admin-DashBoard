import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', traffic: 500 },
  { date: 'Feb', traffic: 850 },
  { date: 'Mar', traffic: 1200 },
  { date: 'Apr', traffic: 300 },
  { date: 'May', traffic: 1400 },
  { date: 'Jun', traffic: 1700 },
  { date: 'Jul', traffic: 1600 },
  { date: 'Aug', traffic: 1800 },
  { date: 'Sep', traffic: 1100 },
  { date: 'Oct', traffic: 900 },
  { date: 'Nov', traffic: 700 },
  { date: 'Dec', traffic: 1000 },
];


function LineChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="traffic" stroke="#FF0000" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;