import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container size="narrow" className="flex flex-col items-center gap-6 py-28 text-center">
      <p className="text-xs font-medium tracking-[0.18em] text-clay-600 uppercase">Página 404</p>
      <h1 className="text-4xl font-semibold text-forest-700 sm:text-5xl">
        Esta página quedó pendiente
      </h1>
      <p className="max-w-md text-lg leading-relaxed text-ink-600">
        No encontramos lo que buscabas. Puede que todavía no exista o que el enlace haya cambiado.
      </p>
      <Button href="/" size="lg">
        Volver al inicio
      </Button>
    </Container>
  );
}
