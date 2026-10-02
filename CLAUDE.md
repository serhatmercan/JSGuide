# CLAUDE.md — JSGuide

Coding rules: follow the existing examples; no separate rules file is planned.

## Purpose and scope
- Personal, example-driven JavaScript reference: short snippets, one topic
  per file. A reference, not a runnable project; add no `package.json`,
  build, linter config or test setup.
- Covers plain JavaScript (ES6+) and browser APIs. Third-party libraries
  and APIs (Axios, jQuery, Google Maps) are marked *(third-party)* in
  README.md. UI5-specific code belongs in UIGuide
  (https://github.com/serhatmercan/UIGuide); do not add new UI5 code here.
- Legacy patterns (`var`, `XMLHttpRequest`, prototype-style code) are kept
  for comparison: never modernize or delete them for style.
- Fix only deterministic defects (syntax errors, wrong results in comments,
  wrong API names); explain a non-obvious fix with a `// NOTE:` comment.

## Structure
- Flat layout: every topic file sits in the repository root; no subfolders.
- File names are `PascalCase.js` named after the topic (`ArrayObject.js`);
  acronyms stay upper case (`DOM.js`, `AJAX.js`); `jQuery.js` keeps the
  library's own spelling.
- A new file gets a line in its group under README "Topics Covered"
  (groups 1–9, learning order). Browser-only or library-dependent files
  are also listed under "Running Examples".
- A file is a flat list of independent examples, each introduced by a
  Title Case label comment: `// Set Time Out w/ Timer`. Collection files
  prefix the subject: `// Array: Find Index`. Keep `w/` and `w/out`.
  Upper-case group labels (`// WINDOW`, `// METHODS`) and the
  `// =====` banners in `Fundamentals.js` stay as they are.

## Code examples
- Keep each file's indentation; new files use 4 spaces (the most common
  style). Double quotes and semicolons.
- Hungarian-style prefixes: `s` string, `i` integer, `f` float, `b`
  boolean, `o` object, `a` array, `x` mixed or unknown; errors `oError`,
  events `oEvent`. Functions are camelCase verbs (`fetchPosts`,
  `getProduct`). Classes and own object keys are PascalCase (`ID`,
  `FirstName`); keys required by an external API keep its spelling.
- Show a result as a trailing comment `// => <value>`, aligned within a
  block of similar lines.
- A longer result (a JSON response) follows as a `/* */` block under
  `// => Response Text`. Required HTML is shown as a comment
  (`// <div id="map"></div>`) or a `/* */` block above the code using it.
- Use public demo endpoints (`jsonplaceholder.typicode.com`) and
  placeholders for keys (`const GOOGLE_API_KEY = "xxx";`); never a real
  key, internal URL or real service path.

## Links
- README.md links files relatively, plain file name as link text, then an
  em dash and what the file covers, API names in backticks:
  ``- [Map.js](Map.js) — `Map` collection``. In-page anchors use the
  heading text (`[Topics Covered](#topics-covered)`).
- Code comments name other files by file name (`./Module.js`).
- External links: sibling guides in github.com/serhatmercan and the
  documentation or CDN of a library the example loads.
