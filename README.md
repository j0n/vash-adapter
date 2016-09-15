# Vash adapter

Use Vash templates with [Fractal](http://frctl.github.io).

This version of the adapter has been developed and tested with Fractal v1.0.8.

## Usage

Install via NPM:

```bash
npm i vash-adapter --save
```

Then add configuration details into your fractal.js file:

```js
let path = require('path');
const view_ext = 'cshtml'; // or maybe 'vash' for your project?

/*
 * Set up Vash as the fractal engine through the vash-adapter.
 */
const fractal = module.exports = require('@frctl/fractal').create();
let vash_adapter = require('vash-adapter')({
    modelName: 'Model',
    helpersName: 'Html',
    settings: {
    	views: path.join(__dirname, 'components'),
    	'view engine': view_ext
    }
});

fractal.components.engine(vash_adapter);

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.'+view_ext);
```
