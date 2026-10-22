import type { ReactNode } from "react";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
}

// The primary button from DESIGN.md, as a link: one per screen.
const ActionLink = ({ href, children }: ActionLinkProps) => {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 shrink-0 items-center justify-center bg-accent px-5 font-medium text-accent-ink [transition:background-color_var(--t-hover)_ease,transform_var(--t-press)_var(--ease-out)] hover:bg-accent-strong active:scale-[0.97] active:bg-accent-strong"
    >
      {children}
    </a>
  );
};

export default ActionLink;
