import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SJCGC0FHMM"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SJCGC0FHMM');
        `}
      </Script>

      <script type="application/ld+json">
        {`
          "@context": "http://schema.org/",
          "@type": "Restaurant",
          "name": "Banh mi 59",
          "image": "logo.jpeg",
          "telephone": "+84934381995",
          "hasMenu": "https://www.banhmi59.com/menu",
          "servesCuisine": "Vietnamese",
          "priceRange": "$",
          "address": {
            "@type": "PostalAddress",
            "postalCode": "100000",
            "streetAddress": "59b Cua Nam"
          },
          "keywords": "banh mi, baguette, beef, chicken, traditional, vietnamese, cuisine, food",
          "description": "a little store selling great banh mi",
          "url": "https://www.banhmi59.com"
        `}
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
