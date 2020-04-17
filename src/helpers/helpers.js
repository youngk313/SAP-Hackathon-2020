import {database} from "../firebase";

export const getLastNthDay = (N) => {
  const cleanDate = new Date(new Date(Date.now()).toDateString());
  const lastNthDay = cleanDate - (N * 24 * 60 * 60 * 1000);
  return lastNthDay;
};

export const getNDaysSinceDate = (day, n) => {
    const cleanDate = new Date(new Date(day).toDateString());
    const lastNthDay = cleanDate - (n * 24 * 60 * 60 * 1000);
    return lastNthDay;
};

// TODO (GETS UR USER ID AND MATCHES UR ID WITH ALL INFECTED PLACES YOU HAVE BEEN TO)
// RETURNS AN ARRAY OF KEYS WHICH ARE THE INFECTED LOCATIONS AND DATES
export const getInfectedPlaces = async () => {
    await database.ref("/users/" + "userid").once("value").then(
        function(snapshot) {
            let locations = snapshot.val();
            let keys = Object.keys(locations);
            let infectedKeys = Array(0);
            console.log(keys);

            // this is gross i know but bear with me its a proof of concept Xd
            for(let i = 0; i < keys.length; i++) {
                database.ref("/locations/" + keys[i]).once("value").then(
                    function(ss) {
                        if(ss.val() != null) {
                            infectedKeys.append(keys[i]);
                        }
                    }
                )
            }

            console.log(infectedKeys);
            return infectedKeys;
        });
}

// GETS THE COVID DATA BASED ON A KEY (HASHKEY)
// RETURNS AN OBJECT LIKE YOU SEE IN FIREBASE AFTER YOU CLICK "+" ON THE KEY
export const getCovidData = (hashkey) => {
    database.ref("/locations/" + hashkey).once("value").then(
        function(snapshot) {
            return snapshot.val();
        }
    )
};

// RETURNS ALL THE KEYS OF COVID AREAS
// probably for uses in graphs
export const getAllCovidDataKeys = () => {
    database.ref("/locations").once("value").then(
        function(snapshot) {
            return Object.keys(snapshot.val());
        });
};


export const filterPlaceVisited = (data) =>{
  console.log(data);
  let cleanData = [];
  data.forEach(element => {
    if(element.placeVisit){
      cleanData.push(
        {
          "lat":element.placeVisit.location.latitudeE7/10000000, 
          "lng":element.placeVisit.location.longitudeE7/10000000,
          "weight": 15
        });
    }
  });
  return cleanData;
};
