"use client";

import { Accordion, Link, Separator } from "@heroui/react";
import { aboutConfig, type TextPart } from "@/config/about";

function renderRichText(parts: TextPart[]) {
  return parts.map((part, idx) => {
    if (part.type === "text") {
      return <span key={idx}>{part.value}</span>;
    }

    return (
      <Link
        key={idx}
        href={part.href}
        target={part.isExternal ? "_blank" : undefined}
        rel={part.isExternal ? "noopener noreferrer" : undefined}
        className="font-medium text-primary underline underline-offset-4"
      >
        {part.label}
      </Link>
    );
  });
}

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 space-y-8 lg:flex-[2]">
          <section className="flex-1 space-y-6 lg:flex-[2]">
            {aboutConfig.groups.map((group) => (
              <section key={group.name}>
                <div className="rounded-2xl border border-default-200 bg-surface p-4 sm:p-5">
                  <h2 className="mb-4 text-2xl font-bold">{group.name}</h2>
                  <p className="leading-relaxed text-default-500">
                    {renderRichText(group.text)}
                  </p>
                </div>
              </section>
            ))}
          </section>

          <section>
            <div className="rounded-2xl p-4 sm:p-5">
              <h2 className="mb-4 text-2xl font-bold">
                {aboutConfig.publications.name}
              </h2>

              <ol className="space-y-4 pl-0 text-default-500">
                {aboutConfig.publications.content.map((paper, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3"
                  >
                    <span className="tabular-nums text-default-400">
                      {idx + 1}.
                    </span>

                    <div className="min-w-0">
                      {paper.link ? (
                        <Link
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline underline-offset-4"
                        >
                          {paper.name}
                        </Link>
                      ) : (
                        <span className="italic text-default-400">
                          {paper.name}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>

        <Separator
          className="mx-4 hidden h-auto lg:block"
          orientation="vertical"
        />

        <section className="mt-6 flex-1 lg:mt-0 lg:flex-[1]">
          <h2 className="mb-4 text-2xl font-bold">{aboutConfig.faq.name}</h2>

          <Accordion className="px-0">
            {aboutConfig.faq.content.map((item, idx) => (
              <Accordion.Item
                key={idx}
                id={`faq-${idx}`}
                className="rounded-2xl border border-default-200 bg-content1"
              >
                <Accordion.Heading>
                  <Accordion.Trigger className="w-full px-4 py-4 text-left sm:px-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-medium text-foreground">
                        {item.question}
                      </span>
                      <Accordion.Indicator className="shrink-0 text-default-400" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Heading>

                <Accordion.Panel>
                  <Accordion.Body className="border-t border-default-100 px-4 py-4 sm:px-5">
                    <p className="leading-relaxed text-default-500">
                      {item.answer}
                    </p>
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}