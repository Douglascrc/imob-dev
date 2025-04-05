import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raccaimoveis.com.br"),
  title: "OceanSide",
  icons: {
    icon: "/logo_site.png",
    shortcut: "/logo_site.png",
    apple: "/logo_site.png",
  },
  openGraph: {
    title: "OceanSide",
    description:
      "Encontre o imóvel perfeito com o Oceanside: lançamento exclusivo no Recreio dos Bandeirantes, segurança e condições especiais.",
    url: "https://www.raccaimoveis.com.br",
    siteName: "OceanSide",

    locale: "pt-BR",
    type: "website",
  },
  description: "Lançamento Oceanside no Recreio dos Bandeirantes",
  keywords:
    "Oceanside, lançamento, Recreio dos Bandeirantes, imóveis, investimento em imóveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo_site.png" />
        <link rel="icon" sizes="192x192" href="/logo_site.png" />

        <meta
          name="description"
          content="Encontre o imóvel perfeito com o Oceanside: lançamento exclusivo no Recreio dos Bandeirantes, segurança e condições especiais."
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-341641045"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-341641045');
          `}
        </Script>

        <meta name="author" content="Douglas Campos" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="yPQM6TKdAP31dlFHc5Abiq5BDGJ5n4_AsrCEHcZ0dVo"
        />
        <meta name="Racca Imovéis" content="Imóveis" />
        <meta
          name="Um imóvel de lançamento no Recreio dos bandeirantes"
          content="Imóvel Ocean Side na Cidade do Rio de Janeiro"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Racca Imovéis",
            image: "/logo_site.png",
            telephone: "+55 (21) XXXX-XXXX",
            email: "lucindaracca48@gmail.com.br",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. das Américas, 12345",
              addressLocality: "Rio de Janeiro",
              addressRegion: "RJ",
              postalCode: "22790-701",
              addressCountry: "BR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-23.024653",
              longitude: "-43.469225",
            },
            url: "https://www.raccaimoveis.com.br",
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
