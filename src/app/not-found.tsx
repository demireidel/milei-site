import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-accent text-8xl font-bold text-gold">404</p>
      <h1 className="mt-4 font-display text-2xl text-text-primary">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-base text-text-secondary">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-gold px-6 py-3 font-accent text-sm font-semibold uppercase tracking-wider text-white no-underline transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
