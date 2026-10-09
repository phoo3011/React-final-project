import { cookies } from "next/headers";
import { getDictionary, LANG_COOKIE, parseLang } from "@/lib/i18n";

export async function getLang() {
  return parseLang((await cookies()).get(LANG_COOKIE)?.value);
}

export async function getDict() {
  const lang = await getLang();
  return { lang, d: getDictionary(lang) };
}
