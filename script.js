function getValues(){  //returns the values of current(value1) and salary time(value2) in ms
	var today = new Date();
	var thisDay = today.getDate();
	var thisHour = today.getHours();
	var thisMinute = today.getMinutes();
	var thisSecond = today.getSeconds();
	if (thisDay < 23){ //checks if today is payment day and picks month based on it
		monthPicked = today.getMonth();
	} else if (thisDay == 23) {
			if (thisHour < 12) {
				monthPicked = today.getMonth();
			} else {
				monthPicked = today.getMonth()+1;
						}
	}	else {
		monthPicked = today.getMonth()+1;
	}
// #TODO yearPicked needs to be edited to change with passing years
	var yearPicked = 2020;
	var datePicked = new Date(yearPicked, monthPicked, 23, 12, 0);
	var value2 = datePicked.getTime();
	var value1 = today.getTime();
	return [value1, value2]
}


function getTime() { //return the number of days, hours, minutes and seconds
	let time = getValues();
	let value1 = time[0];
	let value2 = time[1];
	var numOfDays = Math.floor((value2 - value1) / (1000 * 60 * 60 * 24));
	var numOfHours = Math.floor(((value2 - value1) / (1000 * 60 * 60)) % 24);
	var numOfMinutes = Math.floor(((value2 - value1) / (1000 * 60)) % 60);
	var numOfSeconds = Math.floor(((value2 - value1) / 1000) % 60);
	return [numOfDays, numOfHours, numOfMinutes, numOfSeconds]
}


function CreateCounter(){ //creates the html elemnts for the counter and displays it
	var values =  getTime();
	var dayCounter = document.createElement("span");
	dayCounter.id= "dayCounter";
	if (values[0] < 10) {dayCounter.innerHTML = "0" + values[0] + " : ";}
	else {dayCounter.innerHTML = values[0] + " : ";}
	document.getElementById("counter").appendChild(dayCounter);
	var hourCounter = document.createElement("span");
	hourCounter.id = "hourCounter";
	if (values[1] < 10){ hourCounter.innerHTML = "0" + values[1] + " : ";}
	else {hourCounter.innerHTML = values[1] + " : ";}
	document.getElementById("counter").appendChild(hourCounter);
	var minuteCounter = document.createElement("span");
	minuteCounter.id = "minuteCounter"
	if (values[2]<10){ minuteCounter.innerHTML = "0" + values[2] + " : ";}
	else {minuteCounter.innerHTML = values[2] + " : ";}
	document.getElementById("counter").appendChild(minuteCounter);
	var secondCounter = document.createElement("span");
	secondCounter.id = "secondCounter";
	if (values[3] < 10){secondCounter.innerHTML = "0" + values[3]}
	else {secondCounter.innerHTML = values[3]}
	document.getElementById("counter").appendChild(secondCounter);
}

function showSec(s) {
	if (s > 9) {
		document.getElementById("secondCounter").innerHTML = s;
	} else {
		document.getElementById("secondCounter").innerHTML = "0" + s;
	}
}

function showMin(m) {
	if (m > 9) {
		document.getElementById("minuteCounter").innerHTML = m + " : ";
	} else {
		document.getElementById("minuteCounter").innerHTML = "0" + m + " : ";
	}
}

function showHo(h) {
	if (h > 9) {
		document.getElementById("hourCounter").innerHTML = h + " : ";
	} else {
		document.getElementById("hourCounter").innerHTML = "0" + h + " : ";
	}
}

function showDay(d) {
	if (d > 9) {
		document.getElementById("dayCounter").innerHTML = d + " : ";
	} else {
		document.getElementById("dayCounter").innerHTML = "0" + d + " : ";
	}
}

(function countOneDown() {
	CreateCounter();
	var values =  getTime();
	var d = values[0];
	var h = values[1];
	var m = values[2];
	var s = values[3];
	var ticktock = setInterval(counter, 1000);
	function counter(){
		if (d > 0) {
        	if (h > 0) {
          	if (m > 0) {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	m--;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	} else {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	h--;
              	showHo(h);
              	m = 59;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	}
        	} else {
          	if (m > 0) {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	m--;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	} else {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	d--;
              	showDay(d);
              	h = 23;
              	showHo(h);
              	m = 59;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	}
        	}
      	} else {
        	if (h > 0) {
          	if (m > 0) {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	m--;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	} else {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	h--;
              	showHo(h);
              	m = 59;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	}
        	} else {
          	if (m > 0) {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {

              	m--;
              	showMin(m);
              	s = 59;
              	showSec(s);
            	}
          	} else {
            	if (s > 0) {
              	s--;
              	showSec(s);
            	} else {
              	clearInterval(ticktock);

            	}
          	}
        	}
      	}
	}
}
)();
