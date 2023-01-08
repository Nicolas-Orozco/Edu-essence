import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="bg-base-300 m-auto flex flex-col items-center max-w-4xl py-8 px-4 border-black border-r-4 border-l-4 border-b-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
