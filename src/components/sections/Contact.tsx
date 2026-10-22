import {
  CONTACT,
  RESUME_URL,
  SOCIAL_LINKS,
  TOPTAL_URL,
} from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";
import ToptalBadge from "../ui/ToptalBadge";

const [user, domain] = CONTACT.email.split("@");

const linkClass =
  "inline-flex min-h-11 items-center underline-offset-[0.18em] hover:underline";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="@container px-page py-chapter"
    >
      <SectionHeading id="contact-heading">Get in touch</SectionHeading>
      {/* The address fills the page width: on one line from 1280px (it
          measures 1116.7px at 100px), otherwise broken after the @ (the first
          part measures 705.6px at 100px). */}
      <a
        href={`mailto:${CONTACT.email}`}
        className="block text-[min(8.75rem,14cqw)] leading-[0.95] font-medium tracking-tighter [transition:color_var(--t-hover)_ease] hover:text-accent xl:text-[min(8.75rem,8.9cqw)]"
      >
        <span className="block xl:inline">{user}@</span>
        <span className="block xl:inline">{domain}</span>
      </a>
      <div className="mt-16 grid items-start gap-x-gutter gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <ul className="flex flex-wrap gap-x-6">
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
        </ul>
        <div>
          <p className="py-2.5">{CONTACT.location}</p>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center underline"
          >
            View CV
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </div>
        {/* Toptal's own badge artwork, in the variant that suits the theme. */}
        <div className="lg:justify-self-end">
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
