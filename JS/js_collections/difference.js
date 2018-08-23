// BEGIN (write your solution here)
export default (set1, set2) => {
  return new Set(Array.from(set1).filter(element => !set2.has(element)));
}
// END
