import React from "react";

import AuthProvider from "@/context/AuthContext";
import PublicRoutes from "./PublicRoutes";

function PublicLayout({ children }: any) {
  return (
    <>
      <AuthProvider>
        <PublicRoutes>{children}</PublicRoutes>
      </AuthProvider>
    </>
  );
}

export default PublicLayout;
