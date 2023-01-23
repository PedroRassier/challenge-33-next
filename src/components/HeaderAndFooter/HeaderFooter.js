import Footer from "../Footer";
import Header from "../Header";

export default function HeaderFooter({ children, ...props }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
