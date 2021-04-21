import { getSpec } from "./spec";

(async () => {
  process.stdout.write(JSON.stringify(await getSpec()));
})();
