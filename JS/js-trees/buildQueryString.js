// BEGIN (write your solution here)
export default ({...param}) => {
  let qstring = '';
  const Objectify = Object.entries(param);
  Objectify.sort().map((value) => qstring = qstring + '&' + value[0] + '=' + value[1]);
  console.log(qstring.substring(1, qstring.length));
  return qstring.substring(1, qstring.length);
}
// END
