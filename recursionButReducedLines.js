function days (d1, m1, y1, d2, m2, y2, count = 0) {
  if (m1 === m2 && y1 === y2) return count + (d2 - d1)
  count +=  m1 === 2 ? y1 % 400 === 0 || (y1 % 100 != 0 && y1 % 4 === 0) ? 29 : 28 : [4, 6, 9, 11].includes(m1) ? 30 : 31
  if (m1+1 === 13) { m1 = 1; y1++ } else m1++
  return days(d1, m1, y1, d2, m2, y2, count)
}
console.log(days(15, 11, 1997, 02, 03, 2023))
