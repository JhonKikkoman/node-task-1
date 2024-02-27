#!/usr/bin/env node
/** @format */
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;
const now = new Date();
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

if (argv.year || argv.y) {
  console.log(now);
}
if (argv.month || argv.m) {
  console.log(month[now.getMonth()]);
}
if (argv.date || argv.d) {
  console.log(now.getDate());
}
