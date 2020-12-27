// Palauttaa aikaa vastaavan kuukauden nimen
export function getDate(time: any) {
  const monthNames = ["January", "February", 
                      "March", "April", "May", "June",
                      "July", "August", "September",
                      "October", "November", "December"
  ];
  const nanosecs = getNanoSeconds(time);
  const date = new Date(nanosecs);  
  const month = date.getMonth();  
  return monthNames[month];
}

// Palauttaa nanosekunnit (date: t {seconds: 1603486800, nanoseconds: 0})
export function getNanoSeconds(time:any) {
  return time.nanoseconds + time.seconds * 1000;
}