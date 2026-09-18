import type { Metadata } from "next";
import { VideoLibrary } from "@/components/conversations/VideoLibrary";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { videos } from "@/lib/content/collections";
import { conversations } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Conversaciones",
  description: conversations.intro,
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={conversations.eyebrow}
        title={conversations.heading}
        intro={conversations.intro}
      />

      <Section size="wide">
        <VideoLibrary videos={videos} />
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="narrow">
        <Reveal className="flex flex-col items-start gap-4">
          <Badge tone="clay">Próximamente</Badge>
          <h2 className="text-3xl font-semibold text-forest-700">
            {conversations.questions.title}
          </h2>
          <p className="text-lg leading-relaxed text-ink-600">{conversations.questions.body}</p>
          <Button disabled className="mt-1">
            Enviar pregunta
          </Button>
          <p className="text-sm text-ink-400">
            El canal para enviar preguntas todavía no está disponible.
          </p>
        </Reveal>
      </Section>

      <Section size="narrow">
        <Reveal className="rounded-2xl border border-forest-700/15 bg-honey-100 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-forest-700">Una aclaración importante</h2>
          <p className="mt-2 leading-relaxed text-ink-600">
            Este contenido tiene carácter informativo y divulgativo. No sustituye una consulta
            psicológica ni constituye atención individual. Si estás atravesando una situación
            difícil, busca acompañamiento profesional.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
