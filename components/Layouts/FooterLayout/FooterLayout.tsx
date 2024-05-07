import Footer from "@/pages/footer";
import React, { ReactNode } from "react";

function FooterLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default FooterLayout;
