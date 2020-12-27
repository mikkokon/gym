// yksi tapa jolla haetaan tietty data indexin avulla
// const index = completedShifts.findIndex(c => c.id === completed.id);
// const oldCompleted = completedShifts[index];


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

// Palauttaa Date -objektin )
export function getDateObj(time:any) {
  return new Date(time)
}

// Annetaan 'firebase' aika, palauttaa Date -objektin
export function getDateFromFireBase(time:any) {
  return new Date(time.nanoseconds + time.seconds * 1000)
}

// Muunna date(input) muotoon date : {year: xx, month: xx, day: xx}
// time : ms
export function getYearMonthDay(time: any) {
  const date = new Date(time)
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return {year: year, month: month+1, day: day}
}

// Muunna tämä päivä (input) muotoon date : {year: xx, month: xx, day: xx}
export function getYearMonthDayfromThisDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return {year: year, month: month+1, day: day}
}

// Muunna '2020,12,27'(input) muotoon Date -objekti
export function getDatefromString(date: any) {
  return new Date(date)
}




