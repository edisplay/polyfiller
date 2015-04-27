# polyfiller

[![npm version badge](https://img.shields.io/npm/v/polyfiller.svg)](polyfiller)
[![Build Status](https://travis-ci.org/monolithed/polyfiller.png)](https://travis-ci.org/monolithed/polyfiller)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/monolithed.svg)](https://saucelabs.com/u/monolithed)

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
var Polyfiller = require('polyfiller');

var polyfiller = new Polyfiller,
	list = polyfiller.find([ 'Promise' ]),
	code = polyfiller.pack(list);
```


### Methods

#### find

Type: `Function (feature, name)` <br />
Returns: `Array`


Returns an unordered bundle of polyfills as an array of objects

```js
var polyfiller = new Polyfiller,
	list = polyfiller.find(['Promise'], function (feature, name) {
		console.log(name, feature.source, feature.config);
	});

	list[0].source; // source code
	list[0].config.name; // feature name
```


Also available the second format (it may be useful in the future versions):

```js
var polyfiller = new Polyfiller,
	list = polyfiller.find([
		{ name: 'Promise' }, 
		{ name: 'Reflect' } 
	],
	function (feature, name) {
		console.log(name, feature.source, feature.config);
	});
```

#### list

Type: `Function ()` <br />
Returns: `Array`

Return a list of all the polyfills as an array of strings.

```js
var polyfiller = new Polyfiller,
	list = polyfiller.list();

console.log(list); // ['Promise', 'Reflect', 'URL', ...]
```

#### pack

Type: `Function (features)` <br />
Returns: `String`

Packs a list of polyfills into one string

```js
var Polyfiller = require('polyfiller');

var polyfiller = new Polyfiller,
	list = polyfiller.find([ { name: 'Promise' } ]),
	code = polyfiller.pack(list);
```


### Options

#### catalog

Type: `Array` <br />
Default: `[]`

Have custom polyfills? Add paths to their location here.

```js
var path = require('path'),
	Polyfiller = require('polyfiller');

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
var path = require('path'),
	Polyfiller = require('polyfiller');

var polyfiller = new Polyfiller({
	exclude: ['setImmediate']
});
```

#### verbose

Type: `Boolean` <br />
Default: `false`

Verbose mode is an option that provides additional details as to what the package is doing.

```js
var path = require('path'),
	Polyfiller = require('polyfiller');

var polyfiller = new Polyfiller({
	verbose: true
});
```

#### wrapper

Type: `Function` <br />
Default: `None`

A safety wrapper for your environment

```js
var path = require('path'),
	Polyfiller = require('polyfiller');

var polyfiller = new Polyfiller({
	wrapper: function (source) {
		return ';(function () {' + source + '}.call(self));'
	}
});
```

### Tests

```
grunt test
```


### license

MIT

Task submitted by [Alexander Abashkin](https://github.com/monolithed)
