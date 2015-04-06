# polyfiller

> A polyfill combinator

## Getting Started


Work in progress, see you...


```js
import Polyfiller from 'polyfiller';

const polyfiller = new Polyfiller({
	path: './my_polyfills'
});

var list = polyfiller.find([
	{
		name: 'Promise',
		dependencies: true
	}
]);

polyfiller.pack(list);
```

