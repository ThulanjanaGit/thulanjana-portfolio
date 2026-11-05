import { CONTACT, RESUME_URL, SOCIAL_LINKS } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-page py-chapter text-center sm:text-left"
    >
      <SectionHeading id="contact-heading">Get in touch</SectionHeading>
      {/* Email and profiles share a row from 1024px, so the small email does
          not leave the middle of the section empty. */}
      <div className="grid items-start gap-x-gutter gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <a
            href={`mailto:${CONTACT.email}`}
            translate="no"
            className="inline-flex min-h-11 items-center text-lead break-all underline hover:decoration-[0.11em]"
          >
            {CONTACT.email}
          </a>
          <p className="text-muted">{CONTACT.location}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 sm:justify-start lg:col-span-3 lg:col-start-7 lg:flex-col">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              View CV
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
