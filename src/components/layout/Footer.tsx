const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-neutral-400">
      © {CURRENT_YEAR} Thulanjana Pramod
    </footer>
  );
};

export default Footer;
