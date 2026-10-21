interface TagListProps {
  items: string[];
}

const TagList = ({ items }: TagListProps) => {
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
