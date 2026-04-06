import { Config } from "../types.js";

export const defaultConfig: Config = {
  include: ["**/*.ts", "**/*.js", "**/*.json", "**/*.md"],
  ignore: ["node_modules/**", "dist/**"],
  maxFileSizeKB: 50,
  embedSource: true,
  priority: ["package.json", "README.md"]
};