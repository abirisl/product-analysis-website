import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from 'recharts';
import './Dashboards.css'

const Dashboards = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        
          <div className='chart'>
              <div>
              <BarChart width={700} height={300} data={data}>
              <CartesianGrid strokeDasharray= "3 3" />
              <XAxis datakey= "month" />
              <YAxis/>
              <Legend/>
              <Bar dataKey="investment" stackId="a" fill="#82ca9d"/>
              <Bar dataKey="revenue" stackId="a" fill="#8884d8"/>
          </BarChart>
              </div>
            <div>
                <ComposedChart width={700} height={300} data={data}>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Legend/>
                    <CartesianGrid stroke='#f5f5f5'/>
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884bd"/>
                    <Bar datakey="sell" barSize={20} fill="#413ea0"/>
                    <Line type="monotone" datakey="revenue" stroke="ff7300"/>
                </ComposedChart>
            </div>
          </div>
         
    );
};

export default Dashboards;