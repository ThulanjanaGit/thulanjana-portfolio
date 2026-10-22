// The frame of the sections that fill the screen: page margins and chapter
// padding, and from 1024px at least the window's height with the content
// centred. A section with more content keeps its own height. Education and
// Contact use the plain padding, because their short content would float in
// empty space.
export const SECTION_FRAME =
  "px-page py-chapter lg:flex lg:min-h-svh lg:flex-col lg:justify-center";
