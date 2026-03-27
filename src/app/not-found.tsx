import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70dvh] items-center justify-center">
      <Container className="text-center">
        <p className="badge-text mb-4">Error 404</p>
        <h1 className="page-title mb-6">Página no encontrada</h1>
        <p className="prose-body mx-auto mb-10 max-w-md">
          La página que buscas no existe o fue trasladada.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-wider text-dark no-underline transition-opacity hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}
