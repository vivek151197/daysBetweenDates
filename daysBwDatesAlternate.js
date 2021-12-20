function numberOfDays (a1, a2) {
  let d1 = a1 % 100,
    d2 = a2 % 100,
    m1 = Math.floor((a1 % 10000) / 100),
    m2 = Math.floor((a2 % 10000) / 100),
    y1 = Math.floor(a1 / 10000),
    y2 = Math.floor(a2 / 10000)
  let daysTilld1 = 0,
    daysTilld2 = 0

  //find the days till d1 from 0 AD.
  daysTilld1 += (y1 - 1) * 365 + leapYears(y1 - 1)
  for (let i = 0; i < m1; i++) {
    daysTilld1 += daysInMonth[i]
  }
  if (checkLeap(y1 == true)) {
    if (m1 > 2) daysTilld1 += 1
  }
  daysTilld1 += d1

  //find the days till d2 from 0 AD.
  daysTilld2 += (y2 - 1) * 365 + leapYears(y2 - 1)
  for (let i = 0; i < m2; i++) {
    daysTilld2 += daysInMonth[i]
  }
  if (checkLeap(y2 == true)) {
    if (m2 > 2) daysTilld2 += 1
  }
  daysTilld2 += d2

  return daysTilld2 - daysTilld1
}

//Array to store days in each month
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//function to count number of leap years till the given year from 0 AD.
function leapYears (yr) {
  return Math.floor(yr / 4) - Math.floor(yr / 400) + Math.floor(yr / 100)
}

//function to check if the given year is leap.
function checkLeap (yr) {
  if (yr % 400 == 0 || (yr % 4 == 0 && yr % 100 != 0)) {
    return true
  } else return false
}

let bday = 19971115,
  today = 20211121
let NumberOfDays = numberOfDays(bday, today)
console.log(NumberOfDays)
