// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// HTML Elements
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// Get Data
async function fetchPosts() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const listOfPosts = response.data;
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector("h2").textContent = post.title.toUpperCase();
            postEl.querySelector("p").textContent = post.body;
            postEl.querySelector("li").id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        alert(error.message);
        console.log(error.response);
    }
}

// Send Data
async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post
    );
    console.log(response);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector("#title").value;
    const enteredContent = event.currentTarget.querySelector("#content").value;

    createPost(enteredTitle, enteredContent);
});

// Delete Data
postList.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const postId = event.target.closest("li").id;
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});