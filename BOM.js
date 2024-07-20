// WINDOW
const iWindowWidth = screen.width || window.innerWidth; // Screen | Window Width
const iWindowHeight = screen.height || window.innerHeight; // Screen | Window Height

// SCREEN
window.open(); // Open a New Window
window.close(); // Close the Current Window

// LOCATION
location.href = "https://google.com.tr"; // Go To The Page

const sCurrentHref = window.location.href; // "https://webidetesting8858993-dk724scipr.dispatcher.hana.ondemand.com/W3/Index.html?hc_orionpath=%2FDI_webide_di_workspacez78e48qhog5m41ls%2F_SerhatMercan_&neo-di-affinity=BIGipServerdisapwebide.hana.ondemand.com+%21%2BPww9mJ2k8K6ZDjBFsjSXGzGB7emvSP%2FRDvpOMGubM%2BzwgPdv27cqU4e2ze%2FKq%2B9dE7LYtTUu6TmE4M%3D&origional-url=Index.html&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off"
const sCurrentHostname = window.location.hostname; // "webidetesting8858993-dk724scipr.dispatcher.hana.ondemand.com"
const sCurrentPathname = window.location.pathname; // "/W3/Index.html"
const sCurrentProtocol = window.location.protocol; // "https:"
const sCurrentPort = window.location.port; // ""

window.location.assign("https://www.w3schools.com"); // Open Page in Current Page

// HISTORY
window.history.back(); // Go To The Previous Page
window.history.forward(); // Go To The Forward Page

// NAVIGATOR
const bCookieEnabled = navigator.cookieEnabled; // true
const sAppName = navigator.appName; // "Netscape"
const sAppCodeName = navigator.appCodeName; // Mozilla
const sProduct = navigator.product; // "Gecko"
const sAppVersion = navigator.appVersion; // "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
const sUserAgent = navigator.userAgent; // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
const sPlatform = navigator.platform; // "Win32"
const sLanguage = navigator.language; // "en-US"
const bOnline = navigator.onLine; // true
const bJavaEnabled = navigator.javaEnabled(); // false

// NAVIGATOR Metot - Clipboard => Copy Text
const oButton = document.querySelector("button");
const oTextParagraph = document.querySelector("p");

oButton?.addEventListener("click", async () => {
	const sText = oTextParagraph?.textContent;
	const oClipboard = navigator.clipboard;

	if (oClipboard) {
		try {
			const oResult = await oClipboard.writeText(sText);
			console.log(oResult);
		} catch (oError) {
			console.log(oError);
		}
	}
});

// POPUP ALERT
window.alert("XSMERCAN"); // Popup Alert
window.alert("Hello\nHow are you?"); // Popup Alert w/ New Line

// POPUP ALERT w/ Return
let xResult = window.confirm("Are you Serhat"); // Yes or No Question Alert

xResult = window.prompt("Please Enter Your Name:", "Serhat Mercan"); // Input Alert w/ Hint

console.log(xResult);

// VARIABLE
if (window.iCount !== 0) {
	this.byId("Table")?.getBinding("items")?.refresh(true);
} else {
	window.iCount++;
}

// TIMING
// Create a Timer
const oTime = setTimeout(() => {
	alert("Hello");
}, 5000); // 5000 msec => 5 seconds 
// Stop a Time
clearTimeout(oTime);

// Create & Stop Current Time
// HTML = <p id="demo"/>
const oIntervalTime = setInterval(() => {
	document?.getElementById("demo")?.innerHTML = new Date().toLocaleTimeString();
}, 1000);

clearInterval(oIntervalTime);