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
  title: "Oceanside",
  icons: {
    icon: "/logo_site.png",
    shortcut: "/logo_site.png",
    apple: "/logo_site.png",
  },
  openGraph: {
    title: "Oceanside - Fale Direto pelo WhatsApp",
    description:
      "Apartamentos frente mar no Recreio. Fale agora com nosso corretor: (21) 96405-9493",
    url: "https://www.raccaimoveis.com.br",
    siteName: "Oceanside",
    locale: "pt-BR",
    type: "website",
  },
  description:
    "Lançamento Oceanside no Recreio - Fale direto pelo WhatsApp: (21) 96405-9493",
  keywords: [
    "Oceanside",
    "lançamento Recreio",
    "WhatsApp corretor",
    "Zap imóveis Recreio",
    "Chamar no WhatsApp",
    "Agendar visita",
    "imóveis Recreio",
    "imóveis Rio de Janeiro",
    "imóveis à venda",
    "Fale com o corretor",
    "Conversar com corretor",
    "Conversar pelo WhatsApp",
    "contato corretor Recreio",
    "telefone imobiliária Oceanside",

    "Recreio dos Bandeirantes",
    "investimento imóveis",
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K8K6KFDR');`}
        </Script>

        <link
          rel="canonical"
          href="https://www.raccaimoveis.com.br"
          key="canonical"
        />
        <link
          rel="preconnect"
          href="https://www.youtube.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://s.ytimg.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://s.ytimg.com" />

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
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+55 21 96405-9493",
              whatsapp: "+55 21 96405-9493",
              areaServed: "Rio de Janeiro",
              email: "lucindaracca48@gmail.com.br",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. das Américas",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8K6KFDR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
