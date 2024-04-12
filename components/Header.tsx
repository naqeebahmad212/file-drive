import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="border-b py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div>FileDrive</div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
