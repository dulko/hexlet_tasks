import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line

// BEGIN (write your solution here)
const sumOfPairs = (p1, p2) => cons(car(p1)+car(p2), cdr(p1)+cdr(p2));
// END
export default sumOfPairs;
