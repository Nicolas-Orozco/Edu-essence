import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-base-300 m-auto flex flex-col items-center max-w-4xl border-b-4 border-x-4 border-black py-8 px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
