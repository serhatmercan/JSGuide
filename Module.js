// Import JS Module to HTML
<script src="./Module.js" defer type="module"></script>

// Import JS Module to JS Files
import { Module } from './Module.js';
import { Module as Mod } from './Module.js';
import * as Mod from './Module.js';
import Item, { doSomething } from './Module.js';

// Export JS Function
export function doSomething() { };

// Export JS Class
export default class { }

// Import JS Function
import('./Module.js').then(module => {
    const mod = new module.Module(
        () => {
            this.x = false;
        }
    );
});

// Create a Global Value
globalThis.DEFAULT_VALUE = 'SMERCAN';

// Reach a Global Value
console.log(DEFAULT_VALUE);