#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log = console.log

program
    .version('1.0.0')
    .description('A simple password generator')
    .option('-l, --length <number>', 'length of password', '12')
    .option('-s, --save', 'save password to password.txt')
    .option('-n, --no-numbers', 'remove numbers')
    .option('-s, --no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

//Get generated pw
const generatedPassword = createPassword(length, numbers, symbols)

//Save
if (save) {
    savePassword(generatedPassword)
}

//Copy to clipboard
clipboardy.writeSync(generatedPassword)

//Output generated password
log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))