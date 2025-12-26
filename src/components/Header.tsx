import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { HeaderClient } from "./HeaderClient";

export const Header = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);
  return <HeaderClient lang={lang} dict={dict} />;
};
