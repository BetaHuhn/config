import { master, production, release } from "./config/release.config";
import eslint from "./config/eslint.config";
import eslintVue from "./config/eslintVue.config";
import eslintTypescript from "./config/eslintTs.config";

const releaseMaster = master;
const releaseProduction = production;

export { eslint, eslintVue, eslintTypescript, release, releaseMaster, releaseProduction };
