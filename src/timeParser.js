export function getLocationAndTime (locations) {
    let tripDurations = [];
    const msToSec = 1000;
    const secToMin = 60;
    locations.default.timelineObjects.forEach(element => {
        let activity = element.activitySegment;
        if (activity) {
            tripDurations.push({start:activity.startLocation,
                end: activity.endLocation,
                time: (activity.duration.endTimestampMs - activity.duration.startTimestampMs) / msToSec / secToMin
            });
        }
    });
    console.log(tripDurations);
    return tripDurations;
}