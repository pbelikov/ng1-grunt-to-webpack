** GRADUAL MIGRATION FROM ES5+angularjs to ES6+angularjs, keeping in mind future Angular. **

// TODO Notes about how to start demo app

> Code snippet and github link goes here (es5+angularjs+iife)

So, we have some application, that can be pretty large. That means, that we cannot just come in and change everything from IIFE to ES6 modules and bundle them with something like Webpack. What we have to do, is to implement the following strategy:

1. Update the build so it transforms our new shiny modules to IIFE (yeah, we don't have any now, but we need it for the future). It will be browserify with babelify.

> Code snippet goes here (Gruntfile.js)

2. Once its there - lets give it a try, i.e. change one of the files to become ES6 module and see, that the app still works.

> Code snippet goes here

3. At this point, app should still work, but ... once you try running any of your jasmine test, you'll most likely get a famous "module is not a function" TypeError. It happens, because browserify overrides "module" declaration from "angular.mock.module" to its own "module" object for exports and etc. (fancy JS stuff with types, waagh!). What should be done is a pretty dumb update of all "module" in your test to "angular.mock.module", like below:

`- beforeEach(module('demoApp.utils'))`
`+ beforeEach(angular.mock.module('demoApp.utils'))`

3. We still have concatenation as a bundling method, but we are stuck with it because single-effort transition is too error-prone and we still have issues to implement, business will not wait :)

> Code snippet goes here

4. Long-running step is here: go from one file to another and transform it to ES6 modules.
5. ...
6. ...
7. ...
8. Now, after long-long struggle, we finally have all our app-files as ES6 modules and can build the bundle in modern manner.

> Code snippet goes here

9. Install Webpack.
10. As soon as we still have Grunt at this point - install grunt-webpack to run bundling as just another task.
12. Configure Webpack to create bundle. In order to avoid caching issues - add version number to bundle name. There are multiple ways to do it - with either hash, or version from package.json (we'll stick to this one). The latter is more readable, but requires special bump logic.

> Code snippet goes here

Now we have an application up-and-running, but ... there are tons of unit-tests to update, because we want a consistent code-base, aren't we? This step is pretty boring, but straightforward - just change the unit-tests to use imports and all this ES6 stuff we have.

// TODO find a better way of doing it
> Code snippet goes here

However, you can just avoid the above part, because our ultimate goal is not just have an AngularJs 1.x application re-imagined, but to have a shiny new Angular application, that will be actual for years to come.

// TODO TODO TODO write about ng1->ng2 migration here.
