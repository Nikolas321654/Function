'use strict';

const methods = (iface) => {
  const entr = Object.entries(iface);
  const functionEntries = entr
    .filter(([, v]) => typeof v === 'function');
  const res = functionEntries.map(([k, fn]) => [k, fn.length]);
  return res;
};

module.exports = { methods };
