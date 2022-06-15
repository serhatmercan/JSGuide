// Library Land
// Create a Symbol
const UID = Symbol();

const oUser = {
    [UID]: "PI",
    Name: "Serhat",
    Age: 26
};

// Change the Symbol Value
oUser[UID] = "PII";

// Iterator
const oPeople = {
    CurrentMercan: 0,
    Mercans: ["Serhat", "Elif", "Selim"],
    Next() {
        if (this.CurrentMercan >= this.Mercans.length) {
            return { Value: this.CurrentMercan, Done: true };
        }

        const oValue = {
            Value: this.Mercans[this.CurrentMercan],
            Done: false
        };

        this.CurrentMercan++;

        return oValue;
    }
};

let oMercan = oPeople.Next();

while (!oMercan.Done) {
    console.log(oMercan.Value);
    oMercan = oPeople.Next();
}

// Show Symbol
console.log(oUser);