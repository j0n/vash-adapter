'use strict';

const Adapter  = require('@frctl/fractal').Adapter;

class VashAdapter extends Adapter {

    constructor(engine, source, config = {}) {
        super(engine, source);
        this.engine.config = config;
    }

    render(path, str, context, meta) {
        const template = this.engine.compile(str);
        context.cache = true;
        context._target = meta.target;
        return Promise.resolve(template(context));
    }
}

/**
 * @param  {object={}} config  main Vash configuration object
 * @param  {object={}} helpers map of helper functions to register
 * @return {function} Fractal template engine register function
 */
module.exports = function(config = {}, helpers = {}) {
    return {
        register(source, app) {
            const vash = require('vash');
            // Add helper functions to vash engine
            Object.keys(helpers).forEach((helperName) => {
                // Don't overwrite existing helpers
                if (typeof vash.helpers[helperName] === 'undefined') {
                    vash.helpers[helperName] = helpers[helperName];
                } else {
                    throw new Error(`vash helper ${helperName} already exists`)
                }
            });
            return new VashAdapter(vash, source, config);
        }
    }
};
