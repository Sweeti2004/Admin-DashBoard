import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Asia', value: 450 },
    { name: 'Australia', value: 90 },

  { name: 'North America', value: 280 },

  { name: 'Africa', value: 210 },
];

const COLORS = ['#FF4C4C', '#FFD93D', '#4CAF50', '#9C27B0'];

function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartComponent;
