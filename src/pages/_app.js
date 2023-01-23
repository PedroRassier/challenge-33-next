import HeaderFooter from "@/components/HeaderAndFooter/HeaderFooter";
import "@/styles/globals.css";
import { Inter, Mukta } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mukba = Mukta({
  subsets: ["latin"],
  variable: "--font-mukba_600",
  weight: ["600"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${mukba.variable}`}>
      <HeaderFooter>
        <Component {...pageProps} />
      </HeaderFooter>
    </div>
  );
}
