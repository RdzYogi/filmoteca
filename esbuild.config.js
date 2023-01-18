const path = require('path')

require("esbuild").build({
  entryPoints: ["application.js"],
  bundle: true,
  publicPath: "/assets",
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  watch: process.argv.includes("--watch"),
  loader: {
    '.js': 'jsx',
    '.png': 'file',
    '.svg': 'file'
  },
}).catch(() => process.exit(1))
