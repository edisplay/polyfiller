```js
var polyfiller = new Polyfiller;

var list = polyfiller.find([ 'Promise', 'Fetch', 'URL' ]),
	code = polyfiller.pack(list);
```
