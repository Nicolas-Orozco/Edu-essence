import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../components/scrollToTop";
import { useEffect } from "react";
import { themeChange } from "theme-change";
function Layout({ children }) {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="bg-base-300 m-auto flex flex-col items-center max-w-4xl border-b-4 border-x-4 border-black pt-24 pb-8 px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
