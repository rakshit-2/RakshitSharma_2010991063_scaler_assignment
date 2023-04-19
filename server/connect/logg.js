const chalk = require('chalk')

// chalk for the detailing of the console(highlight errors,etc)
exports.Logg = {
    error: (message) => {
        console.log(chalk.red(message));
    },
    warning: (message) => {
        console.log(chalk.yellow(message));
    },
    info: (message) => {
        console.log(chalk.blue(message));
    },
    success: (message) => {
        console.log(chalk.green(message));
    }
};
