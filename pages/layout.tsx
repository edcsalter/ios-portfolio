import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hubotSans = localFont({
  src: "./fonts/HubotSans.woff",
  variable: "--font-hubot-sans",
  weight: "100 900",
});
const hubotMono = localFont({
  src: "./fonts/HubotMono.woff",
  variable: "--font-hubot-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hubotSans.variable} ${hubotMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
