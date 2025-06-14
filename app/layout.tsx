import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = localFont({
  src: "../public/fonts/ShipleyItalic.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    title: "...",
    description: "...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AuthProvider>
          <NavBar />
          <main className="pb-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
