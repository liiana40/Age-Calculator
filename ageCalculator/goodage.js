/*      JavaScript AgeCalculator

      Author: M. Liliana Ignat
      Date: 7/7/2017 

      Filename: age.js
*/
 "use strict"; //interpret contents in JavaScript strict mode 
 var formValidity = true;
 var countdown;
 var dateObject;
 var dateBirth;
 
// calculate age
function calculateAge() {	
	var birthMonth = document.getElementById("birthMo").selectedIndex;
	var birthDay = document.getElementById("birthDy").selectedIndex + 1;
	var birthYear = document.getElementById("birthYr").options[document.getElementById("birthYr").selectedIndex].text;
	alert(birthYear + " " + birthMonth + " " + birthDay );	
	var dateBirth = new Date(birthYear, birthMonth, birthDay);
	/*var birthYear = dateBirth.birthYear;
	var birthMonth = dateBirth.birthMonth;
	var birthDay = dateBirth.birthDay;
	alert(birthYear + " " + birthMonth + " " + birthDay );*/
	dateObject = new Date();
	var today = new Date(dateObject.getFullYear(),dateObject.getMonth(),dateObject.getDate());
	var yearNow = dateObject.getFullYear();
	var monthNow = dateObject.getMonth();
	var dateNow = dateObject.getDate();
	alert(yearNow + " " + monthNow + " " + dateNow );	
	var age = {};
	var ageString = "";
	var yearString = "";
	var monthString = "";
	var dayString = "";
	var yearAge = yearNow - birthYear;
	var monthAge;
	if (monthNow >= birthMonth) {
		 monthAge = monthNow - birthMonth;
	}
	else {
		yearAge--;
		 monthAge = 12 + monthNow - birthMonth;
	}
	
	if (dateNow >= birthDay) {
		var dateAge = dateNow - birthDay;
	}
	else {
		monthAge--;
		if (monthAge === 0 || monthAge === 2 || monthAge === 4 || monthAge === 6 || monthAge === 7 || monthAge === 9 || monthAge === 11) {
			// Jan, Mar, May, Jul, Aug, Oct, Dec
			var dateAge = 31 + dateNow - birthDay;
		} else if (monthAge === 1) { // Feb
			if (yearAge % 4 === 0) { // leap year test
				if (yearAge % 100 === 0) { 
					// year ending in 00 not a leap yeap unless divisible by 400
					if (yearAge % 400 === 0) {
						var dateAge = 29 + dateNow - birthDay;
					}
					else {
						var dateAge = 28 + dateNow - birthDay;
					}
				}
				else {
					var dateAge = 29 + dateNow - birthDay;
				}
			}
			else {
				var dateAge = 28 + dateNow - birthDay;
			}
		} else { // Apr, Jun, Sep, Nov
			var dateAge = 30 + dateNow - birthDay;
		} 
		if (monthAge <0) {
		monthAge = 11;
		yearAge--;
	}
}

age = {
	years: yearAge,
	months: monthAge,
	days: dateAge
};
if (age.years > 1) yearString = " years";
else yearString = " year";
if (age.months > 1) monthString = " months";
else monthString = " month";
if (age.days > 1) dayString = " days";
else dayString = " day";

if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Only " + age.days + dayString + " old!";
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString + " old. Happy Birthday!!";
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString + " and " + age.months + monthString + " old.";
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString + " and " + age.days + dayString + " old.";
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString + " and " + age.days + dayString + " old.";
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString + " old.";
  else ageString = "Oops! Could not calculate age!";
//alert(ageString);
  return ageString;
}

// Extension for Date since birthday
  function getTime(){
  var birthMonth = document.getElementById("birthMo").selectedIndex;
  var birthDay = document.getElementById("birthDy").selectedIndex + 1;
  var birthYear = document.getElementById("birthYr").options[document.getElementById("birthYr").selectedIndex].text;
 // alert(birthYear + " " + birthMonth + " " + birthDay );	
  dateObject = new Date();
  var dateObject = new Date(dateObject.getFullYear(),dateObject.getMonth(),dateObject.getDate());	
  var dateBirth = new Date(birthYear, birthMonth, birthDay);
 // var today = new Date(dateObject.getFullYear(),dateObject.getMonth(),dateObject.getDate());
  //alert("today" + t);
  var t = Date.parse(new Date()) - Date.parse(dateBirth);
  alert("total " + t);
  var seconds = Math.floor( (t/1000) % 60 );
   alert("seconds " + seconds);
  var minutes = Math.floor( (t/1000/60) % 60 );
  alert("minutes " + minutes);
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  alert("hours " + hours);
  var days = Math.floor( t/(1000*60*60*24) );
  alert("days " + days + " until now");
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

 function nextBirthday(){
  var birthMonth = document.getElementById("birthMo").selectedIndex;
  var birthDay = document.getElementById("birthDy").selectedIndex + 1;
  var birthYear = document.getElementById("birthYr").options[document.getElementById("birthYr").selectedIndex].text;	
  dateObject = new Date();
  dateObject = new Date(dateObject.getFullYear(),dateObject.getMonth(),dateObject.getDate(),dateObject.getHours(),dateObject.getMinutes());	
  dateBirth = new Date((dateObject.getFullYear()+1), birthMonth, birthDay, 19, 0);
  var t = Date.parse(dateBirth) - Date.parse(dateObject);
 // alert("total" + t);
  var seconds = Math.floor( (t/1000) % 60 );
  // alert("seconds" + seconds);
  var minutes = Math.floor( (t/1000/60) % 60 );
 //alert("minutes" + minutes);
   var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  alert("days " + days + " until your birthday next year");
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

  /* remove default values and formatting form from date selection lists */
 function removeSelectDefaults() {
	var emptyBoxes = document.getElementsByTagName("select");
	for (var i = 0; i < emptyBoxes.length; i++) {
		emptyBoxes[i].selectedIndex = -1;
	}
 }
 
/* validate form */
function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault(); // prevent form from submitting
	} else {
		evt.returnValue = false; //prevent form from submitting in IE8
	}
	formValidity = true; //reset value for revalidation
	//validatebirthDate();
	if (formValidity === true) {
		calculateAge();
		getTime();
		nextBirthday();
		//document.getElementById("errorMessage").innerHTML = "";
		//document.getElementById("errorMessage").style.display = "none";
		document.getElementsByTagName("form")[0].submit();
	} else {
		//document.getElementById("errorMessage").innerHTML = "Please complete the highlighted fields.";
		//document.getElementById("errorMessage").style.display = "block";
		scroll(0,0);
	}
}

/* create event listeners */
function createEventListeners() {
	var calcForm = document.getElementsByTagName("form")[0];
	if (calcForm.addEventListener) {
		calcForm.addEventListener("submit", validateForm, false);
	} else if (calcForm.attachEvent) {
		calcForm.attachEvent("onsubmit", validateForm);
	}
	/*var calculateButton = document.getElementById("calculateButton");
	calculateButton.addEventListener("click", calculateAge, false);*/	
}

/* run initial form canfiguration functions */
function setUpPage() {
	removeSelectDefaults();
	createEventListeners();
	//calculateAge();	
}

/* run setup function when page finishes loading */
 if (window.addEventListener) {
	 window.addEventListener("load", setUpPage, false);
 } else if (window.attachEvent) {
	 window.attachEvent("onload", setUpPage);
 }