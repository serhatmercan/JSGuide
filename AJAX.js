// Create an XMLHttpRequest Object
// eslint-disable-next-line no-unused-vars
function fnAJAX() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = () => {
    // Gets Everytime Fired When the XHR Request State Changes
    if (this.readyState === 4 && this.status === 200) {
      // 4 means Request is Finished & Response is Ready 200 Means OK
      console.log(this.responseText); // This Refers Here to the XHR Object

      if (this.responseXML) {
        decodeXML(this);
      }
    }
  };
  xhttp.open("GET", "https://reqres.in/api/products/3", true); // Set the XHR Request Parameters
  xhttp.send(); // Fire the XHR Request
}
// => Response Text
/*
{
  "data": {
    "id": 3,
    "name": "true red",
    "year": 2002,
    "color": "#BF1932",
    "pantone_value": "19-1664"
  },
  "ad": {
    "company": "StatusCode Weekly",
    "url": "http://statuscode.org/",
    "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
  }
}
*/
function decodeXML(xhr) {
  const oData = xhr?.responseXML?.getElementsByTagName("p")[0]?.getElementsByTagName("DATA_COLUMN")[0]?.childNodes[0]?.nodeValue;
  // Add any additional processing logic for oData
}

// AJAX: Fetch
async function getWeather(WOEID) {
  try {
    const oResponse = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${WOEID}/`);
    const oData = await oResponse?.json();
    const oToday = oData?.consolidated_weather[0];

    console.log(`Temperatures today in ${oData?.title} stay between ${oToday?.min_temp} and ${oToday?.max_temp}.`);
  } catch (oError) {
    console.error(oError);
  }
}

getWeather(2487956);
getWeather(44418);

// AJAX: Fetch II with jQuery
$.ajax({
  cache: false,
  type: "GET",
  url: "/sap/opu/odata/SAP/ZSM_TST_SRV/ValueSet?$filter=ID eq('X')",
  dataType: "json",
  success: (oData) => {
    const xData = oData;
  },
  error: (oError) => {
    if (oError?.responseJSON) {
      const sMessage = oError?.responseJSON?.error?.message?.value;
      console.error(sMessage);
    }
  }
});