import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";

function PrivateRoutes({ children }: any) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  console.log("private user", user);

  useEffect(() => {
    if (!loading && !user) {
      const allowedRoutes = ["/login", "/signup", "/home"];
      const currentRoute = router.pathname;
      if (!allowedRoutes.includes(currentRoute)) {
        router.push("/");
      }
    }
  }, [loading, user, router]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
}

export default PrivateRoutes;
