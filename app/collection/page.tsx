"use client"

import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Link } from "@heroui/link";
import { collectionConfig } from "@/config/collection";
import { ColabIcon } from "@/components/colab-icon";

export default function CollectionPage() {
  return (
    <div className="">
      {collectionConfig.groups.map((group) => (
        <section key={group.name} className="mb-12">
          <h2 className="text-2xl font-bold mb-2">{group.name}</h2>
          <p className="text-default-500 mb-6">
            {group.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {group.simulations.map((sim) => (
              <Card
                key={sim.name}
                className="bg-default-100 dark:bg-default-50 shadow-none"
              >
                <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
                  <Image
                    src={`/assets/${sim.img}`}
                    alt={sim.name}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 pointer-events-none"
                  />
                </div>
                <CardBody>
                  <h3 className="text-lg font-semibold mb-1">{sim.name}</h3>
                  <p className="text-sm text-default-500 mb-4">{sim.description}</p>
                  <Button
                    isExternal
                    as={Link}
                    href={sim.href}
                    variant="solid"
                    startContent={<ColabIcon className="w-5 h-5 text-yellow-500" />}
                    className="bg-default-200 dark:bg-default-100 text-default-700"
                  >
                    Open in Colab
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      ))}

    </div>
  );
}
