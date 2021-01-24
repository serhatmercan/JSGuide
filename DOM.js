// Call Parent
var item = this.byId("idItem").getDomRef(); // => this.document.getElementById("idItem").
item.parentElement.style.width = "100%";

// Find HTML Elements
document.getElementById("idElement"); // Find Element w/ ID	=>	ID  	=	"idElement"
document.getElementsByTagName("p")[0]; // Find Element w/ Tag			=> 	Tag		=	<p>
document.getElementsByClassName("intro")[0]; // Find Element w/ Class		=>	Class	=	intro
document.querySelectorAll("p.intro")[0]; // Find Element w/ Tag & Class	=> 	Tag		=	<p>		Class =	intro
document.forms["form1"][0]; // Find Element w/ Form			=>	Form	=	form1

// Changing HTML Style
/*
<div id="div1"> 
  <p id="demo">Demo Paragraph</p>
</div>
*/

this.document.getElementById("demo").style.dispaly = "none"; // Hide Element
this.document.getElementById("demo").style.color = "blue"; // Change Element Text Color
this.document.getElementById("demo").style.backgroundColor = "#1ec5e5"; // Change Element Text Background Color

// HTML Events: click - change - focus - mouseover - mouseout - mousedown - mouseup - mousemove
// Click - 1
document.getElementById("demo").addEventListener("click", function () {
  alert("Hello World!");
});
// Click - 2
document.getElementById("myBtn").addEventListener("click", sayHello);

function sayHello() {
  alert("Hello World!");
}

// Nodes
let paragraph = document.createElement("p");
let node = document.createTextNode("This is a new paragraph.");
let parent = document.getElementById("div1");
let child = document.getElementById("demo");

paragraph.appendChild(node); // Creating a New Nodes
parent.appendChild(paragraph); // Add Node To Division Ending
parent.insertBefore(paragraph, child); // Add Node To Insert Before Child
parent.replaceChild(paragraph, child); // Replace Place Children
parent.remove(); // Remove Node From Page
parent.removeChild(child); // Remove Node From Parent

// Collection
var collection = document.getElementsByTagName("p");
for (var i = 0; i < collection.length; i++) {
  collection[i].style.color = "red";
}

// Nodes List
var nodeList = document.querySelectorAll("p");
for (var i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "red";
}

// Create Element in HTML
<ul id="list"></ul>;

const data = [];

const createElement = (data) => {
  const newElement = document.createElement("li");

  newElement.className = "movie-element";
  newElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${data.URL}" alt="${data.title}">
    </div>
    <div class="movie-element__info">
      <h2>${data.title}</h2>
      <p>${data.rating}/5 stars</p>
    </div>
  `;

  newElement.addEventListener(
    "click",
    deleteElement.bind(null, data.id)
  );

  document.getElementById("list").append(newElement);
};

// Delete Element in HTML
const deleteElement = (id) => {
  const dataIndex = data.findIndex((item) => item.id === id);
  data.splice(id, 1);
  document.getElementById("list").children[dataIndex].remove();
};

