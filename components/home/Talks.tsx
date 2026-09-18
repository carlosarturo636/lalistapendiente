import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { talks } from "@/lib/content/home";

export function Talks() {
  return (
    <Section tone="forest" size="wide">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={talks.eyebrow}
            title={talks.heading}
            description={talks.body}
            tone="light"
          />
          <Button href="/conversaciones" variant="onDark" className="mt-7">
            Ver la sección
          </Button>
        </Reveal>

        <Stagger as="ul" className="flex flex-col divide-y divide-ivory-100/15">
          {talks.topics.map((topic) => (
            <StaggerItem as="li" key={topic.title} className="flex flex-col gap-2 py-6 first:pt-0">
              <h3 className="font-display text-2xl font-semibold text-honey-300">{topic.title}</h3>
              <p className="leading-relaxed text-ivory-200/85">{topic.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
