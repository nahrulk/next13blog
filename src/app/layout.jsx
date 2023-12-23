import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Next13Blog",
  description: "An app that build for trying next 13 features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charset="UTF-8" />
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
