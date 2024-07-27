import React from "react";
import Sidebar from "../Components/Layouts/Sidebar";
import Wrapper from "../Components/Layouts/Wrapper";
import { Outlet } from "react-router-dom";
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
