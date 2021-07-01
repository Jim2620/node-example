let lodash = require(`lodash`);

const changeNames = (words) => {
  let result = words.toLowerCase();
  result = lodash.upperCase(result);
  return result;
};

let name = "erIk";

name = lodash.upperFirst(name);

console.log(name);

name = lodash.lowerCase(name);

console.log(name);

name = lodash.startCase(name);

console.log(name);
