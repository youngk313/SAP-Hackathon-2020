import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Text} from 'recharts';
import * as aprilData from '../locations/2020_APRIL.json';
import {getLocationName, getLocationCoordinates} from '../locationParser';

const data = [{name: 'BC', 'Number of Cases': 400, 'Number of Deaths': 300}, {name:'f', pv: [30]}]
const margins = {top: 5, right: 5, left:5, bottom:5}


export default function Charts() {
    getLocationName(aprilData);
    return (
        <div >
            <p>Bar Chart</p>
            <BarChart width={730} height={250} data={data} margin={margins} style={{margin:'auto'}}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Number of Cases" fill="#8884d8" />
                <Bar dataKey="Number of Deaths" fill="#b30000" />
            </BarChart>
           {/*<AreaChart width={730} height={250} data={locationdata}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>*/}
        </div>
      );
}