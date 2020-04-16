export function getLocationName (locations) {
    let placesVisited = [];
    locations.default.timelineObjects.forEach(element => {
        if (element.placeVisit) {
            placesVisited.push(element.placeVisit.location.name);
        }
    });
    return placesVisited;
}

export function getLocationCoordinates (locations) {
    let placesVisited = [];
    locations.default.timelineObjects.forEach(element => {
        if (element.placeVisit) {
            placesVisited.push({latitude: element.placeVisit.location.latitudeE7, longitude: element.placeVisit.location.longitudeE7});
        }
    });
    return placesVisited;
}