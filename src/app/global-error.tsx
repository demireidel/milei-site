"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // error.digest is useful for server-side error tracking
  void error;

  return (
    <html lang="es">
      <body
        style={{
          background: "#0a0a0f",
          color: "rgba(255,255,255,0.92)",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100dvh",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Error crítico
          </h1>
          <p style={{ opacity: 0.6, marginBottom: "2rem" }}>
            Ocurrió un error grave. Intentá recargar la página.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#b8860b",   /* --color-gold-hex */
              color: "#0a0a0f",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
