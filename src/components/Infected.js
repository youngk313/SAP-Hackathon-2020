import React, {useState} from 'react';
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button"

import { useSession } from './App';
import {getInfectedPlaces} from "../helpers/helpers";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Infected = () => {
    const [infectedPlaces, setInfectedPlaces] = useState([]);
    const [dates, setDates] = useState({});

    const user = useSession();

    const resultsHandler = async (event) => {
    event.stopPropagation();
    const infected = await getInfectedPlaces(user.uid);
    setInfectedPlaces(infected);
    }

    const InfectedList = styled.div`
        display: flex;
        flex-direction: column
        align-items: center
    `;

    return(
        <Card style={{width:"100%", height:"100%"}}>
            <InfectedList style={{width:"50%", height:"50%"}}>
            <Button onClick={(event) => resultsHandler(event)}>GET RESULTS</Button>
            </InfectedList>
            <TableContainer component={Paper}>
                <Table className={'table'} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Address</TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">To</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {infectedPlaces.length > 0 ? infectedPlaces.map((place) => (
                        <TableRow key={place.address}>
                            <TableCell component="th" scope="row">
                                {place.address}
                            </TableCell>
                            <TableCell align="right">{place.from}</TableCell>
                            <TableCell align="right">{place.to}</TableCell>
                        </TableRow>
                        )): undefined}
                    </TableBody>
                </Table>
                </TableContainer>
        </Card>
    );
    }

export default Infected;