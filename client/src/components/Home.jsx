import React from 'react';
import { BsBusFrontFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaBook } from 'react-icons/fa';

function Home() {
  const data = [
    { name: 'Bus 5', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Bus 10', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Bus 15', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Bus 20', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Bus 25', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Bus 30', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Bus 35', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Number of matatus</h3>
            <FaBook className='card_icon' />
          </div>
          <h1>0</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS REVIEW</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>0</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
