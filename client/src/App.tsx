import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";
import Header from "./components/layouts/Header";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import NewNote from "./pages/NewNote";
import Router from "./routes/index";

const App = () => {
  return (
    <>
      <NextUIProvider className="bg-[#f8f8fa] h-screen">
        <Router />
        {/* <BrowserRouter> */}
        {/* <Routes> */}
        {/* <Route element={<Home />} path="/" loader>
              <Route element={<AllNotes />} path="/" />
              <Route element={<NewNote />} path="/new" />
              <Route element={<p>NO PAGE FOUND</p>} path="*" />
            </Route> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}
      </NextUIProvider>
    </>
  );
};

export default App;
