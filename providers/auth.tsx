// auth.tsx
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [state, setState] = useState({ currentUser: {}, loading: false });
  const router = useRouter();

  useEffect(() => {
    setState({ ...state, loading: true });
    auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log("No User!");
        setState({ ...state, loading: false, currentUser: {} });
        // setCurrentUser(null);
        // setLoading(false);
        return;
      }
      const token = await user.getIdToken();
      setState({ ...state, loading: false, currentUser: user });
      //   setCurrentUser(user);
      //   setLoading(false);
      console.log("token", token);
      console.log("user", user);
    });
    return () => {
      setState({ ...state, loading: false, currentUser: {} });
    };
  }, []);

  if (state.loading) return <>Loading...</>;
  if (!state.currentUser) {
    return router.push("/auth");
  } else {
    return (
      <AuthContext.Provider value={{ currentUser: state.currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
}

export const useAuth = () => useContext(AuthContext);
