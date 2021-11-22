function numberOfDays(a1,a2) {
	let d1 = a1%100,
	d2 = a2%100,
	m1 = Math.floor((a1%10000)/100),
	m2 = Math.floor((a2%10000)/100),
	y1 = Math.floor(a1/10000),
	y2 = Math.floor(a2/10000);
	let days = 0;
// add up the days in the between years
	for(let i=y1+1; i<y2; i++) { 
		if(checkLeap(i) == true){
		days+=366;
		}
		else days+=365;
	}

// add up the days in months of the given starting year
	for(i=m1+1;i<=12;i++) { 
		if(i==2) {
			if(checkLeap(y1) == true) {
				days+=29;
			}
			else {
				days+=28;
			}
		}
		else if(i==4||i==6||i==9||i==11)
			days += 30;
		else days += 31;
	}

//add up the days in months of the given ending year
	for(i=m2-1;i>=1;i--){
		if(i==2){
			if(checkLeap(y2) == true){
 				days+=29;
			}
			else {
				days+=28;
			}
		}
		else if(i==4||i==6||i==9||i==11) days += 30;
		else days += 31;
	}

// add up the remaining days in the starting month from the day given
	if(m1==2){
		if(checkLeap(y1)==true){
			days += 29;
		}
		else days += 28;
	}
	else if(m1==4||m1==6||m1==9||m1==11)
		days += (30 - d1);
	else days += (31 - d1);
// add up the days in the ending month
	days+=d2; 

return days;
}

// function to check if it is a leap year
function checkLeap(yr){ 
	if(yr%400==0 || (yr%4==0 && yr%100!=0)) {
		return true;
	}
	else return false;
}


let bday = 19971115, today = 20211122;
let daysBetweenDates = numberOfDays(bday,today);
console.log(daysBetweenDates);
