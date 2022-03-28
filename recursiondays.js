function days (d1, m1, y1, d2, m2, y2, count = 0) {
  if (m1 === m2 && y1 === y2) return count + (d2 - d1)
  count += daysInMonth(m1, y1)
  m1++
  if (m1 === 13) {
    m1 = 1
    y1++
  }
  return days(d1, m1, y1, d2, m2, y2, count)
}

function daysInMonth (month, year) {
  const monthsWith30Days = [4, 6, 9, 11]
  return month === 2 ? isLeapYear(year) ? 29 : 28 : monthsWith30Days.includes(month) ? 30 : 31
}

function isLeapYear (year) {
  return year % 400 === 0 || (year % 100 != 0 && year % 4 === 0) ? true : false
}

const numberOfDays = days(15, 11, 1997, 28, 03, 2022)
console.log(numberOfDays)
