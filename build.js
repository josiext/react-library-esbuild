const { build } = require("esbuild");
const { dependencies = {}, devDependencies } = require("./package.json");

const ENTRY_POINT = "components/index.ts";

const shared = {
  bundle: true,
  entryPoints: [ENTRY_POINT],
  external: Object.keys(dependencies).concat(devDependencies),
  minify: true,
  sourcemap: true,
  target: ["esnext", "node14"],
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
});
