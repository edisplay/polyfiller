/*!
 * tasks/jshint
 *
 * @see http://jslinterrors.com/
 * @see http://www.jshint.com/docs/options/
 */

'use strict';

module.exports = function (grunt, options) {
    return {
        development: {
            options: {
                // This option suppresses warnings about missing semicolons.
                asi: false,

                // This option suppresses warnings about the debugger statements in your code.
                debug: false,

                // This option suppresses warnings about == null comparisons.
                eqnull: true,

                // This option tells JSHint that your code uses ECMAScript 6 specific syntax.
                esnext: true,

                // This option suppresses warnings about the use of expressions
                // where normally you would expect to see assignments or function calls.
                expr: true,

                // This option defines globals exposed by modern browsers:
                // all the way from good old document and navigator
                // to the HTML5 FileReader and other new developments in the browser world.
                browser: true,

                // This option suppresses warnings about
                // the use of assignments in cases where comparisons are expected
                // like if (a = 10) {}
                boss: true,

                // This options prohibits the use of == and != in favor of === and !==
                eqeqeq: true,

                // This option tells JSHint that your code needs to adhere
                // to ECMAScript 3 specification.
                es3: false,

                // This option suppresses warnings about the use of global strict mode.
                globalstrict: false,

                // This option suppresses warnings about the __iterator__ property.
                iterator: true,

                // This option suppresses most of the warnings about possibly
                // unsafe line breakings in your code.
                laxbreak: false,

                // This option suppresses warnings about comma-first coding style:
                laxcomma: false,

                // This option suppresses warnings about functions inside of loops
                loopfunc: false,

                // This options allows you to set the maximum amount of warnings
                // JSHint will produce before giving up
                maxerr: 50,

                // This options tells JSHint that your code uses Mozilla JavaScript extensions.
                moz: true,

                // This options prohibits overwriting prototypes of native objects
                // such as Array, Date and so on.
                freeze: true,

                // This option suppresses warnings about the use of eval.
                evil: false,

                // This option defines globals available when your code
                // is running inside of the Node runtime environment.
                node: true,

                // This option prohibits the use of arguments.caller and arguments.callee.
                noarg: true,

                // This option requires you to capitalize names of constructor functions.
                newcap: false,

                // This option suppresses warnings about invalid typeof operator values.
                notypeof: false,

                // This option defines globals that are usually used
                // for logging poor-man's debugging: console, alert, etc. I
                devel: true,

                // This option requires all functions to run in ECMAScript 5's strict mode.
                strict: true,

                // This option suppresses warnings about using [] notation
                // when it can be expressed in dot notation: person['name'] vs. person.name.
                sub: true,

                // This option prohibits the use of explicitly undeclared variables.
                undef: true,

                // This option prohibits the use of immediate function invocations
                // without wrapping them in parentheses.
                immed: false,

                // This option requires all for in loops to filter object's items.
                forin: true,

                // This option warns when you have an empty block in your code.
                noempty: true,

                // This option warns about "non-breaking whitespace" characters.
                nonbsp: true,

                // This option prohibits the use of constructor functions for side-effects.
                nonew: true,

                // This option suppresses warnings about generator functions with
                // no yield statement in them.
                noyield: false,

                // This option prohibits the use of unary increment and decrement operators.
                plusplus: false,

                // This option enforces the consistency of quotation marks
                // used throughout your code. It accepts three values: true if you don't want
                // to enforce one particular style but want some consistency,
                // "single" if you want to allow only single quotes and "double"
                // if you want to allow only double quotes.
                quotmark: false,

                // This option lets you set the max number of formal parameters allowed per function.
                maxparams: 5,

                // This option lets you control how nested do you want your blocks to be.
                maxdepth: 10,

                // This option lets you set the max number of statements allowed per function.
                maxstatements: 10,

                // This option lets you control cyclomatic complexity throughout your code.
                maxcomplexity: true,

                // This option lets you set the maximum length of a line.
                maxlen: true,

                // This option warns when you define and never use your variables.
                unused: true,

                // This option prohibits the use of a variable before it was defined.
                latedef: true,

                // This option suppresses warnings about declaring variables
                // inside of control structures while accessing them later from the outside.
                funcscope: true,

                // This option requires you to always put curly braces around blocks
                // in loops and conditionals.
                curly: false,

                // This option prohibits the use of bitwise operators
                // such as ^ (XOR), | (OR) and others.
                bitwise: false,

                // This option allows to force all variable names to use
                // either camelCase style or UPPER_CASE with underscores.
                camelcase: false,

                // This option suppresses warnings about variable shadowing
                // i.e. declaring a variable that had been already declared
                // somewhere in the outer scope.
                shadow: true,

                // his option suppresses warnings about "weird" constructions
                // like new function () { ... } and new Object;
                supernew: true,

                // This option suppresses warnings about multi-line strings.
                multistr: true,

                // This option suppresses warnings about the __proto__ property.
                proto: false,

                // This option suppresses warnings about the use of script-targeted
                // URLs—such as javascript:....
                scripturl: false,

                // This option suppresses warnings about possible strict violations
                // when the code is running in strict mode and you use this
                // in a non-constructor function.
                validthis: false,

                smarttabs: true,

                trailing: true,

                // This option defines non-standard but widely adopted globals
                // such as escape and unescape.
                nonstandard: false,

                // This option sets a specific tab width for your code.
                indent: 4,

                predef : [
                    'console',
                    'test',
                    'equal',
                    'expect',
                    'module',
                    'start',
                    'stop',
                    'ok'
                ],

                // The Function constructor is a form of eval
                '-W054': true,

                // Missing '()' invoking a constructor
                '-W058': true,

                // Do not use 'new' for side effects
                '-W031': true,

                globals: {
                    window    : true,
                    document  : true,
                    __global__: true,
                    __static__: true
                }
            },

            files: {
                src: ['{views,utils}/**/*.js']
            }
        }
    };
};
