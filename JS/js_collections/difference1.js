// массив, составленный из элементов первого, которых нет во втором.
// BEGIN (write your solution here)
export default (m1, m2) => {
  return m1.reduce((acc, value) => m2.includes(value) ? acc : acc.concat(value), []);
}
// END
