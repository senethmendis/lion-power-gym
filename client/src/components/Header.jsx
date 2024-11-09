import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </nav>
    </header>
  );
};
