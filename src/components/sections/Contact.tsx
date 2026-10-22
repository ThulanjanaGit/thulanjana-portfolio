import {
  CONTACT,
  RESUME_URL,
  SOCIAL_LINKS,
  TOPTAL_URL,
} from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import ToptalBadge from "../ui/ToptalBadge";

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-page py-chapter"
    >
      <SectionHeading id="contact-heading">Get in touch</SectionHeading>
      {/* Email, profiles and badge run across the row from 1024px, so the
          small email does not leave the middle of the section empty. */}
      <div className="grid items-start gap-x-gutter gap-y-12 sm:grid-cols-[1fr_auto] lg:grid-cols-12">
        <div className="grid gap-y-6 lg:contents">
          <div className="lg:col-span-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex min-h-11 items-center text-lead break-all underline"
            >
              {CONTACT.email}
            </a>
            <p className="text-muted">{CONTACT.location}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 lg:col-span-3 lg:col-start-7 lg:flex-col">
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
        {/* Toptal's own badge artwork, in the variant that suits the theme. */}
        <div className="lg:col-span-3 lg:col-start-10 lg:justify-self-end">
          <div className="light:hidden">
            <ToptalBadge href={TOPTAL_URL} theme="dark" />
          </div>
          <div className="hidden light:block">
            <ToptalBadge href={TOPTAL_URL} theme="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
