import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./Views/Home";
import Header from "./Components/Layouts/Header";
import "./index.css";
import Sidebar from "./Components/Layouts/Sidebar";

const App = () => {
  return (
    <NextUIProvider className="bg-[#f8f8fa] h-screen">
      {/* <Header /> */}
      {/* <Home /> */}
      <Sidebar />
    </NextUIProvider>
  );
};

export default App;
