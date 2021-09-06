"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.release = exports.production = exports.master = void 0;
var fs_1 = require("fs");
var dateformat_1 = __importDefault(require("dateformat"));
var path_1 = require("path");
var template = fs_1.readFileSync(path_1.join(__dirname, "helpers", "default-template.hbs")).toString();
var commitTemplate = fs_1.readFileSync(path_1.join(__dirname, "helpers", "commit-template.hbs")).toString();
var options = {
    plugins: [
        [
            "semantic-release-gitmoji",
            {
                releaseRules: {
                    major: {
                        include: [":boom:"]
                    },
                    minor: {
                        include: [":sparkles:"]
                    },
                    patch: {
                        include: [
                            ":bug:",
                            ":ambulance:",
                            ":lock:",
                            ":recycle:",
                            ":lipstick:",
                            ":alien:",
                            ":package:",
                        ]
                    }
                },
                releaseNotes: {
                    template: template,
                    partials: { commitTemplate: commitTemplate },
                    helpers: {
                        datetime: function (format) {
                            if (format === void 0) { format = "UTC:yyyy-mm-dd"; }
                            return dateformat_1["default"](new Date(), format);
                        }
                    },
                    issueResolution: {
                        template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
                        baseUrl: "https://github.com",
                        source: "github.com"
                    }
                }
            },
        ],
        "@semantic-release/github",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md"
            },
        ],
        [
            "@semantic-release/npm",
            {
                npmPublish: !!process.env.NPM_TOKEN
            },
        ],
        [
            "@semantic-release/git",
            {
                assets: __spreadArrays(["CHANGELOG.md", "package.json", "package-lock.json"], (process.env.COMMIT_ASSETS ? process.env.COMMIT_ASSETS.split(',').map(function (x) { return x.trim(); }) : [])),
                message: ":bookmark: Release v${nextRelease.version} [skip ci]"
            },
        ],
    ]
};
exports.master = __assign(__assign({}, options), { branches: ["master"] });
exports.production = __assign(__assign({}, options), { branches: ["production"] });
var release = function (branches) {
    return (__assign(__assign({}, options), { branches: branches }));
};
exports.release = release;
//# sourceMappingURL=release.config.js.map