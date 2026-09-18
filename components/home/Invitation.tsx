import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { invitation } from "@/lib/content/home";

export function Invitation() {
  return (
    <section className="relative overflow-hidden bg-honey-100 py-20 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-[50%] bg-honey-200/70 blur-2xl"
      />
      <Container size="narrow" className="relative">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-[18ch] text-4xl leading-[1.08] font-semibold text-forest-700 sm:text-5xl">
            {invitation.heading}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-600">{invitation.body}</p>
          <Button href={invitation.action.href} size="lg">
            {invitation.action.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
