import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import { AuthProvider } from "@/components/AuthProvider";
import { currentProfile } from "@/lib/auth";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getDictionary } from "@/lib/i18n";
import { getLang } from "@/lib/i18n-server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const notoThai = Noto_Sans_Thai({ subsets: ["thai", "latin"], variable: "--font-thai", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = getDictionary(await getLang());
  return { title: meta.title, description: meta.description };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLang();
  const user = await currentProfile().catch(() => null);
  return (
    <html lang={lang} className={`${inter.variable} ${notoThai.variable}`}>
      <body>
        <LanguageProvider initialLang={lang}>
          <AuthProvider user={user}>
            {children}
            <SiteFooter />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
