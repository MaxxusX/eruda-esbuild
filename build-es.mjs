import * as esbuild from "esbuild";

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
	target: ["chrome109", "firefox115", "safari15.6", "edge126"],
	outDir: "dist",
});
