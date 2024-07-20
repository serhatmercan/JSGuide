// HTML Elements
const oListElement = document.querySelector(".posts");
const oPostTemplate = document.getElementById("single-post");
const oForm = document.querySelector("#new-post form");
const oFetchButton = document.querySelector("#available-posts button");
const oPostList = document.querySelector("ul");

const sendHttpRequest = async (sMethod, sURL, oData) => {
    try {
        const oResponse = await fetch(sURL, {
            method: sMethod,
            body: oData ? JSON.stringify(oData) : null,
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!oResponse?.ok) {
            const oErrorData = await oResponse.json();
            console.error(oErrorData);
            throw new Error("Something went wrong - server side.");
        }

        return await oResponse.json();
    } catch (oError) {
        console.error(oError);
        throw new Error("Something went wrong!");
    }
};

// Get Data
const fetchPosts = async () => {
    try {
        const aPosts = await sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts");

        aPosts.forEach(oPost => {
            const oPostEl = document.importNode(oPostTemplate.content, true);

            oPostEl?.querySelector("h2")?.textContent = oPost?.title?.toUpperCase();
            oPostEl?.querySelector("p")?.textContent = oPost?.body;
            oPostEl?.querySelector("li")?.id = oPost?.id;

            if (!oListElement || !oPostEl) return;

            oListElement?.append(oPostEl);
        });
    } catch (oError) {
        alert(oError.message);
    }
};

// Send Data
const createPost = async (sTitle, sContent) => {
    const sUserID = Math.random();
    const oPost = { title: sTitle, body: sContent, userId: sUserID };

    if (!sUserID || !oPost) return;

    await sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", oPost);
};

// Event Listeners
oFetchButton.addEventListener("click", fetchPosts);

oForm.addEventListener("submit", oEvent => {
    oEvent?.preventDefault();

    const sTitle = oEvent?.currentTarget?.querySelector("#title")?.value;
    const sContent = oEvent?.currentTarget?.querySelector("#content")?.value;

    if (!sTitle || !sContent) return;

    createPost(sTitle, sContent);
});

// Delete Data
oPostList.addEventListener("click", oEvent => {
    if (oEvent?.target?.tagName === "BUTTON") {
        const sPostID = oEvent?.target?.closest("li")?.id;

        if (!sPostID) return;

        sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${sPostID}`);
    }
});