const collator = new Intl.Collator("en", {
  sensitivity: "base",
  numeric: true,
});

// Technology and skill lists read A to Z, whatever their order in the data.
export const alphabetical = (items: readonly string[]) =>
  [...items].sort(collator.compare);
