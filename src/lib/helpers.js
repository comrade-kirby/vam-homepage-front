export const buildRelatedWorksList = (node) => {
  const reducer = (acc, curr) => {
    if (curr.children) {
      curr.children.reduce(reducer, acc)
    } else if (!acc.has(curr)) {
      acc.add(curr)
    }

    return acc
  }

  const worksSet = node.ancestors().reduce(reducer, new Set())
  return Array.from(worksSet)
}