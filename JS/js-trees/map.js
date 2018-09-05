// BEGIN (write your solution here)
const map = (f, tree) => {
  const updatedTree = f(tree);

  return tree.type === 'directory'
    ? { ...updatedTree, children: tree.children.map(t => map(f, t)) } : updatedTree;
};

export default map;
// END
