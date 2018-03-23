# console-line

Easily draw lines in your console logs.

## Why?

Because I got sick of typing out `console.log('---------...--')` when I wanted
to have a visual indicator in my logs while debugging and stuff.

## Installation

```shell
npm install console-line
```

```shell
yarn add console-line
```

## Usage

```javascript
// Require and [optionally] configure your line
const line = require('console-line')(80, '-');

// Log a line to the console
line.log();

// Fence some text between lines
line.fence('Some fenced in text');

// Get the raw string for the line so you can do non-logging things with it
const lineString = line.line;

// Add it to console object so the name of this package makes sense
console.line = line.log;
```

## License

MIT
