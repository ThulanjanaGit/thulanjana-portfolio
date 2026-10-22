import { CERTIFICATIONS } from "../../data/certifications";
import { stagger } from "../../utils/stagger";
import { groupBy } from "../ui/lineup";
import SectionHeading from "../ui/SectionHeading";

const GROUPS = groupBy(CERTIFICATIONS, ({ issuer }) => issuer);

const Certifications = () => {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="px-page py-chapter"
    >
      <SectionHeading id="certifications-heading">
        Certifications
      </SectionHeading>
      <div className="grid gap-x-gutter gap-y-14 lg:grid-cols-3">
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
                        className="inline-flex min-h-11 items-center underline"
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
    </section>
  );
};

export default Certifications;
