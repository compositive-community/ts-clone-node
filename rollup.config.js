import ts from "rollup-plugin-ts";
import packageJson from "./package.json";
import {builtinModules} from "module";

export default {
	input: "src/index.ts",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true
		}
	],
	plugins: [
		ts({
			tsconfig: "tsconfig.build.json"
		})
	],
	external: [...builtinModules, ...Object.keys(packageJson.dependencies == null ? {} : packageJson.dependencies), ...Object.keys(packageJson.devDependencies)]
};
