import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";

function PublicRoutes({ children }: any) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, []);
  return <>{!user && children}</>;
}

export default PublicRoutes;
