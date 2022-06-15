// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// HTML Elements
const oListElement = document.querySelector(".posts");
const oPostTemplate = document.getElementById("single-post");
const oForm = document.querySelector("#new-post oForm");
const oFetchButton = document.querySelector("#available-posts button");
const oPostList = document.querySelector("ul");

// Get Data
async function fetchPosts() {
    try {
        const oResponse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const aListOfPosts = oResponse.data;
        for (const oPost of aListOfPosts) {
            const oPostEl = document.importNode(oPostTemplate.content, true);
            oPostEl.querySelector("h2").textContent = oPost.title.toUpperCase();
            oPostEl.querySelector("p").textContent = oPost.body;
            oPostEl.querySelector("li").id = oPost.id;
            oListElement.append(oPostEl);
        }
    } catch (oError) {
        alert(oError.message);
        console.log(oError.response);
    }
}

// Send Data
async function createPost(sTitle, sContent) {
    const iUserID = Math.random();
    const oPost = {
        title: sTitle,
        body: sContent,
        userId: iUserID
    };

    const oResponse = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        oPost
    );
    console.log(oResponse);
}

oFetchButton.addEventListener("click", fetchPosts);

oForm.addEventListener("submit", oEvent => {
    oEvent.preventDefault();

    const sEnteredTitle = oEvent.currentTarget.querySelector("#title").value;
    const sEnteredContent = oEvent.currentTarget.querySelector("#content").value;

    createPost(sEnteredTitle, sEnteredContent);
});

// Delete Data
oPostList.addEventListener("click", oEvent => {
    if (oEvent.target.tagName === "BUTTON") {
        const postId = oEvent.target.closest("li").id;
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});