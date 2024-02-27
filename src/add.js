#!/usr/bin/env node
/** @format */
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
const now = new Date();

if (argv.date || argv.d) {
  now.setDate(now.getDate() + (argv.d ? argv.d : argv.date));
  console.log(now);
}

if (argv.month || argv.m) {
  now.setMonth(now.getMonth() + (argv.m ? argv.m : argv.month));
  console.log(now);
}
console.log(argv);
