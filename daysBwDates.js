function numberOfDays(a1,a2){
let d1 = a1%100,
d2 = a2%100,
m1 = Math.floor((a1%10000)/100),
m2 = Math.floor((a2%10000)/100),
y1 = Math.floor(a1/10000),
y2 = Math.floor(a2/10000);
let days = 0;

for(let i=y1+1; i<y2; i++){
if(checkLeap(i) == true){
days+=366;
}
else days+=365;
}


for(i=m1+1;i<=12;i++){
if(checkLeap(y1) == true){
if(i==2) days+=29;
}
else {
if(i==2) days+=28;
}
if(i==4||i==6||i==9||i==11)
days += 30;
else days += 31;
}


for(i=m2-1;i>=1;i--){
if(checkLeap(y2) == true){
if(i==2) days+=29;
}
else {
if(i==2) days+=28;
}
if(i==4||i==6||i==9||i==11)
days += 30;
if(i==1||i==3||i==5||i==7||i==8||i==10||i==12)
days += 31;
}


if(m1==4||m1==6||m1==9||m1==11)
days += (30 - d1);
if(m1==1||m1==3||m1==5||m1==7||m1==8||m1==10||m1==12)
days += (31 - d1);
days+=d2;

return days;
}


function checkLeap(yr){
if(yr%400==0 || (yr%4==0 && yr%100!=0)) {
return true;
}
else return false;
}


let bday = 19971115, today = 20211121;
let daysBetweenDates = numberOfDays(bday,today);
console.log(daysBetweenDates);
