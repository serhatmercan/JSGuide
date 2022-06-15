// Class
class Car {
	constructor(sCarName) {
		this.CarName = sCarName;
	}
	present() {
		return "I have a " + this.CarName;
	}
	static getDescription(sName) {
		return sName + "'s Car Class";
	}
	get getCarName() {
		return this.CarName;
	}
	set setCarName(sName) {
		this.CarName = sName;	// Property
	}
}

class Model extends Car {
	constructor(sCarName, sCarModel) {
		super(sCarName);
		this.Carmodel = sCarModel;
	}
	show() {
		return this.present() + ", it is a " + this.Carmodel;
	}
}

const oCar = new Car("Opel");
const oCarModel = new Model("Ford", "Mustang");

oCar.getCarName; // Opel
oCar.present(); // I have a Opel

oCar.CarName = "Ford";
oCar.CarName; // "Ford" 

oCarModel.show(); // "I have a Ford, it is a Mustang"

// InstanceOf Operator
oCar instanceof Car; // => True / False