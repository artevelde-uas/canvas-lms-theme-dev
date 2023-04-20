const path = require('path');
const runCLI = require('webpack-cli/lib/bootstrap');
const chalk = require('chalk');
const boxen = require('boxen');
const { log } = require('./util');


const productionConfigPath = path.join(__dirname, '/../config/webpack.prod.js');

const args = [
    ...process.argv,
    '--progress',
    `--config=${productionConfigPath}`
];

log(boxen(chalk`{green Compiling 'src/index.js' into 'dist/main.js' and 'dist/main.css'.\nPlease upload these files to your Canvas instance.}`, {
    padding: 1,
    borderStyle: 'round',
    borderColor: 'green'
}), '\n');

runCLI(args);
