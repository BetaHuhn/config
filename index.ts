import { master, production, release } from "./config/release.config";
import eslint from "./config/eslint.config";
import eslintVue from "./config/eslintVue.config";

const releaseMaster = master;
const releaseProduction = production;

export { eslint, eslintVue, release, releaseMaster, releaseProduction };
