import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { founder } from "@/lib/content/home";

export function Founder() {
  return (
    <Section>
      <Reveal className="grid items-center gap-8 rounded-3xl border border-ivory-300 bg-ivory-50 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-12">
        {/* Retrato pendiente: sin foto de archivo haciéndose pasar por él. */}
        <div
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-dashed border-forest-700/25 bg-honey-100 lg:h-36 lg:w-36"
          aria-hidden="true"
        >
          <BrandMark className="h-10 w-10 text-forest-500" />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-clay-600 uppercase">
            {founder.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-forest-700">{founder.heading}</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-600">{founder.body}</p>
          <Button href={founder.link.href} variant="secondary" className="self-start">
            {founder.link.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
