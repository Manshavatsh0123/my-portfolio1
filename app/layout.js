import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: [ "400", "500", "600", "700", "800", "900"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: [ "400"],
});

export const metadata = {
  title: "Mansha Vatsh | Portfolio",
  description: "Explore the portfolio of Mansha Vatsh — showcasing innovative full-stack web projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
