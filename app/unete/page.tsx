import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { contactChannels, socialLinks } from "@/lib/content/site";
import { join } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Únete",
  description: join.intro,
};

const contactReasons = [
  "Quiero sumarme a la comunidad",
  "Soy psicólogo o psicóloga",
  "Represento a una marca",
  "Propuesta de alianza",
  "Otro motivo",
] as const;

export default function Page() {
  const availableSocials = socialLinks.filter((social) => social.url);
  const pendingSocials = socialLinks.filter((social) => !social.url);

  return (
    <>
      <PageHero eyebrow={join.eyebrow} title={join.heading} intro={join.intro} />

      <Section size="wide" id="redes">
        <SectionHeading eyebrow="Síguenos en redes" title="Dónde encontrarnos" className="mb-7" />

        <div className="flex flex-col items-start gap-5">
          {availableSocials.length > 0 ? (
            <ul className="flex flex-wrap gap-3">
              {availableSocials.map((social) => (
                <li key={social.platform}>
                  <Button href={social.url!} external variant="secondary">
                    <SocialIcon platform={social.platform} />
                    {social.label}
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="max-w-2xl leading-relaxed text-ink-600">{join.social.body}</p>
          )}

          {pendingSocials.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {pendingSocials.map((social) => (
                <li key={social.platform}>
                  <Badge tone="muted" className="gap-1.5">
                    <SocialIcon platform={social.platform} className="h-3.5 w-3.5" />
                    {social.label} · próximamente
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section tone="paper" className="border-y border-ivory-300/70" size="wide" id="colabora">
        <SectionHeading
          eyebrow="Colabora con nosotros"
          title="Hay varias maneras de sumarse"
        />
        <Stagger as="ul" className="mt-9 grid gap-5 md:grid-cols-3">
          {join.collaborate.items.map((item) => (
            <StaggerItem
              as="li"
              key={item.title}
              className="flex flex-col gap-3 rounded-3xl border border-ivory-300 bg-ivory-50 p-7"
            >
              <h3 className="font-display text-xl font-semibold text-forest-700">{item.title}</h3>
              <p className="leading-relaxed text-ink-600">{item.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section size="narrow" id="contacto">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-3">
            <Badge tone="clay">Aún no habilitado</Badge>
            <h2 className="text-3xl font-semibold text-forest-700">{join.contact.title}</h2>
          </div>

          <p className="rounded-2xl border border-honey-400/40 bg-honey-100 px-5 py-4 leading-relaxed text-ink-700">
            {join.contact.notice}
          </p>

          {(contactChannels.email || contactChannels.phone) && (
            <ul className="flex flex-col gap-2 text-[0.9375rem] text-ink-600">
              {contactChannels.email && (
                <li>
                  <a
                    href={`mailto:${contactChannels.email}`}
                    className="font-medium text-clay-600 underline-offset-4 hover:underline"
                  >
                    {contactChannels.email}
                  </a>
                </li>
              )}
              {contactChannels.phone && <li>{contactChannels.phone}</li>}
            </ul>
          )}

          <form aria-describedby="aviso-contacto" className="flex flex-col gap-5">
            <p id="aviso-contacto" className="sr-only">
              Formulario deshabilitado: no envía ni guarda información.
            </p>
            <Field id="nombre" label="Nombre" placeholder="Cómo te llamas" />
            <Field id="correo" label="Correo" type="email" placeholder="nombre@ejemplo.com" />
            <Field
              id="motivo"
              label="Motivo"
              type="select"
              placeholder="Elige un motivo"
              options={contactReasons}
            />
            <Field
              id="mensaje"
              label="Mensaje"
              type="textarea"
              rows={5}
              placeholder="Cuéntanos qué te trae por aquí"
            />
            <Button type="submit" disabled className="self-start">
              Enviar mensaje
            </Button>
          </form>
        </Reveal>
      </Section>
    </>
  );
}
