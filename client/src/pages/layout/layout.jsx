import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "@/components/Header";

const Layout = () => {
  return (
    <main>
      {/* header */}

      <Header />
      {/* children for all the other pages */}
      <Outlet />
      {/* Footer */}
    </main>
  );
};

export default Layout;
