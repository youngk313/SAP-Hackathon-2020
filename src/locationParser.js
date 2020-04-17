export function getLocationNameAndCoordinates (locations) {
    let placesVisited = [];
    locations.default.timelineObjects.forEach(element => {
        if (element.placeVisit) {
            placesVisited.push({name: element.placeVisit.location.name, latitude: element.placeVisit.location.latitudeE7, longitude: element.placeVisit.location.longitudeE7});
        }
    });
    return placesVisited;
}