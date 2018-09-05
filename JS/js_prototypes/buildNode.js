//Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа. 
//Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.

import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};
// END
