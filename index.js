'use strict';

module.exports = (length = 80, character = '-') => {
  const line = Array(length).join(character[0]);

  return {
    line,
    log: () => {
      console.log(line);
    },
    fence: (text) => {
      console.log(line);
      console.log(text);
      console.log(line);
    }
  };
};
