"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// End of Danger DSL definition
/** Creates a Danger context, this provides all of the global functions
 *  which are available to the Danger eval runtime.
 *
 * @param {DangerDSLType} dsl The DSL which is turned into `danger`
 * @returns {DangerContext} a DangerContext-like API
 */
function contextForDanger(dsl) {
    var results = {
        fails: [],
        warnings: [],
        messages: [],
        markdowns: [],
        scheduled: []
    };
    var schedule = function (fn) { return results.scheduled.push(fn); };
    var fail = function (message) { return results.fails.push({ message: message }); };
    var warn = function (message) { return results.warnings.push({ message: message }); };
    var message = function (message) { return results.messages.push({ message: message }); };
    var markdown = function (message) { return results.markdowns.push(message); };
    // Anything _but_ danger, that is on the root-level DSL
    var globals = {
        schedule: schedule,
        fail: fail,
        warn: warn,
        message: message,
        markdown: markdown,
        console: console,
        results: results
    };
    // OK, so this is a bit weird, but hear me out.
    //
    // I am not sure if it makes sense for "danger js plugins" ( which will
    // be normal npm modules) to work with the magic globals available in the runtime.
    //
    // So I'm _probably_ going to advocate that you pass in the `danger` object into
    // functions for danger plugins. This means that they can use `danger.fail` etc. This
    // should make it significantly easier to build and make tests for your modules.
    //
    // Which should mean we get more plugins overall.
    //
    // Which should be cool.
    //
    // So, I'm not going to expose these on the interfaces (and thus the public reference
    // but it will go into a 'plugin authors guide' whatever that looks like.)
    //
    return __assign({}, globals, { danger: __assign({}, dsl, globals) });
}
exports.contextForDanger = contextForDanger;
//# sourceMappingURL=Dangerfile.js.map