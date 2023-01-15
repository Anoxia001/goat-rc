import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { visualizer } from "rollup-plugin-visualizer";
import externals from "rollup-plugin-node-externals";
import strip from "@rollup/plugin-strip";
import alias from "@rollup/plugin-alias";

export default {
  input: "src/index.ts",
  output: {
    dir: "es",
    format: "esm",
    exports: "named",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    resolve(),
    commonjs(),
    externals({
      devDeps: true,
    }),
    typescript(),
    babel({
      exclude: ["node_modules/**"],
      runtimeHelpers: true,
      extensions: ["js", "jsx", "ts", ".tsx"],
    }),
    alias({
      entries: [{ find: "@", replacement: "../src" }],
    }),
    strip(),
    visualizer({
      filename: "report.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
};
