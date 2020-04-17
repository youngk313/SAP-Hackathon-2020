export function formatData(data, country, recentDate) {
   let cases = [];
   if (country !== undefined && country !== "") {
    data[country].forEach(day => {
        if (new Date(day.date) > new Date(recentDate)) {
            cases.push({date: day.date, 'Confirmed': day.confirmed, 'Deceased': day.deaths, 'Recovered': day.recovered})
        }
    });
    }
   return cases;
}