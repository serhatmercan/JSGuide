// Create JSON
var JSONData = "{\"family\":[" +
	"{\"firstName\":\"Serhat\",\"lastName\":\"Mercan\" }," + 
	"{\"firstName\":\"Elif\",\"lastName\":\"Mercan\" }," +
	"{\"firstName\":\"Selim\",\"lastName\":\"Mercan\" }]}";

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
		if (error.severity === "success") {
			console.log("");
		}
	}
}.bind(this);