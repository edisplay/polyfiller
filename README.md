# Polyfiller

[![npm version](https://badge.fury.io/js/polyfiller.svg)](http://badge.fury.io/js/polyfiller)
[![Build Status](https://travis-ci.org/Polyfiller/polyfiller.png)](https://travis-ci.org/Polyfiller/polyfiller)
[![Coverage Status](https://coveralls.io/repos/Polyfiller/polyfiller/badge.svg)](https://coveralls.io/r/Polyfiller/polyfiller)
[![Dependency Status](https://david-dm.org/Polyfiller/polyfiller.svg)](https://david-dm.org/Polyfiller/polyfiller)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)
[![Codacy Badge](https://www.codacy.com/project/badge/f98b6ccda7d841c1a2b1feb3da940324)](https://www.codacy.com/app/monolithed/polyfiller)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/polyfiller.svg?auth=28a648575b01d971b7d71de81b29b557)](https://saucelabs.com/u/polyfiller)


> A polyfill combinator


## Getting Started

This package requires Node `~0.10.0`

If you haven't used [npm](https://www.npmjs.com/) before, be sure to check out the [Getting Started](https://nodejs.org/community/) guide, as it explains how to install [npm](https://docs.npmjs.com/getting-started/installing-node) and use a [package.json](https://docs.npmjs.com/files/package.json) file. 
Once you're familiar with that process, you may install this package with this command:

```shell
npm install polyfiller --save-dev
```

Once the package has been installed, it may be used inside your files with this line of JavaScript:

```js
var Polyfiller = require('polyfiller');
```



### Usage Example

```js
var polyfiller = new Polyfiller;

var list = polyfiller.find([ 'Promise', 'Fetch', 'URL' ]),
	code = polyfiller.pack(list);
```


### Catalog

A list of [available features](https://github.com/Polyfiller/polyfiller-catalog/tree/master/files)

| Feature | What's included? | Type | License |
|:--------|:-----------------|:----:|:-------:|
[Array.from](https://npmjs.org/package/array.from) | [Array.from](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[Array.prototype.find](https://npmjs.org/package/array.prototype.find) | [Array.prototype.find](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[Array.prototype.findIndex](https://npmjs.org/package/array.prototype.findindex) | [Array.prototype.findIndex](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.findindex)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[CSS.escape](https://npmjs.org/package/css.escape) | [CSS.escape](https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[Object.observe](https://npmjs.org/package/object.observe) | [Object.observe](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/observe)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/proposal.png?raw=true" 				alt="proposal" width="25" height="25" /> | MIT | 
[Reflect](https://npmjs.org/package/harmony-reflect) | [Reflect](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect)<br />[Proxy handler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | Apache License, MPL | 
[Collections](https://npmjs.org/package/es6-collections) | [Set](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)<br />[Map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map)<br />[WeakSet](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)<br />[WeakMap](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[DOM4](https://npmjs.org/package/dom4) | [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)<br />[Element#append](https://dom.spec.whatwg.org/#dom-parentnode-appendnodes)<br />[Element#prepend](https://dom.spec.whatwg.org/#dom-parentnode-prependnodes)<br />[Element#after](https://dom.spec.whatwg.org/#dom-childnode-afternodes)<br />[Element#before](https://dom.spec.whatwg.org/#dom-childnode-beforenodes)<br />[Element#replaceWith](https://dom.spec.whatwg.org/#dom-childnode-replacewithnodes)<br />[Element#remove](https://dom.spec.whatwg.org/#dom-childnode-remove)<br />[Element#query](https://dom.spec.whatwg.org/#dom-elements-queryrelativeselectors)<br />[Element#queryAll](https://dom.spec.whatwg.org/#dom-elements-queryallrelativeselectors)<br />[Element#matches](https://dom.spec.whatwg.org/#dom-element-matchesselectors)<br />[Element#closest](https://dom.spec.whatwg.org/#dom-element-closestselectors)<br />[Element#classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[Element.prototype.dataset](https://github.com/inexorabletash/polyfill) | [Element.prototype.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[EventSource](https://npmjs.org/package/event-source-polyfill) | [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[Fetch](https://npmjs.org/package/whatwg-fetch) | [window.fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)<br />[Body](https://developer.mozilla.org/en-US/docs/Web/API/Body)<br />[Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)<br />[Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)<br />[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[Promise](https://npmjs.org/package/es6-promises) | [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[KeyboardEvent](https://github.com/inexorabletash/polyfill) | [URL](https://developer.mozilla.org/ru/docs/Web/API/KeyboardEvent)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[Notification](https://github.com/MrSwitch/notification.js) | [Notification](https://developer.mozilla.org/ru/docs/Web/API/notification)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[Object.getOwnPropertySymbols](https://npmjs.org/package/get-own-property-symbols) | [Object.getOwnPropertySymbols](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[PointerEvents](https://npmjs.org/package/handjs) | [PointerEvents](http://www.w3.org/Submission/pointer-events/)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | Apache License | 
[window.setImmediate](https://www.npmjs.com/package/setimmediate) | [window.setImmediate](https://developer.mozilla.org/ru/docs/Web/API/Window/setImmediate)<br />[window.clearImmediate](https://developer.mozilla.org/ru/docs/Web/API/Window/clearImmediate)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[RegExp.prototype.match](https://npmjs.org/package/regexp.prototype.match) | [RegExp.prototype.match](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.match)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[RegExp.prototype.search](https://npmjs.org/package/regexp.prototype.search) | [RegExp.prototype.search](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.search)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[String.fromCodePoint](https://npmjs.org/package/string.fromcodepoint) | [RegExp.prototype.search](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[String.prototype.at](https://npmjs.org/package/string.prototype.at) | [String.prototype.at](https://github.com/mathiasbynens/String.prototype.at)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/proposal.png?raw=true" 				alt="proposal" width="25" height="25" /> | MIT | 
[String.prototype.codePointAt](https://npmjs.org/package/string.prototype.codepointat) | [String.prototype.codePointAt](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[String.prototype.endsWith](https://npmjs.org/package/string.prototype.endswith) | [String.prototype.endsWith](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[String.prototype.includes](https://npmjs.org/package/string.prototype.includes) | [String.prototype.includes](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[String.prototype.normalize](https://www.npmjs.com/package/unorm) | [String.prototype.normalize](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT, GPL | 
[String.prototype.repeat](https://npmjs.org/package/string.prototype.repeat) | [String.prototype.repeat](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[String.prototype.startsWith](https://npmjs.org/package/string.prototype.startswith) | [String.prototype.startsWith](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[TextEncoder](https://www.npmjs.com/package/text-encoding) | [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | Apache License | 
[TypedArray](https://github.com/inexorabletash/polyfill) | [TypedArray](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)<br />[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)<br />[DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 				alt="ecma" width="25" height="25" /> | MIT | 
[URL](https://github.com/inexorabletash/polyfill) | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[UserTiming](https://www.npmjs.com/package/usertiming) | [window.performance.clearMarks](http://www.w3.org/TR/user-timing/)<br />[window.performance.clearMeasures](http://www.w3.org/TR/user-timing/)<br />[window.performance.getEntries](http://www.w3.org/TR/user-timing/)<br />[window.performance.getEntriesByName](http://www.w3.org/TR/user-timing/)<br />[window.performance.getEntriesByType](http://www.w3.org/TR/user-timing/)<br />[window.performance.mark](http://www.w3.org/TR/user-timing/)<br />[window.performance.measure](http://www.w3.org/TR/user-timing/)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[WindowBase64](https://www.npmjs.com/package/Base64) | [WindowBase64](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | WTFPL | 
[document.currentScript](https://www.npmjs.com/package/currentscript) | [document.scrollingElement](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#dom-document-currentscript)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[document.scrollingElement](https://www.npmjs.com/package/scrollingelement) | [document.scrollingElement](http://dev.w3.org/csswg/cssom-view/#dom-document-scrollingelement)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[window.location.origin](https://github.com/Polyfiller/polyfiller-catalog) | [window.location.origin](https://developer.mozilla.org/en-US/docs/Web/API/URLUtils/origin)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[window.navigator.geolocation](https://github.com/inexorabletash/polyfill) | [window.navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[window.navigator.getUserMedia](https://npmjs.org/package/getusermedia-js) | [window.navigator.getUserMedia](http://dev.w3.org/2011/webrtc/editor/getusermedia.html)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[window.navigator.language](https://github.com/Polyfiller/polyfiller-catalog) | [window.location.origin](https://html.spec.whatwg.org/multipage/webappapis.html#navigatorlanguage)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 				alt="whatwg" width="25" height="25" /> | MIT | 
[window.performance.now](https://gist.github.com/paulirish/5438650) | [window.performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 
[window.requestAnimationFrame](https://npmjs.org/package/window.requestanimationframe) | [window.requestAnimationFrame](https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame)<br />[window.cancelAnimationFrame](https://developer.mozilla.org/ru/docs/DOM/window.cancelAnimationFrame)<br /> | <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 				alt="w3c" width="25" height="25" /> | MIT | 



### Compatibility

Theoretically compatible with all contemporary browsers since **IE9**.<br />
For **IE8** only it's recommended to include [ie8](https://github.com/WebReflection/ie8) script before your build

### Methods

#### find

Type: `Function (Array, [ Function (feature, name, features) ])` <br />
Returns: `Array`

Returns an unordered bundle of polyfills as an array of objects

```js
var polyfiller = new Polyfiller;

var list = polyfiller.find([
	'Promise'
],
function (feature, name) {
	console.log(feature.source, feature.config, name);
});

list[0].source; // source code
list[0].config.name; // Promise
```


Also available the second format (it may be useful in the future versions):

```js
var polyfiller = new Polyfiller;

var list = polyfiller.find([
	{ 
		name: 'Promise'
	}
],
function (feature, name) {
	console.log(name, feature.source, feature.config);
});
```

#### list

Type: `Function ([extended=false])` <br />
Returns: `Array`

Returns a list of all available features as an array of strings.

```js
var polyfiller = new Polyfiller;

polyfiller.list(); // ['Promise', 'Reflect', 'URL', ...]
```

*extended* option

```js
var polyfiller = new Polyfiller;
var list = polyfiller.list(true);

list; // [{ config }, ...]
list[0].name; // Array.from
list[0].author; // Mathias Bynens
list[0].licenses[0].type; // MIT
...
```

For more information see the [config](https://github.com/Polyfiller/polyfiller-catalog/blob/master/files/Fetch/index.json) format

#### pack

Type: `Function (features)` <br />
Returns: `String`

Packs a list of polyfills into one string

```js
var polyfiller = new Polyfiller;

var list = polyfiller.find([ 'Promise' ]),
	code = polyfiller.pack(list);
```


### Options

#### exclude

Type: `Array` <br />
Default: `[]`

Some polyfills have dependencies that you can exclude here

```js
var polyfiller = new Polyfiller({
	exclude: ['setImmediate']
});
```

#### verbose

Type: `Boolean` <br />
Default: `false`

Verbose mode is an option that provides additional details as to what the package is doing.

```js
var polyfiller = new Polyfiller({
	verbose: true
});
```

#### wrapper

Type: `Function` <br />
Default: [see](https://github.com/Polyfiller/polyfiller/blob/master/trunk/options.js#L41-L53)

A custom wrapper for your environment

```js
var polyfiller = new Polyfiller({
	wrapper: function (source) {
		return ';(function () {' + source + '}.call(self));'
	}
});
```

Also this option is available like a method:

```js
var polyfiller = new Polyfiller;

polyfiller.options.wrapper(function (source) {
	return source;
});
```

#### modules

Do you want to use some specific `npm` modules?

```js
var path = require('path');

var polyfiller = new Polyfiller({
	modules: [
		path.join(__dirname, '../your_catalog/npm_modules'),
		path.join(__dirname, '../your_catalog/bower_components')
	]
});
```

NOTE: Please use only with the option `catalog`.


#### catalog

Type: `Array` <br />
Default: `[trunk/catalog]`

Have custom polyfills? Add paths to their location here.

```js
var path = require('path');

var polyfiller = new Polyfiller({
	catalog: [ 
		path.resolve(__dirname, '../your/catalog')
	]
});
```

If you want to use `npm` or `bower` packages in your catalog, please see `modules` section. 


Required file structure for each new package:

```
catalog
	Promise
		index.json
		index.js
```

**index.json**

```json
{
	"name": "Promise"
}
```

There are dependencies?

```
"dependencies": ["window.setImmediate"]
```

**index.js**

```js
module.exports = [
	{
		type: 'npm',
		name: 'es6-promises'
	}
];
```

*type*

Type: `string [npm | bower | file]` <br />
Default: `None`

*name*

Type: `string` <br />
Default: `None`

**package.json**

Use `dependencies` and `bundleDependencies` for new features located in `npm` 

```json
{
	"dependencies": {
		"es6-promises": "^1.0.10"
	},

	"bundleDependencies": [
		"es6-promises"
	]
}
```

**bower.json**

Use `dependencies` for new features located in `bower` 

```json
{
	"dependencies": {
		"es6-promises": "1.0.10"
	}
}
```

The files are located locally?

```
catalog
	Promise
		files
			index.js — your polyfill

		index.json
		index.js
```

```js
// index.js

var path = require('path');

module.exports = [
	{
		type: 'file',
		name: path.join(__dirname, './files/index.js')
	}
];
```


### Tests

```
npm test
```



### Contributing

1. Fork the one
2. Create a topic branch
3. Make your commits
4. Write the tests (see `mocks.js` and `api.js`)
4. Run `grunt test` (code) or `grunt build` (docs)  
5. Submit Pull Request once Tests are Passing

[Have an interesting and well-tested polyfill?](https://github.com/Polyfiller/polyfiller-catalog)


### License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)

