"use client"

import React from "react";
import { usePathname } from 'next/navigation';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/react";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubIcon,
  HeartFilledIcon,
  Logo,
} from "@/components/icons";
import { fontSans2 } from "@/config/fonts";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className={clsx(
              "font-bold text-inherit",
              fontSans2.className,
            )}>AlphaLabs</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden md:block pt-4 pb-4 h-full mr-2 ml-2">
          <Divider orientation="vertical" />
        </div>
        <ul className="hidden md:flex gap-4 justify-start">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (<NavbarItem key={item.href} isActive={isActive}>
              <NextLink
                data-active={isActive}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary font-bold",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
            )
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={""}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          className="md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle
          className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (<NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                data-active={isActive}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary font-bold",
                )}
                color="foreground"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
            )
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
