import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoutes";

const Index = () => {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoute /> : <PublicRoute />}
    </BrowserRouter>
  );
};

export default Index;
