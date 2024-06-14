import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./component/Footer/Footer";


export const metadata: Metadata = {
  title: "SMR Mode",
  description: "Магазин стильной летней одежды",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
