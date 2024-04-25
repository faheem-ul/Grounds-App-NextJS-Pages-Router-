import AuthProvider from "@/context/AuthContext";
import Dashboard from "@/pages/dashboard";
import PrivateRoutes from "@/components/Layouts/PrivateRoutes";

function PrivateLayout({ children }: any) {
  return (
    <AuthProvider>
      <PrivateRoutes>
        <main>{children}</main>
      </PrivateRoutes>
    </AuthProvider>
  );
}

export default PrivateLayout;
