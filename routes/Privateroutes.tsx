import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function PrivateRoute({ children }: any) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.push("/dashboard");
  } else {
    router.push("/login");
  }
}
