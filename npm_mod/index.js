const chalk=require("chalk");
const validator=require("validator");

const res=validator.isEmail("aryanmeens3201@gmail.com");
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));
// console.log(chalk.green.underline.inverse("Hello World "));
// console.log(chalk.red.underline("Hello World "));
// console.log(chalk.blue('Hello') + chalk.yellow(' World' )+ chalk.red('!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// console.log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with""" a blue""" substring') +
// 	' that becomes green again!'
// ));