import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
