import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Only render Navbar which contains the complete header/navigation structure */}
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

MainLayout.displayName = "MainLayout";

export default MainLayout;