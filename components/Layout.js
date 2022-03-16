import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="line"></div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
