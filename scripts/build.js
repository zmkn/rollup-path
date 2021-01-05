import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import aliases from "./alias.js";

const resolve = p => {
  const base = p.split("/")[0];
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1));
  } else {
    return path.resolve(__dirname, "../", p);
  }
};

const builds = {
  esm: {
    input: resolve("core/index.js"),
    format: "esm",
    outputFile: resolve("dist/rollup.path.esm.js")
  },
  cjs: {
    input: resolve("core/index.js"),
    format: "cjs",
    outputFile: resolve("dist/rollup.path.cjs.js")
  },
  umd: {
    input: resolve("core/index.js"),
    format: "umd",
    outputFile: resolve("dist/rollup.path.js")
  },
  "esm-min": {
    input: resolve("core/index.js"),
    format: "esm",
    outputFile: resolve("dist/rollup.path.esm.min.js"),
    plugins: [terser()]
  },
  "cjs-min": {
    input: resolve("core/index.js"),
    format: "cjs",
    outputFile: resolve("dist/rollup.path.cjs.min.js"),
    plugins: [terser()]
  },
  "umd-min": {
    input: resolve("core/index.js"),
    format: "umd",
    outputFile: resolve("dist/rollup.path.min.js"),
    plugins: [terser()]
  }
};

const getConfig = name => {
  const options = builds[name];
  const config = {
    input: options.input,
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        exclude: [/node_modules/, /@babel\/runtime/],
        babelHelpers: "runtime"
      })
    ].concat(options.plugins || []),
    output: [
      {
        file: options.outputFile,
        name: options.moduleName || "rollupPath",
        format: options.format,
        exports: "auto"
      }
    ],
    external: ["fs"]
  };
  return config;
};

module.exports = getConfig(process.env.TARGET);
