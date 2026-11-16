import Link from "next/link";

export const ContactClose = ({ dict, lang }: { dict: any; lang: string }) => {
  const c = dict.home.contact;
  return (
    <section className="close" id="contact">
      <div>
        <p className="close__sentence reveal">{c.sentence}</p>
        <div className="close__actions reveal" style={{ ["--d" as any]: 1 }}>
          <Link href={`/${lang}/hire-talent`} className="btn">
            {c.hire} <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link href={`/${lang}/apply`} className="btn btn--paper">
            {c.apply}
          </Link>
        </div>
      </div>
      <span />
      <a href="mailto:hello@mdivan.com" className="close__mail reveal">
        hello<span className="at">@mdivan.com</span>
      </a>
      <div className="close__foot">
        <span>
          <a href="tel:+34694209020" className="num">
            +34 694 209 020
          </a>{" "}
          · {c.city}
        </span>
        <span className="flex gap-6">
          <a href="https://www.linkedin.com/company/mdivan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/mdivan" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </span>
      </div>
    </section>
  );
};
