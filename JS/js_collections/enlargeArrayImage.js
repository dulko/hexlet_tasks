import _ from 'lodash';

// BEGIN (write your solution here)
const enlargeArrayImage = (massive) => {
  const iter = (m, newM) => {
    const [n, ...rest] = m;   
    if (n == undefined) {
      return newM;
    };
    const dupl = n.reduce((acc, value) => acc.concat(value).concat(value), []);
    newM.push(dupl);
    newM.push(dupl); 
    return iter(rest, newM);
  };
  return iter(massive, []);
};

export default enlargeArrayImage;
// END
