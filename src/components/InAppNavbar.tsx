"use client";
import Link from "next/link";
import { constants } from "@/constants";
import clsx from "clsx";

import { useState, useRef, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import ThemeController from "@/components/ThemeController";

import { IconMenu2, IconSpray, IconX } from "@tabler/icons-react";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
const poppins = Poppins({ weight: "600", style: "normal", subsets: ["latin"] });

const InAppNavbar = () => {
  const pathname = usePathname();
  const { changeTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };

  const toggleMobileRef = useRef<HTMLInputElement | null>(null);

  return (
    <nav className="navbar max-w-7xl z-50">
      <h3 className={clsx("navbar-start", poppins.className)}>
        <Link className="btn btn-ghost w-fit text-2xl font-bold" href="/">
          <IconSpray className="-rotate-45" />
          {constants.appName}
        </Link>
      </h3>
      <ul className="navbar-center list-none justify-start gap-3 hidden md:flex">
        <li>
          <Link href="/dashboard">
            <button className="btn btn-ghost">Dashboard</button>
          </Link>
        </li>
        <li>
          <Link href="/explore">
            <button className="btn btn-ghost">Explore</button>
          </Link>
        </li>
        <li>
          <Link href="/rewards">
            <button className="btn btn-ghost">Rewards</button>
          </Link>
        </li>
      </ul>
      <ul className="navbar-end list-none gap-2 hidden md:flex">
        <ThemeController handleThemeChange={changeTheme} />
        <UserButton />
      </ul>

      <div className="drawer md:hidden navbar-end">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          ref={toggleMobileRef}
        />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <IconMenu2 />
          </label>
        </div>
        <div className="drawer-side">
          <label
            aria-label="close sidebar"
            htmlFor="my-drawer"
            className="drawer-overlay"
          ></label>
          <div className="flex flex-col justify-between bg-base-200 min-h-screen w-full px-4 py-2">
            <div className="flex flex-col">
              <div className="flex justify-end items-center gap-2 border-b border-neutral">
                <ThemeController handleThemeChange={changeTheme} />
                <div
                  className="btn btn-ghost outline-none"
                  role="button"
                  onClick={() => toggleMobileRef?.current?.click()}
                >
                  <IconX />
                </div>
              </div>
              <Link
                href="/dashboard"
                onClick={() => toggleMobileRef?.current?.click()}
                className="flex items-center justify-center"
              >
                <button className="btn btn-ghost w-full">Dashboard</button>
              </Link>
              <Link
                href="/explore"
                onClick={() => toggleMobileRef?.current?.click()}
                className="flex items-center justify-center"
              >
                <button className="btn btn-ghost w-full">Explore</button>
              </Link>

              <Link
                href="/rewards"
                onClick={() => toggleMobileRef?.current?.click()}
                className="flex items-center justify-center"
              >
                <button className="btn btn-ghost w-full">Rewards</button>
              </Link>
            </div>
            <div className="flex flex-col items-end border-t border-neutral px-4 py-2">
              <UserButton showName />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InAppNavbar;
