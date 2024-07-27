import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./Views/Home";
import Header from "./Components/Layouts/Header";
import "./index.css";
import Sidebar from "./Components/Layouts/Sidebar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import AllNotes from "./Views/Notes/AllNotes";
import CreateNote from "./Views/Notes/CreateNote";

const App = () => {
  return (
    <>
      <NextUIProvider className="bg-[#f8f8fa] h-screen">
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" loader>
              <Route element={<AllNotes />} path="/" />
              <Route element={<CreateNote />} path="/new" />
              <Route element={<p>NO PAGE FOUND</p>} path="*" />
            </Route>
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </>
  );
};

export default App;
