var utils = require("../../utils");
var Handlebars = require("/Users/shakyshane/code/handlebars.js");

/**
 * @param sections
 * @param cbUtils
 * @returns {Function}
 */
module.exports = function (sections, cbUtils) {

    return function () {

        var args    = Array.prototype.slice.call(arguments);
        var options = args[args.length-1];

        var params = utils.processParams(options.hash || {}, options.data.root);

        if (!utils.verifyParams(params, ["name"])) {
            cbUtils.emitter.emit("log", {
                type: "warn",
                msg: "You must provide a `name` parameter to the section helper",
                _crossbow: options._crossbow
            });
            return;
        }
        cbUtils.logger.debug("Yielding section with name: {magenta:%s}", params["name"]);
        return new Handlebars.SafeString(sections[params["name"]] || "");
    }
};