# polyfiller

> A polyfill combinator

## Getting Started


Work in progress, see you...


```js
import polyfiller from 'polyfiller';

polyfiller.find([
	{
		name: 'Promise',
		dependencies: true
	}
],
null, (polyfill, name, dependencies) => {
	console.log(name, polyfill.source, polyfill.config);
});
```