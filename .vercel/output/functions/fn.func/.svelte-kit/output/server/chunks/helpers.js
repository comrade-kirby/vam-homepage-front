const buildRelatedWorksList = (root, slug) => {
  const node = root.find((d) => d.data.slug === slug);
  const reducer = (acc, curr) => {
    if (curr.children) {
      curr.children.reduce(reducer, acc);
    } else if (!acc.has(curr)) {
      acc.add(curr);
    }
    return acc;
  };
  const worksSet = node.ancestors().reduce(reducer, /* @__PURE__ */ new Set());
  return Array.from(worksSet);
};
const sanitizeString = (string) => encodeURIComponent(string.toLowerCase().replace(/\s+/g, "_"));
export {
  buildRelatedWorksList as b,
  sanitizeString as s
};
