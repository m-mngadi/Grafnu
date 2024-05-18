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
const poppins = Poppins({ weight: "600", style: "normal", subsets: ["latin"] });

const LandingNavbar = (props: { logoOnly?: boolean }) => {
  const { logoOnly } = props;
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
      {!logoOnly && (
        <ul className="navbar-center list-none justify-start gap-3 hidden md:flex">
          <li>
            <Link href="/pricing">
              <button className="btn btn-ghost">Pricing</button>
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div
                role="button"
                tabIndex={0}
                className="btn btn-ghost"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                Resource
              </div>
              <ul
                tabIndex={0}
                className={cn({
                  "p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 border border-neutral":
                    true,
                  hidden: !open,
                })}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <li>
                  <Link href="/blog" onClick={handleClick}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      )}
      <ul className="navbar-end list-none gap-2 hidden md:flex">
        <ThemeController handleThemeChange={changeTheme} />
        {pathname !== (process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL as string) && (
          <li>
            <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!}>
              <button className="btn btn-ghost">Sign In</button>
            </Link>
          </li>
        )}
        {pathname !== (process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL as string) && (
          <li>
            <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!}>
              <button className="btn btn-neutral">Sign Up</button>
            </Link>
          </li>
        )}
      </ul>
      {!logoOnly && (
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
                  href="/"
                  onClick={() => toggleMobileRef?.current?.click()}
                  className="flex items-center justify-center"
                >
                  <button className="btn btn-ghost w-full">Home</button>
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => toggleMobileRef?.current?.click()}
                  className="flex items-center justify-center"
                >
                  <button className="btn btn-ghost w-full">Pricing</button>
                </Link>

                <Link
                  href="/blog"
                  onClick={() => toggleMobileRef?.current?.click()}
                  className="flex items-center justify-center"
                >
                  <button className="btn btn-ghost w-full">Blog</button>
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!}
                  onClick={() => toggleMobileRef?.current?.click()}
                  className="flex items-center justify-center"
                >
                  <button className="btn btn-ghost w-full">Sign In</button>
                </Link>

                <Link
                  href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!}
                  onClick={() => toggleMobileRef?.current?.click()}
                  className="flex items-center justify-center"
                >
                  <button className="btn btn-neutral w-full">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
