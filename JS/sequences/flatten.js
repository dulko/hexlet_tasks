// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const flatten = (elements) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }
    const current = head(list);
    const rest = tail(list);
    if (!isList(current)) {
       return iter(rest, cons(current, acc));
    } else {
      return iter(rest, iter(current, acc));
    };
  };
  
  return reverse(iter(elements, l()));
};

export default flatten;
// END
