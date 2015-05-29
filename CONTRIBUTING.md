# Contributing to Polyfiller

We'd love for you to contribute to our source code and to make Polyfiller even better than it is
today! Here are the guidelines we'd like you to follow:

 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Update packages](#bump)
 - [API Requests](#api)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)
 - [License](#license)
 - [Signing the CLA](#cla)
 - [Further Info](#info)

## <a name="coc"></a> Code of Conduct
Help us keep Polyfiller open and inclusive. Please read and follow our [Code of Conduct][coc].

## <a name="question"></a> Got a Question or Problem?

If you have questions about how to use Polyfiller, please direct these to the [GitHub Issue][issue].

## <a name="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by
submitting an issue to our [GitHub Repository][issue]. Even better you can submit a Pull Request
with a fix.

**Please see the Submission Guidelines below**.

## <a name="api"></a> API request?
You can request a new feature by submitting an issue to our [GitHub Repository][issue]. If you
would like to implement a new feature then consider what kind of change it is:

* **Major Changes** that you wish to contribute to the project should be discussed first on our
[GitHub Issue][issue] so that we can better coordinate our efforts, prevent
duplication of work, and help you to craft the change so that it is successfully accepted into the
project.

* **Small Changes** can be crafted and submitted to the [GitHub Repository][github] as a Pull Request.

## <a name="feature"></a> Want a Polyfill?
You can request a new polyfill by submitting an issue to our [GitHub Repository][catalog-issue].

Have an interesting and well-tested polyfill for our [catalog][catalog]?

### File structure

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

*type*:

Type: `string [npm | bower | file]` <br />
Default: `None`

*name*:

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

Run `grunt test` and [commit your changes](#commit)


## <a name="bump"></a> Want a new package version?

If you want to increment the version number to a new unique value:

1. Update package.json

```
{
	"version": "new version",
	
	"dependencies": {
		"polyfiller-catalog": "new version"
	}
}
```

2. Check this out

```
npm update
npm test
git commit -am 'new version'
git tag -a 'new version' -m 'new version'
```

[Commit your changes](#commit)

## <a name="docs"></a> Want a Doc Fix?

If you want to help improve the docs, it's a good idea to let others know what you're working on to
minimize duplication of effort. Before starting, check out the issue queue for
[Milestone:Docs Only][milestone].
Comment on an issue to let others know what you're working on, or create a new issue if your work
doesn't fit within the scope of any of the existing doc fix projects.

For large fixes, please build and test the documentation before submitting the PR to be sure you haven't
accidentally introduced any layout or formatting issues. You should also make sure that your commit message
is labeled "docs:" and follows the **Git Commit Guidelines** outlined below.

If you're just making a small change, don't worry about filing an issue first. Use the friendly blue "Improve this doc" button at the top right of the doc page to fork the repository in-place and make a quick change on the fly. When naming the commit, it is advised to still label it according to the commit guidelines below, by starting the commit message with **docs** and referencing the filename. Since this is not obvious and some changes are made on the fly, this is not strictly necessary and we will understand if this isn't done the first few times.

All our documentation are located in `files/docs/` directory and `CONTRIBUTING.md` file.

To build the `README.md` please run the following command:

```
grunt build
```

## <a name="submit"></a> Submission Guidelines

### Submitting an Issue
Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features, by not reporting duplicate issues.  Providing the following information will increase the
chances of your issue being dealt with quickly:

* **Overview of the Issue** - if an error is being thrown a non-minified stack trace helps
* **Motivation for or Use Case** - explain why this is a bug for you
* **Polyfiller Version(s)** - is it a regression?
* **Browsers and Operating System** - is this a problem with all browsers or only IE8?
* **Reproduce the Error** - provide a live example (using [Plunker][plunker] or
  [JSFiddle][jsfiddle]) or a unambiguous set of steps.
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

Here is a great example of a well defined issue: https://github.com/Polyfiller/Polyfiller.js/issues/5069

**If you get help, help others!**

### Submitting a Pull Request
Before you submit your pull request consider the following guidelines:

* Search [GitHub][pulls] for an open or closed Pull Request
  that relates to your submission. You don't want to duplicate effort.
* Please sign our [Contributor License Agreement (CLA)](#cla) before sending pull
  requests. We cannot accept code without this.
* Make your changes in a new git branch:

```shell
git checkout -b your-fix-branch master
```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full Polyfiller test suite and ensure that all tests pass.

```shell
grunt test
```

* Commit your changes
```shell
git commit -a
```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

```shell
git push origin your-fix-branch
```

* In GitHub, send a pull request to `polyfiller:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the Polyfiller test suite to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push origin your-fix-branch -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

```shell
git push origin --delete my-fix-branch
```

* Check out the master branch:

```shell
git checkout master -f
```

* Delete the local branch:

```shell
git branch -D your-fix-branch
```

* Update your master with the latest upstream version:

```shell
git pull --ff upstream master
```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more [specs][unit-testing].
* All public API methods **must be documented** with [JSDoc][jsdoc]. 
* With the exceptions listed below, we follow the rules contained in
  [Google's JavaScript Style Guide][js-style-guide]:
    * **Do not use namespaces**: Instead,  wrap the entire Polyfiller code base in an anonymous closure and
      export our API explicitly rather than implicitly.
    * Wrap all code at **100 characters**.
    * Instead of complex inheritance hierarchies, we **prefer simple objects or classes**. We use prototypal
      inheritance only when absolutely necessary.
    * We **love functions and closures** and, whenever possible, prefer them over objects.
    * To write concise code that can be better minified, we **use aliases internally** that map to the
      external API. See our existing code to see what we mean.

## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on github as well as in various git tools.

## <a name="license"></a> License
Our code is licensed under a liberal [MIT][mit] license.

## <a name="cla"></a> Signing the CLA

Please sign our Contributor License Agreement (CLA) before sending pull requests. For any code
changes to be accepted, the CLA must be signed. It's a quick process, we promise!

* For individuals we have a [simple click-through form][cla-individual].
* For corporations we'll need you to
  [print, sign and one of scan+email, fax or mail the form][cla-corporate].

## <a name="info"></a> Further Information
You can find out more detailed information about contributing in the
[Polyfiller repository][github].


### Credits

Based on AngularJS contributing guide

[mit]: https://github.com/Polyfiller/polyfiller/blob/master/LICENSE.txt
[coc]: https://github.com/Polyfiller/polyfiller/blob/master/files/docs/coc.md
[cla-corporate]: https://github.com/Polyfiller/polyfiller/blob/master/files/docs/cla.md#cla-corporate
[cla-individual]: https://github.com/Polyfiller/polyfiller/blob/master/files/docs/cla.md#cla-individual
[github]: https://github.com/Polyfiller/Polyfiller.js
[issue]: https://github.com/Polyfiller/polyfiller/issues
[catalog-issue]: https://github.com/Polyfiller/polyfiller-catalog/issues
[catalog]: https://github.com/Polyfiller/polyfiller-catalog/tree/master/files
[pulls]: https://github.com/Polyfiller/polyfiller/pulls
[jsdoc]: http://usejsdoc.org
[milestone]: https://github.com/Polyfiller/polyfiller/issues?milestone=24&q=is%3Aopen
[js-style-guide]: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
[jsfiddle]: http://jsfiddle.net/
[plunker]: http://plnkr.co/edit

