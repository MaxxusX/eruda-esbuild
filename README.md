# eruda esbuild
i dont like webpack

## Try it

```javascript
javascript:(()=>{let s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/eruda";s.addEventListener("load",()=>eruda.init());document.body.append(s)})();
```

## Features

* [Console](https://eruda.liriliri.io/docs/api.html#console): Display JavaScript logs.
* [Elements](https://eruda.liriliri.io/docs/api.html#elements): Check DOM state.
* [Network](https://eruda.liriliri.io/docs/api.html#network): Show requests status.
* [Resources](https://eruda.liriliri.io/docs/api.html#resources): Show LocalStorage and Cookie info.
* [Info](https://eruda.liriliri.io/docs/api.html#info): Show URL and UserAgent info.
* [Snippets](https://eruda.liriliri.io/docs/api.html#snippets): Include snippets used most often.
* [Sources](https://eruda.liriliri.io/docs/api.html#sources): HTML, JS, and CSS source viewer.

## Plugins

* [eruda-monitor](https://github.com/liriliri/eruda-monitor): Display page fps and memory.
* [eruda-features](https://github.com/liriliri/eruda-features): Browser feature detections.
* [eruda-timing](https://github.com/liriliri/eruda-timing): Show performance and resource timing.
* [eruda-code](https://github.com/liriliri/eruda-code): Run JavaScript code.
* [eruda-benchmark](https://github.com/liriliri/eruda-benchmark): Run JavaScript benchmarks.
* [eruda-geolocation](https://github.com/liriliri/eruda-geolocation): Test geolocation.
* [eruda-orientation](https://github.com/liriliri/eruda-orientation): Test orientation api.
* [eruda-touches](https://github.com/liriliri/eruda-touches): Visualize screen touches.
* [eruda-vue](https://github.com/liriliri/eruda-vue): Vue devtools.

If you want to create a plugin yourself, follow the guides [here](https://eruda.liriliri.io/docs/plugin.html).

## Related Projects

* [eruda-android](https://github.com/liriliri/eruda-android): Simple webview with eruda loaded automatically.
* [chii](https://github.com/liriliri/chii): Remote debugging tool.
* [chobitsu](https://github.com/liriliri/chobitsu): Chrome devtools protocol JavaScript implementation.
* [licia](https://github.com/liriliri/licia): Utility library used by eruda.
* [luna](https://github.com/liriliri/luna): UI components used by eruda.
* [vivy](https://github.com/liriliri/vivy-docs): Icon image generation.

## Third Party

* [eruda-pixel](https://github.com/Faithree/eruda-pixel): UI pixel restoration tool.
* [eruda-webpack-plugin](https://github.com/huruji/eruda-webpack-plugin): Eruda webpack plugin.
* [eruda-vue-devtools](https://github.com/Zippowxk/vue-devtools-plugin): Eruda Vue-devtools plugin.
