export const buildRelatedWorksList = (root, slug) => {
  const node = root.find(d => d.data.slug === slug)
  
  const reducer = (acc, curr) => {
    console.log(acc.size)
    if (acc.size >= 9) return acc
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

export const sanitizeString = string => encodeURIComponent(string.toLowerCase().replace(/\s+/g, '_')) 