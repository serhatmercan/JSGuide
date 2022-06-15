// HTML Elements
const oListElement = document.querySelector(".posts");
const oPostTemplate = document.getElementById("single-post");
const oForm = document.querySelector("#new-post form");
const oFetchButton = document.querySelector("#available-posts button");
const oPostList = document.querySelector("ul");

function sendHttpRequest(sMethod, sURL, oData) {
    return fetch(sURL, {
        method: sMethod,
        body: JSON.stringify(oData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(oResponse => {
            if (oResponse.status >= 200 && oResponse.status < 300) {
                return oResponse.json();
            } else {
                return oResponse.json().then(oError => {
                    console.log(oError);
                    throw new Error("Something Went Wrong - Server - Side.");
                });
            }
        })
        .catch(oError => {
            console.log(oError);
            throw new Error("Something Went Wrong!");
        });
}

// Get Data
async function fetchPosts() {
    try {
        const aResponses = await sendHttpRequest(
            "GET",
            "https://jsonplaceholder.typicode.com/posts"
        );        
        for (const oResponse of aResponses) {
            const oPostEl = document.importNode(oResponse.content, true);

            oPostEl.querySelector("h2").textContent = oResponse.Title.toUpperCase();
            oPostEl.querySelector("p").textContent = oResponse.Body;
            oPostEl.querySelector("li").id = oResponse.ID;

            oListElement.append(oPostEl);
        }
    } catch (oError) {
        alert(oError.message);
    }
}

// Send Data
async function createPost(sTitle, sContent) {
    const sUserID = Math.random();
    const oPost = {
        Title: sTitle,
        Body: sContent,
        UserID: sUserID
    };

    // Using Form Data w/out Body: JSON Format & No Header    
    // const oFormData = new FormData(Form);
    // oFormData.append('Title', sTitle);
    // oFormData.append('Body', sContent);
    // oFormData.append('UserID', sUserID);

    sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", oPost);
}

fetchButton.addEventListener("click", fetchPosts);

form.addEventListener("submit", oEvent => {
    oEvent.preventDefault();

    const sTitle = oEvent.currentTarget.querySelector("#title").value;
    const sContent = oEvent.currentTarget.querySelector("#content").value;

    createPost(sTitle, sContent);
});

// Delete Data
postList.addEventListener("click", oEvent => {
    if (oEvent.target.tagName === "BUTTON") {
        const sPostID = oEvent.target.closest("li").id;
        sendHttpRequest(
            "DELETE",
            `https://jsonplaceholder.typicode.com/posts/${sPostID}`
        );
    }
});
