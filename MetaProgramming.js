// Library Land
// Create a Symbol
const UID = Symbol('uid');

const oUser = {
    [UID]: 'PI',
    Name: 'Serhat',
    Age: 26
};

// Change the Symbol Value
oUser[UID] = 'PII';

// Iterator
const oPeople = {
    CurrentMercan: 0,
    Mercans: ['Serhat', 'Elif', 'Selim'],
    next() {
        if (this.CurrentMercan >= this.Mercans.length) {
            return { value: undefined, done: true };
        }

        const oValue = {
            value: this.Mercans[this.CurrentMercan],
            done: false
        };

        this.CurrentMercan++;

        return oValue;
    },
    [Symbol.iterator]() {
        return {
            next: this.next.bind(this)
        };
    }
};

for (const oMercan of oPeople) {
    console.log(oMercan);
}

// Show Symbol
console.log(oUser);