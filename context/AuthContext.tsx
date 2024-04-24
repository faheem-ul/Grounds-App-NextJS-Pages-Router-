import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { User } from "firebase/auth";

import { auth } from "../firebaseConfig";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loading: false,
});

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
