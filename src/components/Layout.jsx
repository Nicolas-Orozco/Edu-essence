import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-base-300 m-auto flex flex-col items-center max-w-4xl">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
