// Create JSON
var JSONData = '{"family":['
'{"firstName":"Serhat","lastName":"Mercan" },'
'{"firstName":"Elif","lastName":"Mercan" },'
'{"firstName":"Selim","lastName":"Mercan" }]}';

// Creata a JSON Model
this.getView().setModel(new JSONModel({
	ID: "",
	Name: ""
}), "modelJSON");

var families = JSON.parse(JSONData).family;

for (var i in families) {
	console.log(families[i]); // {firstName: "Serhat", lastName: "Mercan"}, ...
}

// Convert Message
var error;

aParams.error = function (oError) {
	if (oError.responseText) {
		error = JSON.parse(oError.responseText).error.innererror.errordetails[0];
		MessageToast.show(error.message);
		if (error.severity === "success") { }
	}
}.bind(this);

// Attributes
var person = {
	name: "Serhat",
	age: 26,
	city: "İstanbul"
};

var JSONData = JSON.stringify(person); // Send Data	=> "{"name":"Serhat","age":26,"city":"İstanbul"}"
JSON.parse(JSONData); // Display Data As Object

// Local Storage
localStorage.setItem("lsJSON", JSONData); // Store Data 
localStorage.getItem("lsJSON"); // Retrieve Data
localStorage.removeItem("lsJSON");