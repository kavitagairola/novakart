import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;