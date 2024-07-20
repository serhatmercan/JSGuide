// HTML Tags
// <div id="map"></div>
// <input type="text" />

// Declare Google API Key
const GOOGLE_API_KEY = "xxx";

// Check Google API
if (typeof google === 'undefined') {
    throw new Error("Google API is not loaded");
}

// Get Current Address
navigator?.geolocation?.getCurrentPosition(
    async ({ xCoordinate }) => {
        const oCoordinate = {
            lat: xCoordinate?.latitude + Math.random() * 50,
            lng: xCoordinate?.longitude + Math.random() * 50
        };

        try {
            const oAddress = await getAddressFromCoords(oCoordinate);
        } catch (oError) {
            console.error("Failed to get address:", oError);
        }
    },
    error => {
        console.error("Geolocation error:", error);
    }
);

// Find Current Address
const oHandleAddressInput = async (oEvent) => {
    const sAddress = oEvent?.target?.querySelector("input")?.value?.trim();

    if (!sAddress) {
        return alert("Invalid Address Entered - Please try again!");
    }

    try {
        const oCoordinate = await getCoordsFromAddress(sAddress);

        displayMap(oCoordinate);
    } catch (oError) {
        alert(oError.message);
    }
};

// Show Position on Map
const oMap = (oCoordinate) => {
    const oMap = new google.maps.Map(document.getElementById("map"), {
        center: oCoordinate,
        zoom: 15
    });

    new google.maps.Marker({
        position: oCoordinate,
        map: oMap
    });
};

// Get Address from Coordinates
const getAddressFromCoords = async (oCoordinate) => {
    try {
        const oResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${oCoordinate.lat},${oCoordinate.lng}&key=${GOOGLE_API_KEY}`);

        if (!oResponse?.ok) throw new Error("Failed to fetch address. Please try again!");

        const aData = await oResponse?.json();

        if (aData?.error_message) throw new Error(aData?.error_message);

        return aData?.results[0]?.formatted_address;
    } catch (oError) {
        console.error("Error fetching address:", oError);
        throw oError;
    }
};

// Get Coordinates From Address
const getCoordsFromAddress = async (sAddress) => {
    try {
        const sEncodedAddress = encodeURIComponent(sAddress);
        const oResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sEncodedAddress}&key=${GOOGLE_API_KEY}`);

        if (!oResponse?.ok) throw new Error("Failed to fetch coordinates. Please try again!");

        const aData = await oResponse.json();

        if (aData?.error_message) throw new Error(aData?.error_message);

        return aData?.results[0]?.geometry?.location;
    } catch (oError) {
        console.error("Error fetching coordinates:", oError);
        throw oError;
    }
};

// Add event listener for address input (assuming you have a form or input with id "address-form")
document.getElementById("address-form").addEventListener("submit", oEvent => {
    oEvent.preventDefault();
    oHandleAddressInput(oEvent);
});