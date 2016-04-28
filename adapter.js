'use strict';

const vash = require('vash');

module.exports = function (source, config) {
    let viewsLoaded = false;
    function loadViews (source) {
        vash.helpers.tplcache = {}
        for (let item of source.flattenDeep()) {
            if (item.isDefault) {
                vash.install(item.path.replace('--default', ''), item.content)
            }
            vash.install(item.path, item.content)
            if (item.alias) {
                vash.install(item.alias, item.content)
            }
        }
    }
    source.on('loaded', loadViews);
    source.on('changed', loadViews);
    return {
        engine: vash,
        render: function (path, str, context, meta) {
            if (!viewsLoaded) loadViews(source);
            const template = vash.compile(str);
            context.cache = true;
            return Promise.resolve(template(context));
        }
    }
};
