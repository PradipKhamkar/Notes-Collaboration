import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Wrapper from "../components/layouts/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <div className="flex gap-3">
        <Sidebar />
        <div className="bg-white !w-full !max-h-[95vh] overflow-auto rounded-lg">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
