import { BADGES, CERTIFICATIONS } from "../../data/certifications";
import { TOPTAL_URL } from "../../data/profile";
import { stagger } from "../../utils/stagger";
import { groupBy } from "../ui/lineup";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";
import ToptalBadge from "../ui/ToptalBadge";

const GROUPS = groupBy(CERTIFICATIONS, ({ issuer }) => issuer);

const Certifications = () => {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className={SECTION_FRAME}
    >
      <SectionHeading id="certifications-heading">
        Certifications
      </SectionHeading>
      <div className="grid gap-x-gutter gap-y-14 lg:grid-cols-2 xl:grid-cols-4">
        {GROUPS.map(({ label: issuer, items }) => (
          <div key={issuer}>
            <h3 data-reveal className="mb-4 text-lead text-muted">
              {issuer}
            </h3>
            <ul className="grid gap-x-gutter gap-y-6 sm:grid-cols-2 lg:grid-cols-1">
              {items.map(
                ({ title, issued, url, credentialId, skills }, index) => (
                  <li key={title} data-reveal style={stagger(index + 1)}>
                    <p className="font-medium">{title}</p>
                    <p className="text-small text-muted">
                      {skills.join(", ")}
                      {credentialId && `. Credential ID ${credentialId}`}
                    </p>
                    <p className="mt-1 flex flex-wrap items-baseline gap-x-4 text-small">
                      <span className="text-muted tabular-nums">
                        Issued {issued}
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center underline hover:decoration-[0.11em]"
                      >
                        Show credential
                        <span className="sr-only">
                          : {title} (opens in a new tab)
                        </span>
                      </a>
                    </p>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
      {/* Badges in their issuers' own artwork, Toptal's in the variant that
          suits the theme. Zoom scales Toptal's fixed-size drawing and its box
          together, so two badges share a row on phones. */}
      <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-gutter gap-y-10 *:[zoom:0.65] sm:*:[zoom:0.8]">
        <li data-reveal>
          <div className="light:hidden">
            <ToptalBadge href={TOPTAL_URL} theme="dark" />
          </div>
          <div className="hidden light:block">
            <ToptalBadge href={TOPTAL_URL} theme="light" />
          </div>
        </li>
        {BADGES.map(({ title, url, image }, index) => (
          <li key={url} data-reveal style={stagger(index + 1)}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={image}
                alt={`${title} badge`}
                width={507}
                height={507}
                loading="lazy"
                decoding="async"
                className="size-60"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
