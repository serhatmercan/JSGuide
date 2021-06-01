// CLASS
class Car {
	constructor(carName) {
		this._carName = carName;
	}
	present() {
		return "I have a " + this._carName;
	}
	static getDescription(name) {
		return name + "'s Car Class";
	}
	get carName() {
		return this._carname;
	}
	set carName(x) {
		this._carname = x;	// Property
	}
}

class Model extends Car {
	constructor(carName, carModel) {
		super(carName);
		this._carmodel = carModel;
	}
	show() {
		return this.present() + ", it is a " + this._carmodel;
	}
}

let car = new Car("Opel");

car.getDescription("Serhat"); // Serhat's Car Class

car.carname; // Opel
car.present(); // I have a Opel

car.carName = "Ford";
car.carName; // "Ford" 

let carModel = new Model("Ford", "Mustang");

carModel.show(); // "I have a Ford, it is a Mustang"

// InstanceOf Operator
car instanceof Car; // => True / False