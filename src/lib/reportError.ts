/**
 * Central error reporting stub.
 * In development, logs to console.
 * Replace the body of this function with Sentry/PostHog/etc. when ready.
 */
export function reportError(error: Error & { digest?: string }): void {
  if (process.env.NODE_ENV !== "production") {
    console.error("[reportError]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }
  // TODO: Send to error tracking service
  // e.g. Sentry.captureException(error);
}
