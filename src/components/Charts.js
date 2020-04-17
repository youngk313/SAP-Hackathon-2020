import React from 'react';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from 'recharts';
import * as aprilData from '../locations/2020_APRIL.json';
import {getLocationNameAndCoordinates} from '../locationParser';
import ControlledOpenSelect from '../ControlOpenSelect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {formatData} from '../covidDataRequest';
import { getLocationAndTime } from '../timeParser';


const margins = {top: 5, right: 5, left:5, bottom:5}
const url = "https://pomber.github.io/covid19/timeseries.json";
const cutOffDate = "2020-04-03";

export default class  Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: null,
            country: 'Canada',
        }
        this.changeCountry = this.changeCountry.bind(this);
    }

    async updateCountryData() {
        const response = await fetch(url);
        const responseData = await response.json();
        this.setState({cases: formatData(responseData, this.state.country, cutOffDate)});
    }

    componentDidMount() {
        getLocationNameAndCoordinates(aprilData);
        getLocationAndTime(aprilData);

    }

    componentWillMount() {
        this.updateCountryData();
    }

    changeCountry(country) {
        this.setState ({
            country: country
        })
        this.updateCountryData();
    }
    render() {
    return (
        <div style={{margin:'50px'}}>
            <Card style={{margin:'auto', width: '100%', textAlign: 'center'}}>
                <CardHeader title={"COVID-19 Stats for " + this.state.country} style={{margin:'auto'}}></CardHeader>
                <ControlledOpenSelect changeCountry={this.changeCountry} ></ControlledOpenSelect>
                <CardContent>
                    <ResponsiveContainer width="90%" height={300}>
                        <BarChart data={this.state.cases} margin={margins} style={{margin:'auto'}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Confirmed" fill="#000000" />
                            <Bar dataKey="Deceased" fill="#FF0000" />
                            <Bar dataKey="Recovered" fill="#149414" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
      );
    }
}