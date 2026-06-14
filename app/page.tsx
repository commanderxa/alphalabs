"use client";

import { Separator, Link, buttonVariants } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { SimulationStructureBlock } from "@/components/sim-code";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:pt-20">
      <div className="inline-block text-center justify-center leading-none">
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

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-default-500 max-[412px]:flex-col max-[412px]:gap-1.5">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-default-500 transition-colors hover:text-foreground"
          >
            <GithubIcon size={16} />
            <code className="rounded-medium bg-primary/10 px-2 py-1 font-mono font-bold text-primary">
              Open source project
            </code>
          </Link>

          <span className="text-sm text-default-500 sm:pb-0.5">powered by</span>

          <Link
            href={siteConfig.links.mujoco}
            className="inline-flex items-center"
            target="_blank"
          >
            <code className="rounded-medium bg-primary/10 px-2 py-1 font-mono font-bold text-primary">
              MuJoCo
            </code>
          </Link>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          href={siteConfig.links.publication}
          target="_blank"
          className={buttonVariants({
            variant: "primary",
          })}
        >
          Publication
        </Link>

        <Link
          href="/collection"
          className={buttonVariants({
            variant: "outline",
          })}
        >
          View simulations
        </Link>
      </div>

      <Separator className="my-4 mt-8 w-full max-w-5xl" />

      <SimulationStructureBlock />
    </section>
  );
}
