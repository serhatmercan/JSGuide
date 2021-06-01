// Date
var birthDay = new Date("12/26/1994"); //=> Mon Dec 26 1994 00:00:00 GMT+0200 (GMT+03:00) 	=> MM/DD/YYYY

birthDay = new Date(1994, 11, 26); // => Year, Month - 1, Day, Hour
console.log(birthDay); // => Mon Dec 26 1994 01:00:00 GMT+0200 (GMT+03:00)

birthDay = new Date("1994-12-26T01:00:00"); // => Year - Month - Day - Hour - Minute - Second
console.log(birthDay); // => Mon Dec 26 1994 01:00:00 GMT+0200 (GMT+03:00)

// Data Formatted
let today = new Date(),								
	todayTR = today.toLocaleDateString("tr-TR"),	
	todayEN = today.toLocaleDateString("en-US");	

console.log(today);		// Sun Jun 28 2020 12:51:35 GMT+0300 (GMT+03:00)
console.log(todayTR);	// "28.06.2020"	
console.log(todayEN);	// "6/28/2020"

// Convert Date
var dateUTC = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
console.log(dateUTC); // Tue Jun 01 2021 03:00:00 GMT+0300 (GMT+03:00)