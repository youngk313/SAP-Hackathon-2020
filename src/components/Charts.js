import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
import * as aprilData from '../locations/2020_APRIL.json';
import {getLocationName, getLocationCoordinates} from '../locationParser';

const data = [{name: 'BC', 'Number of Cases': 400, 'Number of Deaths': 300}, {name:'f', pv: [30]}]
const margins = {top: 5, right: 5, left:5, bottom:5}


export default function Charts() {
    getLocationName(aprilData);
    return (
        <div >
            <Card style={{margin:'auto', width: '80%', textAlign: 'center'}}>
                <CardHeader title={"COVID-19 Stats for " + this.state.country} style={{margin:'auto'}}></CardHeader>
                <ControlledOpenSelect changeCountry={this.changeCountry} ></ControlledOpenSelect>
                <CardContent>
                    <BarChart width={730} height={250} data={this.state.cases} margin={margins} style={{margin:'auto'}}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis label ={{value:'Number Of Cases', angle: -90, position: 'insideLeft' }}/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Confirmed" fill="#8884d8" />
                        <Bar dataKey="Deceased" fill="#FF0000" />
                        <Bar dataKey="Recovered" fill="00FF00" />
                    </BarChart>
                </CardContent>
            </Card>
        </div>
      );
}