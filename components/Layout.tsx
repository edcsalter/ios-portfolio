import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
