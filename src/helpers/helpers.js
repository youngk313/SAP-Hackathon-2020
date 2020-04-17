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