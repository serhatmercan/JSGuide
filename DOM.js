// Call Parent
var oItem = this.byId("Item").getDomRef(); // => this.document.getElementById("Item").

oItem.parentElement.style.width = "100%";

// Find HTML Elements
document.getElementById("Element");           // Find Element w/ ID	          => ID     = "Element"
document.getElementsByTagName("p")[0];        // Find Element w/ Tag          => Tag    =	<p>
document.getElementsByClassName("intro")[0];  // Find Element w/ Class	      => Class  =	intro
document.querySelectorAll("p.intro")[0];      // Find Element w/ Tag & Class	=> Tag		=	<p>		      Class =	intro
document.forms["Form"][0];                    // Find Element w/ Form			    => Form	  =	Form

// Changing HTML Style
/*
<div id="Div"> 
  <p id="Demo">Demo Paragraph</p>
</div>
*/

this.document.getElementById("Demo").style.dispaly = "none";            // Hide Element
this.document.getElementById("Demo").style.color = "blue";              // Change Element Text Color
this.document.getElementById("Demo").style.backgroundColor = "#1ec5e5"; // Change Element Text Background Color

// HTML Events: click - change - focus - mouseover - mouseout - mousedown - mouseup - mousemove
// Click - 1
document.getElementById("Demo").addEventListener("click", function () {
  alert("Hello World!");
});
// Click - 2
document.getElementById("Button").addEventListener("click", sayHello);

function sayHello() {
  alert("Hello World!");
}

// Nodes
const oParagraph = document.createElement("p");
const oNode = document.createTextNode("This Is a New Paragraph.");
const oChild = document.getElementById("Demo");
var oParent = document.getElementById("Div");

oParagraph.appendChild(oNode);            // Creating a New Nodes
oParent.appendChild(oParagraph);          // Add Node To Division Ending
oParent.insertBefore(oParagraph, oChild); // Add Node To Insert Before Child
oParent.replaceChild(oParagraph, oChild); // Replace Place Children
oParent.remove();                         // Remove Node From Page
oParent.removeChild(oChild);              // Remove Node From Parent

document.body.insertAdjacentElement("afterbegin", oParent); // Add Item to Body
document.body.removeChild(oParent);                         // Remove Item From Body 
this.oParent.remove();                                      // Remove Item From Body
this.oParent = null;                                        // Clear Item

// Collection
const aCollections = document.getElementsByTagName("p");

aCollections.forEach(oCollection => {
  oCollection.style.color = "red";
});

// Nodes List
const aNodes = document.querySelectorAll("p");

aNodes.forEach(oNode => {
  oNode.style.color = "red";
});

// Create Element in HTML
// <ul id="List"></ul>;

const aData = [];

// Create Elements
aData.forEach(oData => this.createElement(oData));

// Delete Element
this.deleteElement("X");

// eslint-disable-next-line no-unused-vars
const createElement = (oData) => {
  const oNewElement = document.createElement("li");

  oNewElement.className = "movie-element";
  oNewElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${oData.URL}" alt="${oData.title}">
    </div>
    <div class="movie-element__info">
      <h2>${data.title}</h2>
      <p>${data.rating}/5 stars</p>
    </div>
  `;

  oNewElement.addEventListener(
    "click",
    deleteElement.bind(null, oData.id)
  );

  document.getElementById("List").append(oNewElement);
};

// Delete Element in HTML
const deleteElement = (sID) => {
  const iDataIndex = aData.findIndex(oData => oData.sID === sID);

  aData.splice(sID, 1);
  document.getElementById("List").children[iDataIndex].remove();
};

// HTML DOM Audio Object
onRecord = (oEvent) => {
  const oContext = oEvent.getSource().getParent().getParent().getBindingContext().getObject();
  const oAudio = document.createElement("audio");
  const oSource = document.createElement("source");

  oSource.type = "audio/mpeg";
  oSource.src = oContext["CallRecUrl"];

  oAudio.appendChild(oSource);
  oAudio.controls = true;

  oEvent.getSource().getParent().addItem(new HTML().setDOMContent(oAudio));
};