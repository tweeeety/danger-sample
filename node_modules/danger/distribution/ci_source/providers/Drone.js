"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ci_source_helpers_1 = require("../ci_source_helpers");
var Drone = (function () {
    function Drone(env) {
        this.env = env;
    }
    Object.defineProperty(Drone.prototype, "name", {
        get: function () { return "Drone"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "isCI", {
        get: function () {
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, ["DRONE"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "isPR", {
        get: function () {
            var mustHave = ["DRONE", "DRONE_PULL_REQUEST", "DRONE_REPO"];
            var mustBeInts = ["DRONE_PULL_REQUEST"];
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, mustHave) && ci_source_helpers_1.ensureEnvKeysAreInt(this.env, mustBeInts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "pullRequestID", {
        get: function () { return this.env.DRONE_PULL_REQUEST; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "repoSlug", {
        get: function () { return this.env.DRONE_REPO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "supportedPlatforms", {
        get: function () { return ["github"]; },
        enumerable: true,
        configurable: true
    });
    return Drone;
}());
exports.Drone = Drone;
//# sourceMappingURL=Drone.js.map