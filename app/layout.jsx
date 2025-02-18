import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { ReactLenis } from "@/lib/lenis";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// const oswald = Oswald({
//   variable: "--font-oswald",
//   display: "swap",
//   weight: ["200", "300", "400", "500", "600", "700"],
// });

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// const roboto = Roboto({
//   variable: "--font-roboto",
//   display: "swap",
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

// const notoSans = Noto_Sans({
//   variable: "--font-noto-sans",
//   display: "swap",
// });

export const metadata = {
  title: "Sirkular Center Indonesia",
  description: "Official website of Sirkular Center Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root>
        <body
          className={`${bricolage.variable} ${inter.variable} font-sans antialiased bg-background-aziz`}
        >
          <main className="relative">
            <NavigationBar />
            {/* <Lenis> */}
            {children}
            <Footer />

            {/* </Lenis> */}
          </main>
        </body>
      </ReactLenis>
    </html>
  );
}
