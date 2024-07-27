import React, { useEffect } from "react";
import { Route, Navigate, redirect, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { publicRoute as routesData } from "./routeList";

const PublicRoute = () => {
  return (
    <Routes>
      {routesData.map((route, index) => {
        const { Element, name, path } = route;
        return <Route path={route.path} key={name} element={<Element />} />;
      })}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default PublicRoute;
