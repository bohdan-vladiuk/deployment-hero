"use client";

import React, { useState } from "react";
import "./styles.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <nav className="container mx-auto px-6 xl:px-10">
        <div className="flex items-center gap-6">
          <img src="/icons/MainLogo.svg" width="40" alt="" />
          <div className="hidden lg:block text-lg font-medium text-indigo-500">
            Deployment Hero
          </div>
        </div>
        <div className="my-auto ml-auto block cursor-pointer lg:hidden">
          <div
            id="mobile-menu-button"
            onClick={onClick}
            className={`group peer ${open ? "open" : ""}`}
          >
            <div className="relative top-0 h-1 w-8 rounded-full bg-indigo-500 transition-all group-open:top-2 group-open:rotate-45"></div>
            <div className="my-1 h-1 w-8 rounded-full bg-indigo-500 transition-all group-open:opacity-0"></div>
            <div className="relative top-0 h-1 w-8 rounded-full bg-indigo-500 transition-all group-open:-top-2 group-open:-rotate-45"></div>
          </div>
          <div className="absolute left-0 top-[104px] hidden w-full peer-open:block">
            <div className="mobile-menu-items">
              <span>Overview</span>
            </div>
            <div className="mobile-menu-items">
              <span>Integrations</span>
            </div>
            <div className="mobile-menu-items">
              <span>Pricing</span>
            </div>
            <div className="mobile-menu-items">
              <span>Contact us</span>
            </div>
          </div>
        </div>
        <div className="hidden px-6 flex-1 items-center justify-start lg:flex">
          <div className="menu-items">
            <span>Overview</span>
          </div>
          <div className="menu-items">
            <span>Integrations</span>
          </div>
          <div className="menu-items">
            <span>Pricing</span>
          </div>
          <div className="menu-items">
            <span>Contact us</span>
          </div>
        </div>
        <div className="hidden lg:flex ml-auto gap-4 items-center">
          <button className="btn border border-indigo-500 text-indigo-500">
            Sign In
          </button>
          <button className="btn bg-indigo-500">Get started</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
