"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Separator, Link } from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon, Logo } from "@/components/icons";
import { fontSans2 } from "@/config/fonts";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-default-200 bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <NextLink className="flex items-center gap-2" href="/">
            {/* <Logo /> */}
            <p className={clsx("font-bold text-inherit", fontSans2.className)}>
              ALPHALABS
            </p>
          </NextLink>

          <div className="hidden md:block py-3">
            <Separator orientation="vertical" className="h-6" />
          </div>

          <ul className="ml-2 hidden gap-4 md:flex">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <NextLink
                    href={item.href}
                    className={clsx(
                      "transition-colors hover:text-primary font-bold",
                      isActive
                        ? "text-primary"
                        : "opacity-60",
                    )}
                  >
                    {item.label}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-default-500" />
          </Link>

          <ThemeSwitch />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-default-500" />
          </Link>

          <ThemeSwitch />

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-medium p-2 transition-colors hover:bg-default-100"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-default-200 sm:hidden">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {siteConfig.navMenuItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <li key={`${item.label}-${index}`}>
                  <NextLink
                    href={item.href}
                    className={clsx(
                      "block rounded-medium px-2 py-2 text-lg transition-colors",
                      isActive
                        ? "font-semibold text-primary"
                        : "text-foreground hover:text-primary",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};