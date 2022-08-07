const { build } = require("esbuild");
const liveServer = require("live-server");

const dev = async () => {
  await build({
    bundle: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["src/dev.tsx"],
    incremental: true,
    minify: process.env.NODE_ENV === "production",
    outfile: "public/script.js",
    sourcemap: true,
    watch: true,
  });

  liveServer.start({
    open: true,
    port: +process.env.PORT || 4567,
    root: "public",
  });
};

dev();
