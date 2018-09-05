// BEGIN (write your solution here)
export default (massive) => {
  return massive.reduce((acc, pair) => {
    const [key, value] = pair;
    return acc = {...acc, [key]: value };
  }, {} );
}
// END
