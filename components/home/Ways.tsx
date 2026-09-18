import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ways } from "@/lib/content/home";

export function Ways() {
  return (
    <Section size="wide">
      <SectionHeading eyebrow={ways.eyebrow} title={ways.heading} />

      <Stagger as="ul" className="mt-10 grid gap-5 md:grid-cols-3">
        {ways.items.map((item, index) => (
          <StaggerItem as="li" key={item.title} className="h-full">
            <Link
              href={item.href}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-ivory-300 bg-ivory-50 p-7 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-forest-700/25 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="font-display text-sm text-clay-500">0{index + 1}</span>
              <h3 className="text-2xl leading-snug font-semibold text-forest-700">{item.title}</h3>
              <p className="flex-1 leading-relaxed text-ink-600">{item.description}</p>
              <span className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-clay-600">
                {item.linkLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
