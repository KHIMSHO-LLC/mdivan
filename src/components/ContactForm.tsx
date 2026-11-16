interface ContactFormProps {
  dict: any;
  forcedMode?: "hiring" | "job";
  title?: string;
  subtitle?: string;
}

export const ContactForm = ({ dict, forcedMode, title, subtitle }: ContactFormProps) => {
  const f = dict.contact.form;
  return (
    <section className="form-page" id="contact">
      <div className="form-page__intro">
        <h1 className="reveal">{title || dict.contact.title}</h1>
        <p className="reveal" style={{ ["--d" as any]: 1 }}>
          {subtitle || dict.contact.subtitle}
        </p>
        <div className="form-page__reach reveal" style={{ ["--d" as any]: 2 }}>
          <span>{dict.contact.emailUs}</span>
          <a href="mailto:hello@mdivan.com" className="link">
            hello@mdivan.com
          </a>
          <span className="mt-4">{dict.contact.callUs}</span>
          <a href="tel:+34694209020" className="link num">
            +34 694 209 020
          </a>
        </div>
      </div>

      <form
        action="https://formsubmit.co/hello@mdivan.com"
        method="POST"
        className="reveal"
        style={{ ["--d" as any]: 1 }}
      >
        <input
          type="hidden"
          name="_subject"
          value={`New Submission from MDIVAN Website${forcedMode ? ` (${forcedMode})` : ""}`}
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://mdivan.com" />

        <div className="form-grid">
          <div className="field">
            <label htmlFor="cf-name">{f.name}</label>
            <input id="cf-name" type="text" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="cf-email">{f.email}</label>
            <input id="cf-email" type="email" name="email" required autoComplete="email" />
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="cf-date">{f.date}</label>
            <input id="cf-date" type="text" name="date" />
          </div>
          {forcedMode ? (
            <input type="hidden" name="looking_for" value={forcedMode} />
          ) : (
            <div className="field">
              <label htmlFor="cf-looking">{f.lookingFor}</label>
              <select id="cf-looking" name="looking_for" defaultValue="hiring">
                <option value="hiring">{f.hiringOption}</option>
                <option value="job">{f.jobOption}</option>
              </select>
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="cf-message">{f.message}</label>
          <textarea id="cf-message" name="message" required rows={6} />
        </div>

        <div>
          <button type="submit" className="btn">
            {dict.contact.submit} <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </section>
  );
};
