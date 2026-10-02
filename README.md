# JavaScript Guide

Personal Notes, Practical Examples & JavaScript Reference

## Overview

This repository contains my personal JavaScript notes and practical, example-driven code snippets collected while learning and working with JavaScript. Each file focuses on a single topic and contains short, runnable examples rather than long theoretical explanations.

## Purpose

- Reinforce JavaScript fundamentals through practice.
- Provide reusable, copy-paste-ready examples.
- Serve as a quick personal reference during development.
- Track my own learning journey with JavaScript.

## Target Audience

- JavaScript beginners looking for practical examples.
- Frontend developers who want a quick reference.
- Developers refreshing JavaScript fundamentals.

## Repository Structure

Files are kept **flat** (no subfolders) since the repository is small enough that a single topic-per-file layout is faster to browse and link to than nested folders. The list below groups the files by topic in a recommended learning order — see [Topics Covered](#topics-covered).

## Topics Covered

The repository is organized by topic. Files are kept flat (no folders) for quick access, but they follow the logical learning order below.

### 1. Basics
- [Definition.js](Definition.js) — `const` / `let`, nullish coalescing, logical operators
- [Condition.js](Condition.js) — ternary, `isNaN`, logical operators, double NOT
- [SwitchCase.js](SwitchCase.js) — `switch` statement
- [Loop.js](Loop.js) — `for`, `for...in`, `for...of`, `while`, `do...while`, `forEach`
- [TryCatch.js](TryCatch.js) — error handling with `try` / `catch` / `finally`
- [Fundamentals.js](Fundamentals.js) — scope, hoisting, closures, `this`, prototype chain, equality, shallow vs deep copy, event loop, `WeakMap` / `WeakSet`

### 2. Functions
- [Function.js](Function.js) — parameters, default/rest parameters, recursion, `call` / `apply` / `bind`, IIFE
- [Arrow.js](Arrow.js) — arrow function syntax and usage

### 3. Data Structures
- [Array.js](Array.js) — push/pop/shift/unshift/splice/slice, search, iteration, sorting, spread
- [ArrayObject.js](ArrayObject.js) — working with arrays of objects: grouping, deduplication, mapping
- [Object.js](Object.js) — object creation, destructuring, spread, `Object` static methods
- [Map.js](Map.js) — `Map` collection
- [Set.js](Set.js) — `Set` collection, removing duplicates

### 4. Strings, Numbers & Dates
- [String.js](String.js) — string methods (search, replace, split, case conversion, etc.)
- [Math.js](Math.js) — `Math` methods, rounding, random numbers
- [Date.js](Date.js) — `Date` object, formatting, comparisons
- [Time.js](Time.js) — `setTimeout` / `clearTimeout`
- [RegExp.js](RegExp.js) — regular expressions, common patterns

### 5. OOP
- [Class.js](Class.js) — `class`, constructors, getters/setters, static methods, inheritance
- [OOP.js](OOP.js) — a small practical OOP example (product list)

### 6. Async JavaScript
- [Promise.js](Promise.js) — `Promise`, `async` / `await`, `Promise.all` / `allSettled` / `race`
- [AJAX.js](AJAX.js) — `XMLHttpRequest` (legacy) and `fetch`
- [Http.js](Http.js) — HTTP requests with native `fetch`
- [Axios.js](Axios.js) — HTTP requests with the Axios library *(third-party)*

### 7. Browser APIs
> These examples rely on browser-only globals such as `document`, `window`, and `navigator`. They are not meant to run directly in Node.js.
- [DOM.js](DOM.js) — selecting, creating, and manipulating DOM elements
- [BOM.js](BOM.js) — `window`, `location`, `history`, `navigator`
- [Event.js](Event.js) — event listeners
- [Storage.js](Storage.js) — `localStorage`, `sessionStorage`, cookies, IndexedDB
- [GoogleMap.js](GoogleMap.js) — Google Maps JavaScript API example *(third-party API)*

### 8. Modules & Advanced JavaScript
- [Module.js](Module.js) — ES module `import` / `export`, dynamic `import()`
- [MetaProgramming.js](MetaProgramming.js) — `Symbol`, iterators, the iterable protocol

### 9. Third-Party Libraries
> Not part of native JavaScript — included for reference since they are commonly used together with it.
- [jQuery.js](jQuery.js) — jQuery selectors, DOM manipulation

## Learning Path

1. Basics (variables, conditions, loops, error handling, core JS concepts)
2. Functions
3. Data Structures (arrays, objects, Map, Set)
4. Strings, Numbers & Dates
5. OOP
6. Async JavaScript
7. Browser APIs
8. Modules & Advanced JavaScript
9. Third-Party Libraries

## How to Use

Open any topic file, read the short comments above each example, and try running or modifying the snippets locally to experiment.

## Running Examples

- Files under **Basics**, **Functions**, **Data Structures**, **Strings/Numbers/Dates**, **OOP**, **Modules & Advanced JavaScript** are plain JavaScript and can be run directly with Node.js or in a browser console.
- Files under **Browser APIs** (`DOM.js`, `BOM.js`, `Event.js`, `Storage.js`, `GoogleMap.js`) depend on browser globals (`document`, `window`, `navigator`) and are meant to run inside an HTML page, not Node.js.
- `Axios.js` and `jQuery.js` require their respective libraries to be loaded (via `npm` or a `<script>` CDN tag).
- `Http.js` / `AJAX.js` fetch examples call public demo APIs (e.g. `jsonplaceholder.typicode.com`) and require an internet connection.

## JavaScript Version

The repository primarily uses modern JavaScript (ES6+): `const` / `let`, arrow functions, template literals, destructuring, spread/rest, optional chaining, nullish coalescing, and `async` / `await`. Some legacy patterns (`var`, `XMLHttpRequest`, prototype-style code) are intentionally kept for comparison and are noted as such in the code.

## Disclaimer

These examples are educational/reference material. Some snippets assume a specific runtime context (browser, Node.js, or a UI5/SAP application) and may need small adaptations depending on where you run them.

## Contributing

This is primarily a personal learning repository, but suggestions and corrections are welcome via issues or pull requests.

## Related Guides

| Guide | Focus |
|---|---|
| [ABAPGuide](https://github.com/serhatmercan/ABAPGuide) | ABAP language and techniques, classic to modern |
| [CDSGuide](https://github.com/serhatmercan/CDSGuide) | ABAP CDS, structured route through both generations |
| [CDS-Cookbook](https://github.com/serhatmercan/CDS-Cookbook) | CDS and AMDP pattern library |
| [GWGuide](https://github.com/serhatmercan/GWGuide) | SAP Gateway: SEGW and OData V2 |
| [UIGuide](https://github.com/serhatmercan/UIGuide) | SAPUI5 and Fiori control and pattern reference |
| **JSGuide** (this repository) | Plain JavaScript and browser APIs |
| [PYGuide](https://github.com/serhatmercan/PYGuide) | Python reference with verified outputs |

## Author

**Serhat Mercan** — SAP BTP & AI Technical Lead | Generative AI for SAP | ABAP & SAP Fiori/UI5

- LinkedIn: [serhat-mercan](https://www.linkedin.com/in/serhat-mercan/)
- E-mail: serhatmercan94@gmail.com
- GitHub: [serhatmercan](https://github.com/serhatmercan)

## License

See [LICENSE](LICENSE).
