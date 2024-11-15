import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import MenuBar from "@/components/common/MenuBar";

export const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center h-20 px-3 sm:px-3 lg:px-0">
      <div className="flex flex-row items-center gap-4">
        <img src="logo.png" alt="logo" className="w-8 h-auto" />
        <h1 className="font-medium tracking-wider">Lion Power Gym</h1>
      </div>
      <nav className="flex flex-row items-center gap-4">
        <MenuBar />
        <ModeToggle />
      </nav>
    </header>
  );
};
