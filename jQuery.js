/* eslint-disable no-unused-vars */
// jQuery
// Import HTML Page
/*
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	<div id="Div">
		<p id="Demo" class="Intro">Demo Paragraph</p>
	</div>
</body>
*/
// Finding HTML Element(s);
const oDemo = $("#Demo");				// by ID
const aParagraphs = $("p");				// by Tag Name
const oClass = $(".intro");				// by Class Name
const oClassParagraphs = $("p.intro");	// by CSS Selectors

// Text Content
oDemo.text();			// GET 		
oDemo.text("Serhat");	// SET 

// HTML Content
const oDiv = $("#Div");

oDiv.html();						// GET => <p class="Intro" id="Demo">Demo Paragraph</p>
oDiv.html("<p>Hello World!</p>");	// SET => <p>Hello World</p>

// CSS: HTML Elements
oDemo.hide();					// Hiding 
oDemo.show();					// Showing
oDemo.css("font-size","35px");	// Styling

// DOM
oDemo.remove();						// Removing Elements
oDemo.parent();						// Get Parent Element
oDemo.parent().prop("nodeName");	// Get Parent Element Name
