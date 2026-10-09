import Link from "next/link";
import { getDict } from "@/lib/i18n-server";

export default async function SiteFooter() {
  const { d } = await getDict();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-title">CAMT Lost &amp; Found</div>
            <p className="footer-about">{d.footer.tagline}</p>
          </div>
          <div>
            <div className="footer-title">{d.footer.posts}</div>
            <ul>
              <li><Link href="/items">{d.nav.items}</Link></li>
              <li><Link href="/report">{d.footer.newPost}</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">{d.footer.account}</div>
            <ul>
              <li><Link href="/my-reports">{d.nav.mine}</Link></li>
              <li><Link href="/login">{d.nav.login}</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">{d.footer.about}</div>
            <ul>
              <li>{d.footer.community}</li>
              <li>{d.footer.college}</li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">{d.footer.copy}</div>
      </div>
    </footer>
  );
}
