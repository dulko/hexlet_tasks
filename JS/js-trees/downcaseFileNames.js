// BEGIN (write your solution here)
const downcaseFileNames = (tree) => {
  if (tree.type === 'file') {
    return {...tree, name: tree.name.toLowerCase()};
  }
  return {...tree, children: tree.children.map(downcaseFileNames)};
};

export default downcaseFileNames;
// END
