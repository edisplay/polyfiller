# Polyfiller

[![npm version](https://badge.fury.io/js/polyfiller.svg)](http://badge.fury.io/js/polyfiller)
[![Build Status](https://travis-ci.org/Polyfiller/polyfiller.png)](https://travis-ci.org/Polyfiller/polyfiller)
[![Coverage Status](https://coveralls.io/repos/Polyfiller/polyfiller/badge.svg)](https://coveralls.io/r/Polyfiller/polyfiller)
[![Dependency Status](https://david-dm.org/Polyfiller/polyfiller.svg)](https://david-dm.org/Polyfiller/polyfiller)
[![Donate](https://img.shields.io/gratipay/polyfiller.corp.svg)](https://gratipay.com/polyfiller.corp)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)

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

var list = polyfiller.find([ 'Promise' ]),
	code = polyfiller.pack(list);
```


### Catalog

A list of all available features

| Feature | What's included? | Type | License |
|:--------|:-----------------|:----:|:-------:|
| 		Array.from | 		[Array.from](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		Array.prototype.find | 		[Array.prototype.find](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		Array.prototype.findIndex | 		[Array.prototype.findIndex](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.findindex)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		CSS.escape | 		[CSS.escape](https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 			alt="w3c" width="25" height="25" /> | 		MIT |
| 		Collections | 		[Set](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)<br />[Map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map)<br />[WeakSet](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)<br />[WeakMap](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		DOM4 | 		[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)<br />[Element#append](https://dom.spec.whatwg.org/#dom-parentnode-appendnodes)<br />[Element#prepend](https://dom.spec.whatwg.org/#dom-parentnode-prependnodes)<br />[Element#after](https://dom.spec.whatwg.org/#dom-childnode-afternodes)<br />[Element#before](https://dom.spec.whatwg.org/#dom-childnode-beforenodes)<br />[Element#replaceWith](https://dom.spec.whatwg.org/#dom-childnode-replacewithnodes)<br />[Element#remove](https://dom.spec.whatwg.org/#dom-childnode-remove)<br />[Element#query](https://dom.spec.whatwg.org/#dom-elements-queryrelativeselectors)<br />[Element#queryAll](https://dom.spec.whatwg.org/#dom-elements-queryallrelativeselectors)<br />[Element#matches](https://dom.spec.whatwg.org/#dom-element-matchesselectors)<br />[Element#closest](https://dom.spec.whatwg.org/#dom-element-closestselectors)<br />[Element#classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 			alt="w3c" width="25" height="25" /> <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 			alt="whatwg" width="25" height="25" /> | 		MIT |
| 		EventSource | 		[EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 			alt="whatwg" width="25" height="25" /> | 		MIT |
| 		Fetch | 		[GlobalFetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)<br />[Body](https://developer.mozilla.org/en-US/docs/Web/API/Body)<br />[Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)<br />[Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)<br />[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 			alt="whatwg" width="25" height="25" /> | 		MIT |
| 		Object.getOwnPropertySymbols | 		[Object.getOwnPropertySymbols](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		Promise | 		[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		window.setImmediate | 		[window.setImmediate](undefined)<br />[window.clearImmediate](undefined)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 			alt="w3c" width="25" height="25" /> | 		MIT |
| 		Reflect | 		[Reflect](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect)<br />[Proxy handler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		Apache License, MPL |
| 		RegExp.prototype.match | 		[RegExp.prototype.match](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.match)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		RegExp.prototype.search | 		[RegExp.prototype.search](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.search)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		String.fromCodePoint | 		[RegExp.prototype.search](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		String.prototype.at | 		[String.prototype.at](https://github.com/mathiasbynens/String.prototype.at)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/proposal.png?raw=true" 			alt="proposal" width="25" height="25" /> | 		MIT |
| 		String.prototype.codePointAt | 		[String.prototype.codePointAt](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		String.prototype.endsWith | 		[String.prototype.endsWith](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		String.prototype.includes | 		[String.prototype.includes](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		String.prototype.normalize | 		[String.prototype.normalize](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT, GPL |
| 		String.prototype.repeat | 		[String.prototype.repeat](undefined)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		String.prototype.startsWith | 		[String.prototype.startsWith](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/ecma.png?raw=true" 			alt="ecma" width="25" height="25" /> | 		MIT |
| 		TextEncoder | 		[TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 			alt="whatwg" width="25" height="25" /> | 		Apache License |
| 		URL | 		[URL](undefined)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 			alt="whatwg" width="25" height="25" /> | 		MIT |
| 		WindowBase64 | 		[WindowBase64](undefined)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 			alt="w3c" width="25" height="25" /> <img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/whatwg.png?raw=true" 			alt="whatwg" width="25" height="25" /> | 		WTFPL |
| 		document.scrollingElement | 		[document.scrollingElement](undefined)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 			alt="w3c" width="25" height="25" /> | 		MIT |
| 		window.requestAnimationFrame | 		[window.requestAnimationFrame](undefined)<br />[window.cancelAnimationFrame](undefined)<br /> | 		<img src="https://github.com/Polyfiller/polyfiller/blob/master/files/icons/type/25x25/w3c.png?raw=true" 			alt="w3c" width="25" height="25" /> | 		MIT |



### Compatibility

Theoretically compatible with all contemporary browsers since **IE9**<br />
For **IE8** only it's recommended to include [ie8](https://github.com/WebReflection/ie8) script before your build

### Methods

#### find

Type: `Function (feature, name)` <br />
Returns: `Array`

Returns an unordered bundle of polyfills as an array of objects

```js
var polyfiller = new Polyfiller;

var list = polyfiller.find(['Promise'], function (feature, name) {
	console.log(name, feature.source, feature.config);
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

Return a list of all available features as an array of strings.

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

For information see `index.json` file

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
Default: `None`

A custom wrapper for your environment

```js
var polyfiller = new Polyfiller({
	wrapper: function (source) {
		return ';(function () {' + source + '}.call(self));'
	}
});
```

Also this option is available like method:

```js
var polyfiller = new Polyfiller;

polyfiller.options.wrapper(function (source) {
	return source;
});
```


### Tests

```
grunt test
```



### Contributing

1. Fork the one
2. Create a topic branch
3. Make your commits
4. Write the tests and run `grunt test`
4. Run `grunt build`
5. Submit Pull Request once Tests are Passing


### License

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)

