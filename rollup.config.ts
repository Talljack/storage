import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
  ],
  output: [
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
    {
      format: "es",
      file: pkg.module,
      sourcemap: true,
    },
  ],
};
