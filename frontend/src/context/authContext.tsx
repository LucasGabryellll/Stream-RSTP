"use client";

import { useState, createContext, ReactNode, useEffect } from "react";
import { SingInProps, UserContextType } from "@/model/userContextType";

type UserContextProps = {
  children: ReactNode
}

export const AuthContext = createContext<UserContextType>({
  signInContext: (value : SingInProps) => {},
  logout: () => {},
  username: "",
  token: ""
});

function AuthProvider({ children } : UserContextProps) {
  const [token, setToken] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  function signInContext({ username, password, token }: SingInProps) {
    if (username !== "" && password !== "") {
     
      setToken(token);
      setUsername(username);

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

  }

  useEffect(() => {
    const recoveredToken = localStorage.getItem("token");
    const recoveredUsername = localStorage.getItem("username");

    if (recoveredToken && recoveredUsername) {
      setToken(recoveredToken);
      setUsername(recoveredUsername);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, username, signInContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };