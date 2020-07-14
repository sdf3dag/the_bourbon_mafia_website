
var today = new Date();
var day = today.getDate();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var week = weekday[today.getDay()];
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var monthly = month[today.getMonth()];
var year = today.getFullYear();

document.getElementById("today").innerHTML = 'As of' + '&nbsp' + week + '&nbsp' + monthly + '&nbsp' + day + ',' + '&nbsp' + year + ',' + '&nbsp' + 'The Bourbon Mafia has raised $45,750';










