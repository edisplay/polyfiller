# polyfiller

> A polyfill combinator

## Getting Started


Work in progress, see you...


```js
import Polyfiller from 'polyfiller';

const polyfiller = new Polyfiller({
	// Have custom polyfills? Add paths to their location here.
	custom_features: ['./my_polyfills'],
	exclude: []
});

var list = polyfiller.find([
	{
		name: 'Promise'
	}
]);

polyfiller.pack(list);
```

