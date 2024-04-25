import Footer from "@/pages/footer";
import React from "react";

function FooterLayout({ children }: any) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default FooterLayout;
