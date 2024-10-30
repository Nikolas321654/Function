'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.')
  .map(Number)
  .reduce((sum, num, ind) => sum + (num << (8 * (3 - ind))), 0);

module.exports = { ipToInt };
