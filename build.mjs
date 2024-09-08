import * as esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

await esbuild.build({
	entryPoints: ["src/eruda.js"],
	bundle: true,
	platform: "browser",
	format: "iife",
	globalName: "eruda",
	legalComments: "none",
	splitting: false,
	minify: true,
	treeShaking: true,
	sourcemap: false,
	target: ["es2022", "chrome109", "firefox115", "safari15.6", "edge126"],
	outfile: "dist/eruda.js",
	plugins: [ sassPlugin({style: "compressed"}) ],
});
