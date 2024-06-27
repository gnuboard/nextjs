import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";

export const metadata = {
  title: "Home Page",
  description: "This is Home Page",
};

export default function RootLayout({ children }) {
  return (
    <>
      <header>home header</header>
      <main className="w-full h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </main>
      <footer>home footer</footer>
    </>
  );
}
