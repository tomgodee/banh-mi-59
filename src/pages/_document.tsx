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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
