import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionHeading = ({
  id,
  children,
  className = "",
}: SectionHeadingProps) => {
  return (
    <h2 id={id} className={`mb-10 text-head sm:mb-16 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
