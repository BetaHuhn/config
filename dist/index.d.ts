/// <reference types="semantic-release" />
import { release } from "./config/release.config";
import eslint from "./config/eslint.config";
import eslintVue from "./config/eslintVue.config";
import eslintTypescript from "./config/eslintTs.config";
declare const releaseMaster: import("semantic-release").Options;
declare const releaseProduction: import("semantic-release").Options;
export { eslint, eslintVue, eslintTypescript, release, releaseMaster, releaseProduction };
