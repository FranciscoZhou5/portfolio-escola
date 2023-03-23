import Header from "@/components/Header";
import "../styles/global.css";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Francisco Zhou",
  description: "Portfolio",
};

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--inter-font",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable}`}>
      <body>
        <>
          <Header />
        </>

        {children}
      </body>
    </html>
  );
}
