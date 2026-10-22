// The line-up's row grid, shared by Experience and Education so their columns
// line up. Title, place and dates fit on one line only from 1280px (measured
// at lead size); below that each row takes two lines. The dates column is a
// fixed 9em, not auto, so the second column starts at the same place on every
// row; the last column holds the + / − indicator.
export const LINEUP_GRID =
  "grid grid-cols-[1fr_1.5rem] gap-x-gutter xl:grid-cols-[1fr_1fr_9em_1.5rem]";

// Items grouped by a label (a country, an issuer), in the order each label
// first appears.
export const groupBy = <T>(items: T[], labelOf: (item: T) => string) =>
  items.reduce<{ label: string; items: T[] }[]>((groups, item) => {
    const label = labelOf(item);
    const group = groups.find((existing) => existing.label === label);
    if (group) group.items.push(item);
    else groups.push({ label, items: [item] });
    return groups;
  }, []);
