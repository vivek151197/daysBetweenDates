function days (d1, m1, y1, d2, m2, y2, count = 0) {
  let changeInCount = 0
  if (m1 == m2 && y1 == y2) {
    return count + (d2 - d1)
  }

  changeInCount += daysInMonth(m1, y1)
  m1++
  if (m1 == 13) {
    m1 = 1
    y1++
  }
  return days(d1, m1, y1, d2, m2, y2, count + changeInCount)
}

function daysInMonth (month, year) {
  if (month == 2) {
    if (isLeapYear(year)) {
      return 29
    }
    return 28
  }

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30
  }

  return 31
}

function isLeapYear (year) {
  if (year % 400 == 0) return true
  if (year % 100 != 0) return false
  if (year % 4 == 0) return true
  return false
}

const numberOfDays = days(15, 11, 1997, 22, 11, 2021)
console.log(numberOfDays)
