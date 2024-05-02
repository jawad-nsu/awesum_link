'use client';

import { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Apr 03',
    uv: 0,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Apr 08',
    uv: 0,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Apr 13',
    uv: 0,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Apr 18',
    uv: 0,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Apr 23',
    uv: 0,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Apr 28',
    uv: 0,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const Activity = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className='bg-white max-w-[40rem] rounded-lg w:[20rem] md:w-[40rem]'>
      <ResponsiveContainer aspect={1.5}>
        <ComposedChart
          data={data}
          margin={{
            top: 50,
            right: 20,
            bottom: 20,
            left: 5,
          }}
        >
          <CartesianGrid
            stroke='#dfdfdf'
            strokeDasharray='3 3'
            vertical={false}
          />
          <XAxis dataKey='name' />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey='pv' barSize={7} fill='#baf5d9' />
          <Line
            type='monotone'
            dataKey='uv'
            stroke='#39cbff'
            strokeWidth={3}
            dot={{
              stroke: '#39cbff',
              strokeWidth: 1,
              r: 4,
              strokeDasharray: '',
              fill: '#39cbff',
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
