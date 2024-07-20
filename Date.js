// Date
let oBirthDay = new Date("1994-12-26"); 		//  => Mon Dec 26 1994 00:00:00 GMT+0200 (GMT+03:00) 	=> MM/DD/YYYY

oBirthDay = new Date(1994, 11, 26);				//  => Year, Month - 1, Day, Hour
oBirthDay = new Date("1994-12-26T01:00:00"); 	//  => Year - Month - Day - Hour - Minute - Second

// Data Formatted
let oToday = new Date();			// => Sun Jun 28 2020 12:51:35 GMT+0300 (GMT+03:00)

oToday.toLocaleDateString("tr-TR");	// => "28.06.2020"	
oToday.toLocaleDateString("en-US");	// => "6/28/2020" 	

// Convert Date
const oTodayUTC = new Date(Date.UTC(oToday.getFullYear(), oToday.getMonth(), oToday.getDate())); // => Tue Jun 01 2021 03:00:00 GMT+0300 (GMT+03:00)

// Find Min Date From Array
const aDates = [
    { Tarih: "2020-01-01" },
    { Tarih: "2021-01-01" },
    { Tarih: "2019-01-01" }
];
const oMinDate = new Date(Math.min(...aDates.map(oDate => new Date(oDate.Tarih))));

// Get Year
const sYear = new Date().getUTCFullYear().toString(); // => "2023"