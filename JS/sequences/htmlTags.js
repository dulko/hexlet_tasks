// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (name, value) => cons(name, value);
export const name = (node) => car(node);
export const value = (node) => cdr(node);

export const append = (list, node) => consList(node, list);
export const toString = (list) =>  {
  if (isEmpty(list)) {
    return '';
  }
  const element = head(list);
  const tag = name(element);
  return `${toString(tail(list))}<${tag}>${value(element)}</${tag}>`;
};


// END
