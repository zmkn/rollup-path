/**
 * import 路径包含参数的插件
 */

import fs from "fs";

const matchPath = (path, rule) => {
  return rule.test(path);
};

const fixPath = (path, rule) => {
  return path.replace(rule, "");
};

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const rollupPath = (rule = [/\?.*/g, /\#.*/g]) => {
  return {
    name: "rollupPath",
    async load(path) {
      if ({}.toString.call(rule) === "[object RegExp]") {
        if (matchPath(path, rule)) {
          return await readFile(fixPath(path, rule));
        }
      } else if ({}.toString.call(rule) === "[object Array]") {
        for (let item of rule) {
          if ({}.toString.call(item) === "[object RegExp]") {
            if (matchPath(path, item)) {
              return await readFile(fixPath(path, item));
            }
          }
        }
      }
    }
  };
};

export default rollupPath;
