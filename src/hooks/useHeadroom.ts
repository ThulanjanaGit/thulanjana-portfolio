import { useEffect, useState, type RefObject } from "react";

// Scroll that still counts as the top of the page, scroll movement ignored as
// jitter, and the strip along the window's top edge that calls the header back.
const AT_TOP = 8;
const JITTER = 6;
const EDGE = 24;

interface Headroom {
  atTop: boolean;
  hidden: boolean;
}

// The header hides while the page scrolls down and comes back when it scrolls
// up or the mouse reaches the top edge; keyboard focus brings it back in CSS.
// After a click on an in-page link it stays hidden until that scroll ends, so
// it does not cover the section you jumped to. Server-rendered HTML shows it
// at the top, which is where every visit starts.
export const useHeadroom = (header: RefObject<HTMLElement | null>) => {
  const [state, setState] = useState<Headroom>({ atTop: true, hidden: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let current: Headroom = { atTop: true, hidden: false };
    let byPointer = false;
    let jumping = false;
    let jumpTimer = 0;
    let frame = 0;

    const apply = (next: Headroom) => {
      if (next.atTop === current.atTop && next.hidden === current.hidden) {
        return;
      }
      current = next;
      setState(next);
    };

    // Taking the position here keeps the jump's last scroll frame from
    // reading as a scroll up.
    const endJump = () => {
      if (!jumping) return;
      jumping = false;
      lastY = window.scrollY;
    };

    const onScroll = () => {
      // A long jump outlasts the click's timer, so it ends once scrolling
      // stops (or at scrollend).
      if (jumping) {
        clearTimeout(jumpTimer);
        jumpTimer = window.setTimeout(endJump, 200);
      }
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y <= AT_TOP) {
          lastY = y;
          byPointer = false;
          apply({ atTop: true, hidden: false });
          return;
        }
        const delta = y - lastY;
        if (Math.abs(delta) < JITTER) return;
        lastY = y;
        byPointer = false;
        apply({ atTop: false, hidden: jumping || delta > 0 });
      });
    };

    // Shown by the mouse, it stays while the mouse is over it and hides again
    // once the mouse moves below it.
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || current.atTop) return;
      if (current.hidden && event.clientY <= EDGE) {
        byPointer = true;
        apply({ atTop: false, hidden: false });
      } else if (
        byPointer &&
        event.clientY > (header.current?.offsetHeight ?? 0)
      ) {
        byPointer = false;
        apply({ atTop: false, hidden: true });
      }
    };

    const onClick = (event: MouseEvent) => {
      if (
        !(event.target instanceof Element) ||
        !event.target.closest('a[href^="#"]')
      ) {
        return;
      }
      jumping = true;
      byPointer = false;
      if (!current.atTop) apply({ atTop: false, hidden: true });
      // Ends the jump if the link leads nowhere new and nothing scrolls.
      clearTimeout(jumpTimer);
      jumpTimer = window.setTimeout(endJump, 1000);
    };

    // A reload can open the page part-way down.
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (window.scrollY > AT_TOP) apply({ atTop: false, hidden: true });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", endJump);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", endJump);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      clearTimeout(jumpTimer);
    };
  }, [header]);

  return state;
};
