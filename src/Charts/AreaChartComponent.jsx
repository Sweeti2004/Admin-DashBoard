import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', users: 350 },
  { date: 'Tue', users: 500 },
  { date: 'Wed', users: 920 },
  { date: 'Thu', users: 450 },
  { date: 'Fri', users: 900 },
  { date: 'Sat', users: 500 },
  { date: 'Sun', users: 880 },
];

function AreaChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#40E0D0" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#40E0D0" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="users" stroke="#40E0D0" fillOpacity={1} fill="url(#colorUsers)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartComponent;
