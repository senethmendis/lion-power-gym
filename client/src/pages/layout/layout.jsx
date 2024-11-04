import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      {/* header */}
      {/* children for all the other pages */}
      <Outlet />
      {/* Footer */}
    </main>
  );
};

export default Layout;
