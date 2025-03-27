"use client";

import { Accordion, AccordionItem, Divider, Link } from "@heroui/react";
import { aboutConfig } from "@/config/about";

export default function AboutPage() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
        <div className="flex-1 lg:flex-[2] space-y-12 flex-3">
          {aboutConfig.groups.map((group) => (
            <section key={group.name}>
              <h2 className="text-2xl font-bold mb-2">{group.name}</h2>
              <p className="text-default-500 leading-relaxed">{group.text}</p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold mb-4">
              {aboutConfig.publications.name}
            </h2>
            <ol className="list-decimal list-inside space-y-4 pl-4 text-default-500">
              {aboutConfig.publications.content.map((paper, idx) => (
                <li key={idx}>
                  {paper.link ? (
                    <Link
                      className="text-primary font-medium underline underline-offset-4"
                      href={paper.link}
                      isExternal
                    >
                      {paper.name}
                    </Link>
                  ) : (
                    <span className="italic text-default-400">
                      {paper.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <Divider
          className="hidden h-auto lg:block mx-4"
          orientation="vertical"
        />

        <section className="flex-1 lg:flex-[1]">
          <h2 className="text-2xl font-bold mb-4">{aboutConfig.faq.name}</h2>
          <Accordion variant="splitted" className="px-0">
            {aboutConfig.faq.content.map((item, idx) => (
              <AccordionItem
                key={idx}
                aria-label={item.question}
                title={item.question}
                className="bg-default-100 dark:bg-default-50 shadow-none"
              >
                <p className="text-default-500 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
