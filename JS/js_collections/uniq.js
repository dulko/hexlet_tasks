// BEGIN (write your solution here)
const uniq = (massive) => {
  return massive.reduce((acc,value) => acc.includes(value) ? acc : acc.concat(value), []);
}

export default uniq;
// END
