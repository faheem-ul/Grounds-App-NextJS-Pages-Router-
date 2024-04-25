// import { useContext, useEffect } from "react";

// import { useRouter } from "next/router";

// import { AuthContext } from "@/context/AuthContext";

// function PrivateRoutes({ children }: any) {
//   const router = useRouter();
//   const { user, loading } = useContext(AuthContext);

//   console.log("private user", user);

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/login");
//     } else if (
//       (user && router.pathname == "/login") ||
//       (user && router.pathname == "/signup")
//     ) {
//       router.push("/dashboard");
//     }
//   }, [loading, user]);

//   if (loading) {
//     return null;
//   }

//   return <>{children}</>;
// }

// export default PrivateRoutes;

import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";
import Dashboard from "../../pages/dashboard";

function PrivateRoutes({ children }: any) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  console.log("private user", user);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    } else if (
      (user && router.pathname == "/login") ||
      (user && router.pathname == "/signup")
    ) {
      router.push("/dashboard");
    }
  }, [loading, user]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
}

export default PrivateRoutes;
