import { master, production, release } from "./config/release.config";
import eslint from "./config/eslint.config";

const releaseMaster = master;
const releaseProduction = production;

export { eslint, release, releaseMaster, releaseProduction };
