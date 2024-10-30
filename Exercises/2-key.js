'use strict';

const generateKey = (length, possible) => {
  let keys = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possible.length);
    keys += possible[randomIndex];
  }
  return keys;
};

module.exports = { generateKey };
