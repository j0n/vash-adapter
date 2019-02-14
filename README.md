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

### Vash helpers

You can optionally define [Vash helpers](https://github.com/kirbysayshi/vash#helper-system), which are functions that become available in any template. These are defined by passing a second object when getting the vash-adapter. Example:

```js
let vash_adapter = require('vash-adapter')({
    // First the main configuration object, like above.
    // ...
}, {
    // Then, any helpers.
    echo: () => {
        console.log('echo helper called. It was not so helpful.');
    }
});
```

You can then go ahead and use your helpers just like those built in to Vash.

```html
<p>A normal template with normal content</p>

@Html.echo()
```

_Keep in mind that the `helpersName` configuration option defines how we access all helpers (named `Html` in this case). Additionally, vash-adapter will not overwrite built-in helpers, so you cannot use names taken by Vash (e.g. `raw`)._
