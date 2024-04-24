// import { useContext, useEffect, useState } from "react";

// import { useRouter } from "next/router";
// import type { AppProps } from "next/app";

// import "@/styles/globals.css";
// import AuthProvider from "@/context/AuthContext";
// import { AuthContext } from "@/context/AuthContext";
// import { auth } from "../firebaseConfig";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const { user, loading } = useContext(AuthContext);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (!user && router.pathname !== "/login") {
//         router.push("/login");
//       } else if (
//         (user && router.pathname == "/login") ||
//         (user && router.pathname == "/signup")
//       ) {
//         router.push("/dashboard");
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//   return (
//     <AuthContext.Provider value={{ user: null, loading: true }}>
//       {/* <navbar/> */}
//       <Component {...pageProps} />
//     </AuthContext.Provider>
//   );
// }

// import { useContext, useEffect, useState } from "react";

// import { useRouter } from "next/router";
// import type { AppProps } from "next/app";

// import "@/styles/globals.css";
// import AuthProvider from "@/context/AuthContext";
// import { AuthContext } from "@/context/AuthContext";
// import { auth } from "../firebaseConfig";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const { user, loading } = useContext(AuthContext);
//   console.log("auth user", user);

//   useEffect(() => {
//     if (!loading) {
//       if (user) {
//         router.push("/dashboard");
//       } else {
//         router.push("/");
//       }
//     }
//   }, [router, user, loading]);

//   return (
//     <AuthProvider>
//
//       <Component {...pageProps} />
//
//     </AuthProvider>
//   );
// }

import type { AppProps } from "next/app";

import PrivateRoutes from "./PrivateRoutes";

import "@/styles/globals.css";
import AuthProvider from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PrivateRoutes>
        <Component {...pageProps} />
      </PrivateRoutes>
    </AuthProvider>
  );
}
