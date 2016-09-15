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

module.exports = function(config = {}) {

    return {

        register(source, app) {
            return new VashAdapter(require('vash'), source, config);
        }
    }
};

