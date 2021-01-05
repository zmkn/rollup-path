import path from "path";

const resolve = p => path.resolve(__dirname, "../", p);

export default {
  core: resolve("src/core")
};
