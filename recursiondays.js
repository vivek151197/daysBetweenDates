let count = 0;
function days(d1, m1, y1, d2, m2, y2) {
	if(m1 == m2 && y1 == y2) {
	  count += (d2 - d1);
	  return count;
	}

	else{
		if(m1 == 2) {
			if(y1 % 400 == 0 || (y1 % 4 == 0 && y1 % 100 != 0)) {
 			count += 29;
		}
			else count += 28;
		}
		else if(m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11) {
			count += 30;
		}
		else count += 31;

		m1++;
		
		if(m1 == 13) { 
			m1 = 1;
			y1++;
		}
	}
return days(d1, m1, y1, d2, m2, y2, count);
}

let numberOfDays = days(15, 11, 1997, 22, 11, 2021);
console.log(numberOfDays);
