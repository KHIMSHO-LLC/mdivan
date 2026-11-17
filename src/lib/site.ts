// Shared site settings.


export const SITE_URL = "https://mdivan.com";
export const EMAIL = "hello@mdivan.com";
export const PHONE = "+34 694 209 020";
export const PHONE_HREF = "tel:+34694209020";
export const LINKEDIN = "https://www.linkedin.com/company/mdivan/";
export const INSTAGRAM = "https://www.instagram.com/mdivan";
/** Every form on the site posts here (same pipeline as the old contact form). */
export const FORM_ENDPOINT = "https://formsubmit.co/hello@mdivan.com";

/** Prefix a site path ("/pricing", "/#faq", "/") with the locale. */
export const to = (lang: string, path = "/") => {
  if (path === "/" || path === "") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
};

