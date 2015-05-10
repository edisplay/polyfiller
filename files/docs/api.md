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
		path.join(__dirname, '../you_package/npm_modules')
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


Required file structure;

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
var path = require('path');

module.exports = [
	{
		type: 'file',
		name: path.join(__dirname, './files/index.js')
	}
];
```
