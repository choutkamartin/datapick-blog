import Footer from "components/layout/Footer";
import Header from "components/layout/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-slate-100">
      <Header />
      <main className="px-4 md:px-8 lg:px-20 xl:px-40 2xl:px-80">
        <div className="py-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
