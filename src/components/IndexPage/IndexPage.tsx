import Head from "next/head";
import Script from "next/script";

export const IndexPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Banh mi 59",
    image: "logo.jpeg",
    telephone: "+84934381995",
    hasMenu: "https://www.banhmi59.com/menu",
    servesCuisine: "Vietnamese",
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      postalCode: "100000",
      streetAddress: "59b Cua Nam",
    },
    keywords:
      "banh mi, baguette, beef, chicken, traditional, vietnamese, cuisine, food",
    description: "a little store selling great banh mi",
    url: "https://www.banhmi59.com",
  };

  return (
    <>
      <Head>
        <title>Bánh Mì 59</title>
        <meta
          name="description"
          content="A local store selling vietnamese baguette"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SJCGC0FHMM"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJCGC0FHMM', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
