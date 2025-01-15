import logo from "../assets/ThulanjanaLogo.png";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-[4rem] rounded-[0.5rem]" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        {[
          { href: SOCIAL.linkedIn, icon: <FaLinkedin /> },
          { href: SOCIAL.github, icon: <FaGithub /> },
          { href: SOCIAL.xTwitter, icon: <FaSquareXTwitter /> },
          { href: SOCIAL.instagram, icon: <FaInstagram /> },
          { href: SOCIAL.whatsapp, icon: <FaWhatsapp /> },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
