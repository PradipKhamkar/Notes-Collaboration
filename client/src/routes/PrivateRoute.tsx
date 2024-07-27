import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import { protectedRoute } from "./routeList";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {protectedRoute.map((item, index) => {
          const { Element, name, path } = item;
          return <Route key={name} path={path} element={<Element />} />;
        })}
        <Route path="*" element={<p>PAGE NOT FOUND</p>} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
