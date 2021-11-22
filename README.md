# Canvas LMS Theme Dev Tool

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-theme-dev.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-theme-dev)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-theme-dev.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-theme-dev.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-theme-dev)
[![](https://img.shields.io/librariesio/github/artevelde-uas/canvas-lms-theme-dev.svg)](https://libraries.io/npm/@artevelde-uas%2Fcanvas-lms-theme-dev)

## Development tool for building custom JS & CSS for Canvas LMS theme customizations

This package provides base Webpack configuration files that work out of the box (or can be extended).

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-theme-dev

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-theme-dev

## Usage

The Canvas LMS Theme tool provides default Webpack config files for *development* and *production*. You can import and override them like so:

```javascript
// config/webpack.dev.js
const developmentConfig = require('@artevelde-uas/canvas-lms-theme-dev/webpack/development-config');

module.exports = {
    ...developmentConfig,
    output: {
        filename: '[name].dev.js'
    }
};
```

You can then add these scripts to your `package.json` file:

```json
{
    // ...
    "scripts": {
        "build": "webpack --config=./config/webpack.prod.js",
        "build:dev": "webpack --config=./config/webpack.dev.js"
    }
}
```

**NOTE:** Instructure UI (which is included) requires Webpack v4 (!) to work properly.

## Adding plug-ins to your project

Install the Canvas LMS App and some plug-ins you want using `NPM`:

    npm install @artevelde-uas/canvas-lms-app @some-org/plugin @some/plugin-with-options

Or Yarn:

    Yarn add @artevelde-uas/canvas-lms-app @some-org/plugin @some/plugin-with-options

Just import your plug-ins and add them to the app. Some plug-ins accept an additional options object.

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-theme-dev';

import somePlugin from '@some-org/plugin';
import somePluginWithOptions from '@some/plugin-with-options';
import myPlugin from './plugins/my-plugin';

addPlugin(somePlugin);
addPlugin(somePluginWithOptions, {
    option1: 'foo',
    option2: true
});
addPlugin(myPlugin);

run();
```
