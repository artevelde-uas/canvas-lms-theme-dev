# Canvas LMS Theme DEV Tool

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-theme-dev.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-theme-dev)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-theme-dev.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-theme-dev.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-theme-dev)
[![](https://img.shields.io/librariesio/github/artevelde-uas/canvas-lms-theme-dev.svg)](https://libraries.io/npm/@artevelde-uas%2Fcanvas-lms-theme-dev)

## Development tool for building custom JS & CSS for Canvas LMS theme customizations

This package provides the following functionality to make it easier to rapidly develop plug-ins:

* **Default build script:** Provides a default zero config build script to compile your code.
* **Webpack config:** Base Webpack configuration files that work out of the box (and can be extended).
* **Webpack CLI:** Exposes the main Webpack CLI command.
* **DEV Server:** A server that can serve your code from your localhost so you don't have to re-upload it to Canvas every time it changes during development.

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-theme-dev

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-theme-dev

## Usage

### Default build script

This Canvas LMS DEV tool provides a default build script to compile your code with zero configuration needed. Just add the plug-ins you need to the `./src/index.js` file (see below) and run the command:

    npm run canvas-build

Or `Yarn`:

    yarn canvas-build

This will compile your code into a Javascript and CSS file in the `dist/` folder

### Webpack configuration

The DEV tool also provides default Webpack config files for *development* and *production*. You can import and override them like so:

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
    "scripts": {
        "build": "webpack --config=./config/webpack.prod.js",
        "build:dev": "webpack --config=./config/webpack.dev.js"
    }
}
```

**NOTE:** The Webpack script that comes with the DEV tool is re-exposed so you can use it in your `sripts` section.

**NOTE:** The Instructure UI package (which is included) requires Webpack v4 (!) to work properly.

### Server configuration

The DEV tool provides a server script that serves your code from `localhost` on port `5000`. You can change the default settings like this:

```json
{
    "config": {
        "server": {
            "port": 5001,
            "file": "desktop.dev.js"
        }
    }
}
```

You can then use the script like this:

```json
{
    "scripts": {
        "dev": "canvas-server-start"
    }
}
```

## Adding plug-ins to your project

Install the Canvas LMS App and some plug-ins you want using `NPM`:

    npm install @artevelde-uas/canvas-lms-app @some-org/plugin @some/plugin-with-options

Or `Yarn`:

    yarn add @artevelde-uas/canvas-lms-app @some-org/plugin @some/plugin-with-options

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
