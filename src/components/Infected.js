import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button"
import { useSession } from './App';
import {getInfectedPlaces} from "../helpers/helpers";

const Infected = () => {
  const [infectedPlaces, setInfectedPlaces] = useState([]);
  const [dates, setDates] = useState({});
  const user = useSession();


  const displayPlaces = infectedPlaces.map(obj => (
      <li key={obj.location.name}>
        {Date(parseInt(obj.duration.endTimestampMs, 10))}
      </li>
  ));


  const resultsHandler = (event) => {
    event.stopPropagation();
    setInfectedPlaces(getInfectedPlaces(user.uid));
    console.log(infectedPlaces);
  }

    return(
        <Card style={{width:"50%", height:"75%"}}>
          <div style="width=50%; height=50%">
            <ul>
              displayPlaces
            </ul>
            <Button onClick={(event) => resultsHandler(event)}>GET RESULTS</Button>
          </div>
        </Card>
    );
  }

export default Infected;
