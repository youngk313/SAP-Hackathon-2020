export function formatData(data, country, recentDate) {
   let cases = [];
   data[country].forEach(day => {
       if (new Date(day.date) > new Date(recentDate)) {
           console.log("added")
           cases.push({date: day.date, 'Confirmed': day.confirmed, 'Deceased': day.deaths, 'Recovered': day.recovered})
       }
   });

   return cases;
}