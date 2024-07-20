// Import JS Module to HTML
// <script src="./Module.js" defer type="module"></script>

// Import JS Module to JS Files
import { Module } from "./Module.js";
import { Module as Mod } from "./Module.js";
import * as Modl from "./Module.js";
import Item, { doSomething } from "./Module.js";

// Export JS Function
export function doSomethingX() { }

// Export JS Class
export default class { }

// Import JS Function using dynamic import
import("./Module.js").then(oModule => {
    const oMod = new oModule.Module(() => { this.x = false; });
});

// Create a Global Value
globalThis.DEFAULT_VALUE = "SMERCAN";

// Reach a Global Value
globalThis.DEFAULT_VALUE; // => Return Global Value