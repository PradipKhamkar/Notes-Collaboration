import { useEffect } from "react";

const useAuth = () => {
  const isAuthenticated = true;
  //const isAuthenticated = localStorage.getItem("authToken");
  // useEffect(() => {
  // }, []);
  return { isAuthenticated };
};

export default useAuth;
