// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, concat, filter, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list)) {
    return list;
  }
  const base = head(list);
  const smaller = filter((element) => element < base, tail(list));
  const bigger = filter((element) => element >= base, tail(list));
  return concat(sort(smaller), cons(base, sort(bigger)));
};

export default sort;
// END
