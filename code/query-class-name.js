/**
 * query class name
 **/

function queryClassName(node, name) {
  let walkTheDOM = function(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
    }
  }
  let starts = '(^|[ \n\r\t\f])',
    ends = '([ \n\r\t\f]|$)';
  let regex = new RegExp(starts + name + ends),
    results = [];

  walkTheDOM(node, function (currentNode) {
    if (regex.test(currentNode.className)) {
      results.push(currentNode);
    }
  });

  return results;
}