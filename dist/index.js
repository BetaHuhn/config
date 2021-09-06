"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.releaseProduction = exports.releaseMaster = exports.release = exports.eslintTypescript = exports.eslintVue = exports.eslint = void 0;
var release_config_1 = require("./config/release.config");
exports.release = release_config_1.release;
var eslint_config_1 = __importDefault(require("./config/eslint.config"));
exports.eslint = eslint_config_1["default"];
var eslintVue_config_1 = __importDefault(require("./config/eslintVue.config"));
exports.eslintVue = eslintVue_config_1["default"];
var eslintTs_config_1 = __importDefault(require("./config/eslintTs.config"));
exports.eslintTypescript = eslintTs_config_1["default"];
var releaseMaster = release_config_1.master;
exports.releaseMaster = releaseMaster;
var releaseProduction = release_config_1.production;
exports.releaseProduction = releaseProduction;
//# sourceMappingURL=index.js.map