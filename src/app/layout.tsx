import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const fraunces = localFont({
  src: [
    {
      path: "../../public/fonts/fraunces-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/fraunces-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const oswald = localFont({
  src: "../../public/fonts/oswald-latin-wght-normal.woff2",
  variable: "--font-oswald",
  display: "swap",
  weight: "200 700",
});

const inter = localFont({
  src: "../../public/fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Javier Milei — Presidente de la Nación Argentina",
    template: "%s | Javier Milei",
  },
  description:
    "Sitio oficial de Javier Milei, Presidente de la Nación Argentina. Visión, logros, reformas y archivo intelectual.",
  metadataBase: new URL("https://javiermilei.com"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://javiermilei.com",
    siteName: "Javier Milei — Presidente",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Visión, logros, reformas y archivo intelectual del Presidente Javier Milei.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Visión, logros, reformas y archivo intelectual del Presidente Javier Milei.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Page background is cream (#f5f2ed) — colorScheme must match globals.css
// which sets `html { color-scheme: light; }`
export const viewport: Viewport = {
  themeColor: "#f5f2ed", // --color-dark-hex (actual page background)
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Javier Milei",
  url: "https://javiermilei.com",
  jobTitle: "Presidente de la Nación Argentina",
  nationality: "Argentine",
  affiliation: {
    "@type": "Organization",
    name: "La Libertad Avanza",
    url: "https://lalibertadavanza.com.ar",
  },
  worksFor: {
    "@type": "GovernmentOrganization",
    name: "Presidencia de la Nación Argentina",
    url: "https://www.argentina.gob.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Balcarce 50",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
  },
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${oswald.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
