// Library Land
// Create a Symbol
const uid = Symbol();

const user = {
    [uid]: "p1",
    name: "Serhat",
    age: 26
};

// Change the Symbol Value
user[uid] = "p2";

console.log(user);

// Iterator
const people = {
    currentMercan: 0,
    mercans: ["Serhat", "Elif", "Selim"],
    next() {
        if (this.currentMercan >= this.mercans.length) {
            return { value: this.currentMercan, done: true };
        }

        const returnValue = {
            value: this.mercans[this.currentMercan],
            done: false
        };

        this.currentMercan++;

        return returnValue;
    }
};

let mercan = people.next();

while (!mercan.done) {
    console.log(mercan.value);
    mercan = people.next();
}