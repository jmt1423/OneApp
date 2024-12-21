"use client";

import type { NavbarProps } from "@nextui-org/react";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";

const menuItems = [
  "Create Plot",
  "Datasets",
  "Dashboards",
  "Save Dashboard",
  "Import/Export",
];
export default function Topbar(props: NavbarProps) {
  return (
    <Navbar
      {...props}
      classNames={{
        base: "py-4 pl-20 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="54px"
    >
      <NavbarContent
        className="gap-7 rounded-full border-none bg-zinc-800/60 px-10 shadow-medium backdrop-blur-md backdrop-saturate-150"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" />

        {/* Items */}
        <NavbarItem className="hidden md:flex">
          <Link className="text-default-500" href="#" size="sm">
            Create Plot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Datasets
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="#" size="sm">
            Dashboards
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Save Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Import/Export
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className="text-white top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[45vh] max-w-[60vw] rounded-large border-none bg-zinc-950/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-zinc-950"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-default-500" href="#" size="md">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
