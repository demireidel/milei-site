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
    images: [
      {
        url: "/images/banco/hero-balcon.jpg",
        width: 1200,
        height: 630,
        alt: "Javier Milei — Presidente de la Nación Argentina",
      },
    ],
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
  alternates: {
    canonical: "https://javiermilei.com",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Javier Milei",
  url: "https://javiermilei.com",
  image: "https://javiermilei.com/images/banco/hero-balcon.jpg",
  description:
    "Presidente de la Nación Argentina. Economista, escritor y político.",
  jobTitle: "Presidente de la Nación Argentina",
  nationality: "Argentine",
  sameAs: [
    "https://x.com/JMilei",
    "https://www.instagram.com/jaabormiilei",
    "https://www.youtube.com/@JavierMilei",
  ],
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Javier Milei — Presidente de la Nación Argentina",
  url: "https://javiermilei.com",
} as const;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "Presidencia de la Nación Argentina",
  alternateName: "Gobierno de Javier Milei",
  url: "https://javiermilei.com",
  logo: "https://javiermilei.com/images/og-image.jpg",
  sameAs: [
    "https://x.com/JMilei",
    "https://www.instagram.com/javiermilei/",
  ],
  leader: {
    "@type": "Person",
    name: "Javier Milei",
    jobTitle: "Presidente de la Nación Argentina",
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
      <head suppressHydrationWarning />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
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
