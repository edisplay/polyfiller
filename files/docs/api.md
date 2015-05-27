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
Default (`find`): `None` <br />
Default (`pack`): [see](https://github.com/Polyfiller/polyfiller/blob/master/trunk/options.js#L41-L53)

A custom wrapper for your environment.

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

Do you want to use some specific `npm` or `bower` modules?

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
