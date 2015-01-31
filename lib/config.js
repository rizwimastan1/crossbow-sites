var Immutable = require("immutable");

var defaults = Immutable.fromJS({
    /**
     * Should posts be rendered using Markdown?
     */
    markdown: true,
    /**
     * Should code snippets be auto-highlighted?
     */
    highlight: true,
    /**
     * Should ALL code fences be auto-highlighted?
     */
    autoHighlight: false,
    /**
     * Data format for posts
     */
    dateFormat: "LL", // http://momentjs.com/docs/#/utilities/
    /**
     * Post url format, eg: /blog/:year/:month/:title
     */
    postUrlFormat: false,
    /**
     * Instead of `blog/post1.html,` you can have `blog/post1` instead
     */
    prettyUrls: true,
    /**
     * Padd content blocks to enable nicer source code
     */
    prettyMarkup: true,
    /**
     * No layouts by default.
     */
    defaultLayout: false,
    /**
     * Initial Site config
     */
    siteConfig: {},
    /**
     * Set lookup DIRS for layouts & includes
     */
    dirs: {
        layouts:  "_layouts",
        includes: "_includes"
    }
});

module.exports.merge = function (config) {
    return defaults.mergeDeep(config);
};