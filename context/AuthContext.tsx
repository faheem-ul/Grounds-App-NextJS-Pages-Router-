"client side";

import React, { useEffect } from "react";
import { useState } from "react";

import { auth } from "../firebaseConfig";

import PropTypes from "prop-types";
import { User } from "firebase/auth";

interface AuthContextType {
  user: string;
}

export const AuthContext = React.createContext<AuthContextType>({
  user: "",
});

function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string>("ok");

  // setUser("ok");
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
