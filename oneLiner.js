var days = (d1, m1, y1, d2, m2, y2) => Math.floor( Math.abs( new Date(`${y2}-${m2}-${d2}`) - new Date(`${y1}-${m1}-${d1}`) ) / 1000 / (60 * 60 * 24));
console.log(days(15, 11, 1997, 28, 05, 2023))
