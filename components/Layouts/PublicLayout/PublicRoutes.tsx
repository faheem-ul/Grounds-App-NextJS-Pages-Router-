import { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { AuthContext } from "@/context/AuthContext";

function PublicRoutes({ children }: any) {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return <>{!user && children}</>;
}

export default PublicRoutes;
