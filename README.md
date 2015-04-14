# polyfiller

> A polyfill combinator

## Getting Started


Work in progress, see you...


```js
import path from 'path';
import Polyfiller from 'polyfiller';

const polyfiller = new Polyfiller({
	// Have custom polyfills? Add paths to their location here.
	catalog: [path.resolve(__dirname, '../my/catalog')],
	exclude: ['setImmediate']
	verbose: true,
	wrapper: true
});

var list = polyfiller.find([ { name: 'Promise' } ]);

polyfiller.pack(list);
```

