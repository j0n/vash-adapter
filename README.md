# Vash adapter

Use Vash templates with [Fractal](http://frctl.github.io).

## Usage

Install via NPM:

```bash
npm i https://github.com/j0n/vash-adapter --save
```

Then add configuration details into your fractal.js file:

```js
const fractal = require('@frctl/fractal');

fractal.engine('vash', 'vash-adapter'); // register the vash engine adapter

fractal.set('components.engine', 'vash'); // use the vash handler
fractal.set('components.ext', '.vash'); // look for files with a .vash file extension
```
