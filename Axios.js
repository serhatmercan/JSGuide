// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// HTML Elements
const oListElement = document.querySelector(".posts");
const oPostTemplate = document.getElementById("single-post");
const oForm = document.querySelector("#new-post form");
const oFetchButton = document.querySelector("#available-posts button");
const oPostList = document.querySelector("ul");

// Get Data
async function fetchPosts() {
    try {
        const { data: aListOfPosts } = await axios.get("https://jsonplaceholder.typicode.com/posts");

        aListOfPosts?.forEach(oPost => {
            const oPostEl = document.importNode(oPostTemplate?.content, true);

            oPostEl?.querySelector("h2")?.textContent = oPost?.title?.toUpperCase();
            oPostEl?.querySelector("p")?.textContent = oPost?.body;
            oPostEl?.querySelector("li")?.id = oPost?.id;

            oListElement?.append(oPostEl);
        });
    } catch (oError) {
        alert(oError?.message);
        console.log(oError?.response);
    }
}

// Send Data
async function createPost(sTitle, sContent) {
    const oPost = {
        title: sTitle,
        body: sContent,
        userId: Math.random()
    };

    try {
        const oResponse = await axios.post("https://jsonplaceholder.typicode.com/posts", oPost);
        console.log(oResponse);
    } catch (oError) {
        alert(oError.message);
        console.log(oError.response);
    }
}

oFetchButton.addEventListener("click", fetchPosts);

oForm.addEventListener("submit", oEvent => {
    oEvent.preventDefault();

    const sEnteredTitle = oEvent.currentTarget?.querySelector("#title")?.value;
    const sEnteredContent = oEvent.currentTarget?.querySelector("#content")?.value;

    createPost(sEnteredTitle, sEnteredContent);
});

// Delete Data
oPostList.addEventListener("click", async oEvent => {
    if (oEvent?.target?.tagName === "BUTTON") {
        const sPostID = oEvent?.target?.closest("li")?.id;

        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${sPostID}`);
        } catch (oError) {
            alert(oError.message);
            console.log(oError.response);
        }
    }
});