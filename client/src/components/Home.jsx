import React, { useState, useEffect } from 'react';
import { FaBook } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
  const [matatus, setMatatus] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const matatuResponse = await fetch('http://localhost:5000/api/matatus/count');
        const matatuData = await matatuResponse.json();
        if (matatuResponse.ok) {
          setMatatus(matatuData.count);
        } else {
          throw new Error('Failed to fetch matatus count');
        }

        const customerResponse = await fetch('http://localhost:5000/api/users/count');
        const customerData = await customerResponse.json();
        if (customerResponse.ok) {
          setCustomers(customerData.count);
        } else {
          throw new Error('Failed to fetch customers count');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    { name: 'Overview', matatus, customers }
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>Number of Matatus</h3>
                <FaBook className='card_icon' />
              </div>
              <h1>{matatus}</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Number of Customers</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>{customers}</h1>
            </div>
          </div>

          <div className='charts'>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="matatus" fill="#8884d8" name="Matatus" />
                <Bar dataKey="customers" fill="#82ca9d" name="Customers" />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="matatus" stroke="#8884d8" activeDot={{ r: 8 }} name="Matatus" />
                <Line type="monotone" dataKey="customers" stroke="#82ca9d" name="Customers" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </main>
  );
}

export default Home;
