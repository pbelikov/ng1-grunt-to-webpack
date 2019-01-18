# Smooth migration from ES5+Grunt+AngularJS to TS+Webpack+Angular

In most cases one-time effort of rewriting the older application with tens of thousands lines of code to all the modern tech stack is really impossible thing.

In this repo, I'll try to provide step-by-step way of migration, with each step residing in its own branch, so differences can be easily outlined.

## Table of contents

Each branch below contains HOWTO.md, that incrementally describes what is going on.

1. (Starting point)[https://github.com/pbelikov/ng1-grunt-to-webpack/tree/feature/ng1_es5_mods_grunt]
    - ES5 modules (IIFEs)
    - Grunt as taskrunner/bundler with simple concatenation (grunt-concat)
    - AngularJs 1.x inside IIFEs
1. (Hybrid ES5 + ES6 modules)[https://github.com/pbelikov/ng1-grunt-to-webpack/tree/feature/ng1_es6_mods_grunt]
    - ES5 modules (IIFEs) for some pieces of app
    - ES6 modules (import/export) for some more pieces
    - AngularJS 1.x elements are exported in ES6 and left as-is in ES5
    - Grunt+Browserify for bundling
1. (ES6 modules)[https://github.com/pbelikov/ng1-grunt-to-webpack/tree/feature/ng1_es6_complete]
    - ES6 modules (import/export) for all elements of app
    - all AngularJS 1.x elements are exported
    - Grunt+Browserify for bundling

## TODO

1. Move to WebPack (grunt-webpack -> outdate Grunt completely)
1. Migrate to TypeScript
1. Update ng1 to ng2