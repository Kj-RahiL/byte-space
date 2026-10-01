import Footer from "@/components/layout/Footer";

// Marketing pages carry the site footer; auth pages (e.g. /login) don't, as in Figma
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
