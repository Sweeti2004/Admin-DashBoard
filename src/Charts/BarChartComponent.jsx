import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 1500 },
  { month: 'Feb', revenue: 4500 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 6800 },
  { month: 'May', revenue: 5200 },
  { month: 'Jun', revenue: 8900 },
  { month: 'Jul', revenue: 4100 },
  { month: 'Aug', revenue: 7600 },
  { month: 'Sep', revenue: 4000 },
  { month: 'Oct', revenue: 9700 },
  { month: 'Nov', revenue: 5300 },
  { month: 'Dec', revenue: 8000 },
];


function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#2E8B57" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;