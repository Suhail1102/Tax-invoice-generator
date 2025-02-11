import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    return token && storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {

    setLoading(true)
    
    const token = localStorage.getItem("token");
    if (token) {
      // Token exists, so verify it
      fetch("http://localhost:5000/api/verify-token", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Token Verified:", data);
          if (data.user) {
            setUser(data.user); // Set user data
          } else {
            console.warn("Invalid token, logging out.");
            logout(); // Call logout if the token is invalid
          }
        })
        .catch((error) => {
          console.error("Verification failed:", error);
          logout(); // Logout on any error in token verification
        }).finally(() => {
          setLoading(false); // Once the verification process is complete, set loading to false
        });
    } else {
      // Token not found, so logout (or leave user as null)
      setUser(null);
      setLoading(false)
    }
  }, []);
  

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data
    setUser(userData); 
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
