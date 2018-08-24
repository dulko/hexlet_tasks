// массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей
// BEGIN (write your solution here)
export default (m1, m2) => {
  const newM = m1.reduce((acc, value) => m2.includes(value) ? acc.concat(value) : acc, []);
  return newM.reduce((acc, value) => acc.includes(value) ? acc : acc.concat(value), []);
}
// END
