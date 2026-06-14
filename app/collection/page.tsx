"use client";

import Image from "next/image";
import { Card, Separator, buttonVariants } from "@heroui/react";

import { collectionConfig } from "@/config/collection";
import { ColabIcon } from "@/components/colab-icon";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CollectionPage() {
  return (
    <div>
      {collectionConfig.groups.map((group, index) => (
        <section key={group.name} className="mb-12">
          <div>
            <h2 className="mb-6 text-2xl font-bold">{group.name}</h2>
            <p className="mb-8 text-default-500">{group.description}</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.simulations.map((sim) => (
                <Card
                  key={sim.name}
                  className="overflow-hidden border border-default-200 bg-content1 p-0"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      alt={sim.name}
                      className="pointer-events-none object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                      fill
                      src={`${basePath}/assets/collection/${sim.img}`}
                    />
                  </div>

                  <Card.Content className="p-4">
                    <h3 className="mb-1 text-lg font-semibold">{sim.name}</h3>
                    <p className="mb-4 line-clamp-2 text-sm text-default-500">
                      {sim.description}
                    </p>

                    <a
                      href={sim.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "md",
                      })}
                    >
                      <ColabIcon className="h-5 w-5 text-yellow-500" />
                      <span>Open in Colab</span>
                    </a>
                  </Card.Content>
                </Card>
              ))}
            </div>
            {index == collectionConfig.groups.length ? (
              <Separator className="my-4 mt-12 w-full" />
            ) : (
              <div></div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
