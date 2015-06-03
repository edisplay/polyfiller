```js
var fs = require('fs');

var polyfiller = new Polyfiller;

var list = polyfiller.find([ 'Promise', 'Fetch', 'URL' ]);

fs.writeFile('./polyfills.js', polyfiller.pack(list));
```
