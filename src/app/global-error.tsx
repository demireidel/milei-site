"use client";

import { reportError } from "@/lib/reportError";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  reportError(error);

  return (
    <html lang="es">
      <body className="flex min-h-dvh items-center justify-center bg-[var(--color-cream)] text-center font-[system-ui,sans-serif] text-white/[0.92]">
        <div>
          <h1 className="mb-4 text-[2rem]">
            Error crítico
          </h1>
          <p className="mb-8 opacity-60">
            Ocurrió un error grave. Intentá recargar la página.
          </p>
          <button
            onClick={reset}
            className="cursor-pointer rounded-xl border-none bg-[var(--color-gold-hex)] px-8 py-3 font-semibold text-[var(--color-cream)]"
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
