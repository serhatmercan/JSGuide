/* eslint-disable no-unused-vars */
// Date
let dBirthDay = new Date("12/26/1994"); 		//=> Mon Dec 26 1994 00:00:00 GMT+0200 (GMT+03:00) 	=> MM/DD/YYYY

dBirthDay = new Date(1994, 11, 26);				// => Year, Month - 1, Day, Hour
dBirthDay = new Date("1994-12-26T01:00:00"); 	// => Year - Month - Day - Hour - Minute - Second

// Data Formatted
let dToday = new Date();			// Sun Jun 28 2020 12:51:35 GMT+0300 (GMT+03:00)

dToday.toLocaleDateString("tr-TR");	// "28.06.2020"	
dToday.toLocaleDateString("en-US");	// "6/28/2020" 	

// Convert Date
new Date(Date.UTC(dToday.getFullYear(), dToday.getMonth(), dToday.getDate()));	// Tue Jun 01 2021 03:00:00 GMT+0300 (GMT+03:00)
console.log(dateUTC);

// Find Min Date From Array
new Date(Math.min(...aData.map(e => new Date(e.Tarih))));