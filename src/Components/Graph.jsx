// Graph.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

// Dummy placeholder graph data
const dummyData = [
  { date: 'Apr 01', food: 0, shopping: 0 },
  { date: 'Apr 02', food: 0, shopping: 0 },
  { date: 'Apr 03', food: 0, shopping: 0 },
  { date: 'Apr 04', food: 0, shopping: 0 },
];

const Graph = ({ graphData }) => {
  const dataToUse = graphData.length > 0 ? graphData : dummyData;

  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataToUse}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Line type="monotone" dataKey="shopping" stroke="#36b9cc" name="Total amount" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
