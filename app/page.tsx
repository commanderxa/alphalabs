"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:pt-20">
      <div className="inline-block text-center justify-center">
        <span className={title()}>Explore&nbsp;</span>
        <span className={title({ color: "blue" })}>Physics Concepts&nbsp;</span>
        <br />
        <span className={title()}>
          Through Dynamic
          <br />
          Pre-Lab Simulations&nbsp;
        </span>
        <div className={subtitle({ class: "mt-4 mb-0" })}>
          Computer tool designed to prepare you for laboratory success.
        </div>
        <span className="">
          <span>powered by&nbsp;</span>
          <span>
            <Link as={NextLink} href={siteConfig.links.mujoco} isExternal>
              <Code className="font-bold" color="primary">
                MuJoCo
              </Code>
            </Link>
          </span>
        </span>
      </div>

      <div className="flex gap-3 mt-4">
        <Popover placement="left" showArrow={true}>
          <PopoverTrigger>
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "solid",
              })}
              // href={"#"}
            >
              Publication
            </Link>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Coming soon!</div>
              <div className="text-tiny">
                A paper will be linked once published.
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by viewing the{" "}
            <Link as={NextLink} href={"/collection"}>
              <Code color="primary">collection</Code>
            </Link>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
