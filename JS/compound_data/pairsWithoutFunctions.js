// BEGIN (write your solution here)
export const cons = (a, b) => 2**a * 3**b;

export const car = (pair) => {
  let n1 = 0;
  while (pair%2 === 0) {
    pair = pair/2;
    n1 = n1+1;
  }
  return n1;
}

export const cdr = (pair) => {
  let n2 = 0;
  while (pair%3 === 0) {
    pair = pair/3;
    n2 = n2+1;
  }
  return n2;
}

// END
