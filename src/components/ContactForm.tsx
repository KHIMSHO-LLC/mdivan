import { FORM_ENDPOINT, SITE_URL } from "@/lib/site";

/** Same formsubmit.co pipeline and fields as the original site. */
export const ContactForm = ({ dict, lang, forcedMode }: { dict: any; lang: string; forcedMode?: "hiring" | "job" }) => {
  const f = dict.contact.form;
  return (
    <form action={FORM_ENDPOINT} method="POST" className="form">
      <input type="hidden" name="_subject" value={`New Submission from MDIVAN Website${forcedMode ? ` (${forcedMode})` : ""}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${SITE_URL}/${lang}`} />

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
  );
};

/** Navy head + form card, used by /contact, /hire-talent and /apply. */
export const FormBody = ({ dict, lang, forcedMode }: { dict: any; lang: string; forcedMode?: "hiring" | "job" }) => (
  <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 80px)" }}>
    <div className="wrap">
      <div className="form-card reveal">
        <ContactForm dict={dict} lang={lang} forcedMode={forcedMode} />
      </div>
    </div>
  </section>
);
