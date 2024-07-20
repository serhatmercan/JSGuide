const oButton = document.querySelector("button");
const oOutput = document.querySelector("p");

const getPosition = aOptions => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, aOptions);
    });
};

const setTimer = Duration => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done!");
        }, Duration);
    });
};

async function trackUserHandler() {
    try {
        const oPosData = await getPosition();
        const oTimerData = await setTimer(2000);
    } catch (oError) {
        console.log(oError);
    }

    setTimer(1000).then(() => { console.log("Timer Done!") });

    console.log("Getting Position...");
}

oButton.addEventListener('click', trackUserHandler);

// Return Data
Promise.race([getPosition(), setTimer(1000)]).then(oData => { console.log(oData) });

// Return Array
Promise.all([getPosition(), setTimer(1000)]).then(oData => { console.log(oData) });

// Return Array Object
Promise.allSettled([getPosition(), setTimer(1000)]).then(oData => { console.log(oData) });