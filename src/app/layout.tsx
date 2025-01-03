import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameTime Insights: Discover the Latest Cricket Match Blogs",
  description: "GameTime Insights: Discover the Latest Cricket Match Blogs, is your go-to destination for in-depth analysis, live updates, and expert commentary on the world of cricket. Whether it's the latest international series, thrilling T20 matches, or insights into player performances, we bring you all the action straight to your screen. Stay updated with comprehensive match breakdowns, expert opinions, and detailed statistics, ensuring you never miss a moment of the excitement. Join us as we dive deep into the world of cricket, offering you fresh perspectives and unparalleled coverage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
      >
         <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem = {false}
          disableTransitionOnChange
        > 
          <Container>
          <Navbar />
          {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}