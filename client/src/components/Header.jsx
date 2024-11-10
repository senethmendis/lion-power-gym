import React from "react";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center h-20 px-3 sm:px-3">
      <img src="logo.png" alt="logo" className="w-8 rotate-45" />
      <nav>
        <ModeToggle />
      </nav>
    </header>
  );
};
