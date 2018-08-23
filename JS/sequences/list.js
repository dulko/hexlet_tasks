import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (list, n) => {
  if (isEmpty(list)) {
    return false;
  } 
  if (head(list) === n) {
    return true;
  } else {
    return has(tail(list), n);
  }
}

export const reverse = (list) => {
  const iter = (oldlist, newlist) => {
    if (isEmpty(oldlist)) {
      return newlist;
    }
    return iter(tail(oldlist), cons(head(oldlist), newlist));
  }
  return iter(list, l());
}

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};
// END
