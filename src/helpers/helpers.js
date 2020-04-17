export const getLastNthDay = (N) => {
  const cleanDate = new Date(new Date(Date.now()).toDateString());
  const lastNthDay = cleanDate - (N * 24 * 60 * 60 * 1000);
  return lastNthDay;
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