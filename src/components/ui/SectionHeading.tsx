import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
}

const SectionHeading = ({ id, children }: SectionHeadingProps) => {
  return (
    <h2 id={id} className="mb-10 text-head sm:mb-16">
      {children}
    </h2>
  );
};

export default SectionHeading;
