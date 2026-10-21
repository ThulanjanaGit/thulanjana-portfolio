import * as m from "motion/react-m";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { CONTACT } from "../../data/profile";
import { fadeIn } from "../../utils/motion";
import SectionHeading from "../ui/SectionHeading";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-neutral-900 pb-20"
    >
      <SectionHeading id="contact-heading">Get In Touch</SectionHeading>
      <address className="flex flex-col items-center gap-4 tracking-tighter not-italic">
        <m.p {...fadeIn("left")} className="flex items-center gap-3">
          <FaLocationDot aria-hidden="true" className="text-neutral-500" />
          {CONTACT.location}
        </m.p>
        <m.p {...fadeIn("right")} className="flex items-center gap-3">
          <FaPhone aria-hidden="true" className="text-neutral-500" />
          <a
            href={`tel:${CONTACT.phone.replaceAll(" ", "")}`}
            className="underline-offset-4 hover:underline"
          >
            {CONTACT.phone}
          </a>
        </m.p>
        <m.p {...fadeIn("left")} className="flex items-center gap-3">
          <FaEnvelope aria-hidden="true" className="text-neutral-500" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="underline-offset-4 hover:underline"
          >
            {CONTACT.email}
          </a>
        </m.p>
      </address>
    </section>
  );
};

export default Contact;
