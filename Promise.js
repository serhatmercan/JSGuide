/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const oButton = document.querySelector("button");
const oOutput = document.querySelector("p");

const getPosition = oPosition => {
    const oPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            success => {
                resolve(success);
            },
            error => {
                reject(error);
            },
            oPosition
        );
    });

    return oPromise;
};

const setTimer = Duration => {
    const oPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, Duration);
    });

    return oPromise;
};

async function trackUserHandler() {
    let oPositionData;
    let oPosData;
    let oTimerData;

    try {
        oPosData = await getPosition();
        oTimerData = await setTimer(2000);
    } catch (oError) {
        console.log(oError);
    }

    console.log(oTimerData, oPosData);

    setTimer(1000).then(() => {
        console.log("Timer Done!");
    });

    console.log("Getting Position...");
}

oButton.addEventListener('click', trackUserHandler);

// Return Data
Promise.race([getPosition(), setTimer(1000)]).then(oData => {
    console.log(oData);
});

// Return Array
Promise.all([getPosition(), setTimer(1000)]).then(oData => {
    console.log(oData);
});

// Return Array Object
Promise.allSettled([getPosition(), setTimer(1000)]).then(oData => {
    console.log(oData);
});
