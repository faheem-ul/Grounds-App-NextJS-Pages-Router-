import AuthProvider from "@/context/AuthContext";
import PrivateRoutes from "@/components/Layouts/PrivateLayout/PrivateRoutes";

function PrivateLayout({ children }: any) {
  return (
    <>
      <AuthProvider>
        <PrivateRoutes></PrivateRoutes>

        <main>{children}</main>
        {/* </PrivateRoutes> */}
      </AuthProvider>
    </>
  );
}

export default PrivateLayout;
