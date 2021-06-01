/* eslint-disable no-unused-vars */
// jQuery
// Import HTML Page
/*
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
	<div id="01">
		<p id="demo" class="intro">Demo Paragraph</p>
	</div>
</body>
*/
// Finding HTML Element(s);
var demo = $("#demo");					// by ID
var	paragraphs = $("p");				// by Tag Name
var	oClass = $(".intro");				// by Class Name

var	oClassParagraphs = $("p.intro");	// by CSS Selectors

// Text Content
demo.text();			// GET 		
demo.text("Serhat");	// SET 

// HTML Content
var oDiv = $("#01");
oDiv.html();						// GET => <p class="intro" id="demo">Demo Paragraph</p>
oDiv.html("<p>Hello World!</p>");	// SET => <p>Hello World</p>

// CSS: HTML Elements
demo.hide();					// Hiding 
demo.show();					// Showing
demo.css("font-size","35px");	// Styling

// DOM
demo.remove();						// Removing Elements
demo.parent();						// Get Parent Element
demo.parent().prop("nodeName");	// Get Parent Element Name
