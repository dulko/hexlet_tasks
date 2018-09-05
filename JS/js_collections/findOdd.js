// BEGIN (write your solution here)
const findOdd = (n) => {
  const [base, ...rest] = n;
  console.log(base, '!!!!!!!base');
  console.log(rest, '!!!!!!!n');
  const newN = rest.reduce((acc, value) => value === base ? acc : acc.concat(value), []);
  if ((n.length - newN.length) % 2 !== 0) {
    return base;
  }
  return findOdd(newN);
};

export default findOdd;
// END
