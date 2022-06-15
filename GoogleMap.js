// HTML Tags
// <div id="map"></div>
// <input type="text" />

// Declare Google API Key
const GOOGLE_API_KEY = "xxx";

// Check Google API
if (!google) {
    // Error
}

// Get Current Address
navigator.geolocation.getCurrentPosition(
    async success => {
        const oCoordinate = {
            lat: success.coords.latitude + Math.random() * 50,
            lng: success.coords.longitude + Math.random() * 50
        };
        const oAddress = await getAddressFromCoords(oCoordinate);
    },
    error => {
        console.log(error);
    }
);

// Find Current Address
const sAddress = oEvent.target.querySelector("input").value;

if (!sAddress || sAddress.trim().length === 0) {
    alert("Invalid Address Entered - Please Try Again!");
}

try {
    const oCoordinate = getCoordsFromAddress(sAddress);
} catch (oError) {
    alert(oError.message);
}

// Show Position
const oMap = new google.maps.Map(document.getElementById("map"), {
    center: oCoordinate,
    zoom: 15
});

new google.maps.Marker({
    position: oCoordinate,
    map: map
});

// Get Address From Coordinates
export async function getAddressFromCoords(oCoordinate) {
    const oResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${oCoordinate.lat},${oCoordinate.lng}&key=${GOOGLE_API_KEY}`);

    if (!oResponse.ok) {
        throw new Error("Failed to Fetch Address. Please Try Again!");
    }

    const oData = await oResponse.json();

    if (oData.error_message) {
        throw new Error(oData.error_message);
    }

    return oData.results[0].formatted_address;
}

// Get Coordinates From Address
export async function getCoordsFromAddress(sAddress) {
    const sURLAddress = encodeURI(sAddress);
    const oResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sURLAddress}&key=${GOOGLE_API_KEY}`);

    if (!oResponse.ok) {
        throw new Error("Failed to fetch coordinates. Please try again!");
    }

    const oData = await oResponse.json();

    if (oData.error_message) {
        throw new Error(oData.error_message);
    }

    return oData.results[0].geometry.location;
}