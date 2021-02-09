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
        const coordinates = {
            lat: success.coords.latitude + Math.random() * 50,
            lng: success.coords.longitude + Math.random() * 50
        };
        const address = await getAddressFromCoords(coordinates);
        console.log(address);
    },
    error => {
        console.log(error);
    }
);

// Find Current Address
const address = event.target.querySelector("input").value;

if (!address || address.trim().length === 0) {
    alert("Invalid address entered - please try again!");
}

try {
    const coordinates = getCoordsFromAddress(address);
    console.log(coordinates);
} catch (err) {
    alert(err.message);
}

// Show Position
const map = new google.maps.Map(document.getElementById("map"), {
    center: coordinates,
    zoom: 15
});

new google.maps.Marker({
    position: coordinates,
    map: map
});

// Get Address From Coordinates
export async function getAddressFromCoords(coords) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);

    if (!response.ok) {
        throw new Error("Failed to fetch address. Please try again!");
    }

    const data = await response.json();

    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const address = data.results[0].formatted_address;

    return address;
}

// Get Coordinates From Address
export async function getCoordsFromAddress(address) {
    const urlAddress = encodeURI(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);

    if (!response.ok) {
        throw new Error("Failed to fetch coordinates. Please try again!");
    }

    const data = await response.json();

    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;
}